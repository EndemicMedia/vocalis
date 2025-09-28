import { test, expect } from '@playwright/test';
import path from 'path';
import { AxeBuilder } from '@axe-core/playwright';

test.use({ ignoreHTTPSErrors: true });

const fileUrl = 'file://' + path.join(__dirname, '..', 'index.html');

const viewports = [
  { name: 'mobile-portrait', width: 375, height: 667 },
  { name: 'mobile-landscape', width: 667, height: 375 },
  { name: 'tablet-portrait', width: 768, height: 1024 },
  { name: 'tablet-landscape', width: 1024, height: 768 },
  { name: 'desktop', width: 1280, height: 800 }
];

for (const vp of viewports) {
  test(`render ${vp.name}`, async ({ page }) => {
    await page.setViewportSize({ width: vp.width, height: vp.height });
    await page.goto(fileUrl);
    await expect(page).toHaveTitle(/Vocalis/);
    await expect(page.locator('h1')).toBeVisible();
    await expect(page.getByText('Join the Waitlist')).toBeVisible();
  });
}

test('has no console errors or failed requests and loads quickly', async ({ page }) => {
  const errors = [];
  const failed = [];
  page.on('pageerror', err => errors.push(err.message));
  page.on('console', msg => {
    if (msg.type() === 'error') errors.push(msg.text());
  });
  page.on('requestfailed', req => failed.push(req.url()));
  await page.goto(fileUrl);
  await page.waitForLoadState('load');
  const loadTime = await page.evaluate(() => {
    const { loadEventEnd, navigationStart } = performance.timing;
    return loadEventEnd - navigationStart;
  });
  expect(loadTime).toBeLessThan(5000);
  expect(errors).toEqual([]);
  expect(failed).toEqual([]);
});

test('loads Shoelace base styles before theme', async ({ page }) => {
  await page.goto(fileUrl);
  const hrefs = await page.evaluate(() =>
    Array.from(document.querySelectorAll('head link[rel="stylesheet"]')).map(l => l.href)
  );
  const baseIndex = hrefs.findIndex(h => h.includes('themes/light.css'));
  const darkIndex = hrefs.findIndex(h => h.includes('themes/dark.css'));
  expect(baseIndex).toBeGreaterThan(-1);
  expect(darkIndex).toBeGreaterThan(-1);
  expect(baseIndex).toBeLessThan(darkIndex);
});

test('styles Shoelace button', async ({ page }) => {
  await page.goto(fileUrl);
  await page.waitForLoadState('networkidle');
  const metrics = await page.evaluate(() => {
    const button = document.querySelector('sl-button[type="submit"]');
    if (!button) {
      throw new Error('Submit button missing');
    }
    const base = button.shadowRoot?.querySelector('[part="base"]');
    if (!base) {
      throw new Error('Shoelace base part missing');
    }
    const styles = getComputedStyle(base);
    return {
      borderRadius: styles.borderRadius,
      backgroundColor: styles.backgroundColor,
      color: styles.color,
      fontWeight: styles.fontWeight,
      height: base.getBoundingClientRect().height
    };
  });
  expect(parseFloat(metrics.borderRadius)).toBeGreaterThan(0);
  expect(metrics.backgroundColor).not.toBe('rgba(0, 0, 0, 0)');
  expect(metrics.color).not.toBe('rgb(0, 0, 0)');
  expect(metrics.height).toBeGreaterThan(30);
  expect(parseInt(metrics.fontWeight, 10)).toBeGreaterThanOrEqual(500);
});

test('renders layout structure', async ({ page }) => {
  await page.goto(fileUrl);
  await page.waitForLoadState('domcontentloaded');
  const layout = await page.evaluate(() => {
    const header = document.querySelector('header');
    const main = document.querySelector('main');
    if (!header || !main) {
      throw new Error('Missing main layout elements');
    }
    const heroRect = header.getBoundingClientRect();
    const firstCard = document.querySelector('sl-card');
    const base = firstCard?.shadowRoot?.querySelector('[part="base"]');
    const firstCardRect = base?.getBoundingClientRect();
    const baseStyles = base ? getComputedStyle(base) : null;
    return {
      headerWidth: heroRect.width,
      headerHeight: heroRect.height,
      cardWidth: firstCardRect?.width ?? 0,
      cardShadow: baseStyles?.boxShadow ?? ''
    };
  });
  expect(layout.headerWidth).toBeGreaterThan(400);
  expect(layout.headerHeight).toBeGreaterThan(200);
  expect(layout.cardWidth).toBeGreaterThan(200);
  expect(layout.cardShadow).not.toBe('none');
});

