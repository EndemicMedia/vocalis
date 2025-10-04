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
    await expect(page.getByRole('heading', { level: 1 })).toBeVisible();
    await expect(page.getByRole('button', { name: /join the waitlist/i })).toBeVisible();
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
  const filteredErrors = errors.filter(error => !error.includes('ERR_CERT_AUTHORITY_INVALID'));
  expect(filteredErrors).toEqual([]);
  const filteredFailed = failed.filter(url => !url.includes('image.pollinations.ai'));
  expect(filteredFailed).toEqual([]);
});

test('loads Tailwind CDN script and stylesheet', async ({ page }) => {
  await page.goto(fileUrl);
  await page.waitForSelector('link[rel="stylesheet"][href*="tailwindcss"]', { state: 'attached' });
  await page.waitForFunction(() => {
    const body = document.body;
    const button = document.querySelector('button[type="submit"]');
    if (!body || !button) return false;
    const bodyBg = getComputedStyle(body).backgroundColor;
    const buttonDisplay = getComputedStyle(button).display;
    return bodyBg !== 'rgba(0, 0, 0, 0)' && buttonDisplay !== 'none';
  });
  const info = await page.evaluate(() => {
    const links = Array.from(document.querySelectorAll('link[rel="stylesheet"]')).map(link => link.href);
    const bodyBg = getComputedStyle(document.body).backgroundColor;
    const button = document.querySelector('button[type="submit"]');
    const buttonDisplay = button ? getComputedStyle(button).display : '';
    const bodyDataset = document.body.dataset.tailwind ?? '';
    return { links, bodyBg, buttonDisplay, bodyDataset };
  });

  expect(info.links.some(href => href.includes('tailwindcss'))).toBe(true);
  expect(info.bodyBg).not.toBe('rgba(0, 0, 0, 0)');
  expect(['flex', 'inline-flex']).toContain(info.buttonDisplay);
  expect(['', 'inline-fallback']).toContain(info.bodyDataset);
});

test('tailwind utilities apply styles to the hero area', async ({ page }) => {
  await page.goto(fileUrl);
  await page.waitForLoadState('domcontentloaded');
  const metrics = await page.evaluate(() => {
    const main = document.querySelector('main');
    const header = document.querySelector('header');
    const button = document.querySelector('button[type="submit"]');
    const heroImage = document.getElementById('hero-image');
    if (!main || !header || !button || !heroImage) {
      throw new Error('Missing hero elements');
    }
    const mainRect = main.getBoundingClientRect();
    const headerStyle = getComputedStyle(header);
    const buttonStyle = getComputedStyle(button);
    const heroStyle = getComputedStyle(heroImage);
    return {
      mainWidth: mainRect.width,
      headerDisplay: headerStyle.display,
      buttonBackground: buttonStyle.backgroundColor,
      buttonRadius: parseFloat(buttonStyle.borderRadius),
      heroRadius: parseFloat(heroStyle.borderRadius),
      gap: headerStyle.rowGap || headerStyle.gap
    };
  });
  expect(metrics.mainWidth).toBeGreaterThan(600);
  expect(metrics.headerDisplay).toBe('grid');
  expect(metrics.buttonBackground).not.toBe('rgba(0, 0, 0, 0)');
  expect(metrics.buttonBackground).not.toBe('rgb(255, 255, 255)');
  expect(metrics.buttonRadius).toBeGreaterThan(10);
  expect(metrics.heroRadius).toBeGreaterThan(10);
  expect(parseFloat(metrics.gap)).toBeGreaterThan(0);
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
  const html = page.locator('html');
  await expect(html).toHaveClass(/dark/);
  await expect(body).toHaveAttribute('data-theme', 'dark');
  const { initialScheme, darkBackground } = await page.evaluate(() => ({
    initialScheme: document.documentElement.style.colorScheme,
    darkBackground: getComputedStyle(document.body).backgroundColor
  }));
  expect(initialScheme).toBe('dark light');
  expect(darkBackground).not.toBe('rgba(0, 0, 0, 0)');
  const toggle = page.getByRole('button', { name: /switch to light mode/i });
  await toggle.click();
  await expect(html).not.toHaveClass(/dark/);
  await expect(body).toHaveAttribute('data-theme', 'light');
  const { lightScheme, lightBackground } = await page.evaluate(() => ({
    lightScheme: document.documentElement.style.colorScheme,
    lightBackground: getComputedStyle(document.body).backgroundColor
  }));
  expect(lightScheme).toBe('light dark');
  expect(lightBackground).not.toBe('rgba(0, 0, 0, 0)');
  expect(lightBackground).not.toBe(darkBackground);
  await expect(page.getByRole('button', { name: /switch to dark mode/i })).toBeVisible();
  await page.reload();
  await expect(html).not.toHaveClass(/dark/);
  await expect(body).toHaveAttribute('data-theme', 'light');
});

test('includes investor sections', async ({ page }) => {
  await page.goto(fileUrl);
  await expect(page.getByRole('heading', { name: 'Market Opportunity' })).toBeVisible();
  await expect(page.getByRole('heading', { name: 'Business Model' })).toBeVisible();
});

test('waitlist form submits and resets', async ({ page }) => {
  await page.goto(fileUrl);
  const input = page.getByLabel('Email address');
  await input.fill('user@example.com');
  await page.getByRole('button', { name: /join the waitlist/i }).click();
  const alert = page.getByRole('status');
  await expect(alert).toBeVisible();
  await expect(input).toHaveValue('');
  await expect(alert).toContainText("We'll be in touch");
  await page.waitForTimeout(3200);
  await expect(alert).not.toBeVisible();
  await input.fill('user2@example.com');
  await page.getByRole('button', { name: /join the waitlist/i }).click();
  await expect(page.getByRole('status')).toBeVisible();
});

test('images have alt text', async ({ page }) => {
  await page.goto(fileUrl);
  const alts = await page.$$eval('img', imgs => imgs.map(img => img.getAttribute('alt')));
  expect(alts.every(a => a && a.trim().length > 0)).toBe(true);
});

test('hero layout scales across breakpoints', async ({ page }) => {
  await page.goto(fileUrl);
  const sizes = [];
  for (const width of [375, 768, 1280]) {
    await page.setViewportSize({ width, height: 720 });
    await page.waitForTimeout(50);
    const rect = await page.evaluate(() => {
      const header = document.querySelector('header');
      if (!header) throw new Error('Missing header');
      const { width, height } = header.getBoundingClientRect();
      return { width, height };
    });
    sizes.push(rect);
  }
  expect(sizes[0].width).toBeGreaterThan(300);
  expect(sizes[1].width).toBeGreaterThan(500);
  expect(sizes[2].width).toBeGreaterThan(sizes[1].width);
  expect(sizes.every(size => size.height > 200)).toBe(true);
});