test('has SEO essentials', async ({ page }) => {
  await page.goto(fileUrl);
  const description = await page.locator('meta[name="description"]').getAttribute('content');
  expect(description).toBeTruthy();
  const keywords = await page.locator('meta[name="keywords"]').getAttribute('content');
  expect(keywords).toBeTruthy();
  const canonical = await page.locator('link[rel="canonical"]').getAttribute('href');
  expect(canonical).toBeTruthy();
  await expect(page.locator('h1')).toBeVisible();
});

test('is accessible', async ({ page }) => {
  await page.goto(fileUrl);
  const results = await new AxeBuilder({ page }).analyze();
  expect(results.violations).toEqual([]);
});

test('respects system dark mode and toggles theme', async ({ page }) => {
  await page.emulateMedia({ colorScheme: 'dark' });
  await page.goto(fileUrl);
  await expect(page.locator('meta[name="color-scheme"]')).toHaveAttribute('content', 'light dark');
  const body = page.locator('body');
  await expect(body).toHaveClass(/sl-theme-dark/);
  await expect(body).toHaveAttribute('data-theme', 'dark');
  const { initialScheme, darkBackground, neutralToken } = await page.evaluate(() => ({
    initialScheme: document.documentElement.style.colorScheme,
    darkBackground: getComputedStyle(document.body).backgroundColor,
    neutralToken: getComputedStyle(document.body).getPropertyValue('--sl-color-neutral-0').trim()
  }));
  expect(initialScheme).toBe('dark light');
  expect(darkBackground).not.toBe('rgb(255, 255, 255)');
  expect(neutralToken).not.toBe('');
  const toggle = page.getByRole('button', { name: /switch to light mode/i });
  await toggle.click();
  await expect(body).not.toHaveClass(/sl-theme-dark/);
  await expect(body).toHaveClass(/sl-theme-light/);
  await expect(body).toHaveAttribute('data-theme', 'light');
  const { lightScheme, lightBackground } = await page.evaluate(() => ({
    lightScheme: document.documentElement.style.colorScheme,
    lightBackground: getComputedStyle(document.body).backgroundColor
  }));
  expect(lightScheme).toBe('light dark');
  expect(lightBackground).not.toBe(darkBackground);
  await expect(page.getByRole('button', { name: /switch to dark mode/i })).toBeVisible();
  await page.reload();
  await expect(body).not.toHaveClass(/sl-theme-dark/);
  await expect(body).toHaveAttribute('data-theme', 'light');
  await expect(page.getByRole('button', { name: /switch to dark mode/i })).toBeVisible();
});

test('includes investor sections', async ({ page }) => {
  await page.goto(fileUrl);
  await expect(page.getByRole('heading', { name: 'Market Opportunity' })).toBeVisible();
  await expect(page.getByRole('heading', { name: 'Business Model' })).toBeVisible();
});

test('waitlist form submits and resets', async ({ page }) => {
  await page.goto(fileUrl);
  const input = page.locator('sl-input[name="email"] input');
  await input.fill('user@example.com');
  await page.click('sl-button[type="submit"]');
  const alert = page.locator('sl-alert[type="success"]');
  await expect(alert).toBeVisible();
  await expect(input).toHaveValue('');
  await alert.waitFor({ state: 'detached' });
  await input.fill('user2@example.com');
  await page.click('sl-button[type="submit"]');
  await expect(alert).toBeVisible();
});

test('images have alt text', async ({ page }) => {
  await page.goto(fileUrl);
  const alts = await page.$$eval('img', imgs => imgs.map(img => img.getAttribute('alt')));
  expect(alts.every(a => a && a.trim().length > 0)).toBe(true);
});

