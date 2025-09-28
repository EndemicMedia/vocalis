import { test, expect } from '@playwright/test';

test.use({ ignoreHTTPSErrors: true });

const deployUrl = process.env.DEPLOY_URL;

// Skip the suite when the deployment URL is not provided.
test.describe('GitHub Pages deployment', () => {
  test.skip(!deployUrl, 'DEPLOY_URL not set');

  test('loads styles and assets', async ({ page }) => {
    await page.goto(deployUrl);
    await page.waitForLoadState('networkidle');
    const { styleCount, brokenImages, hrefs } = await page.evaluate(() => {
      const styleCount = document.styleSheets.length;
      const brokenImages = Array.from(document.images)
        .filter(img => img.getAttribute('src') && (!img.complete || img.naturalWidth === 0)).length;
      const hrefs = Array.from(document.querySelectorAll('head link[rel="stylesheet"]')).map(l => l.href);
      return { styleCount, brokenImages, hrefs };
    });
    const baseIndex = hrefs.findIndex(h => h.includes('themes/light.css'));
    const darkIndex = hrefs.findIndex(h => h.includes('themes/dark.css'));
    expect(styleCount).toBeGreaterThan(0);
    expect(brokenImages).toBe(0);
    expect(baseIndex).toBeGreaterThan(-1);
    expect(darkIndex).toBeGreaterThan(-1);
    expect(baseIndex).toBeLessThan(darkIndex);
  });

  test('has no console errors or failed requests and loads quickly', async ({ page }) => {
    const errors = [];
    const failed = [];
    page.on('pageerror', err => errors.push(err.message));
    page.on('console', msg => {
      if (msg.type() === 'error') errors.push(msg.text());
    });
    page.on('requestfailed', req => failed.push(req.url()));
    await page.goto(deployUrl);
    await page.waitForLoadState('load');
    const loadTime = await page.evaluate(() => {
      const { loadEventEnd, navigationStart } = performance.timing;
      return loadEventEnd - navigationStart;
    });
    expect(loadTime).toBeLessThan(5000);
    expect(errors).toEqual([]);
    expect(failed).toEqual([]);
  });

  test('renders themed hero section', async ({ page }) => {
    await page.goto(deployUrl);
    await page.waitForLoadState('networkidle');
    const heroStyles = await page.evaluate(() => {
      const header = document.querySelector('header');
      const toggle = document.querySelector('#theme-toggle');
      if (!header || !toggle) {
        throw new Error('Hero layout missing');
      }
      const headerRect = header.getBoundingClientRect();
      const toggleBase = toggle.shadowRoot?.querySelector('[part="base"]');
      const toggleStyles = toggleBase ? getComputedStyle(toggleBase) : null;
      const bodyStyles = getComputedStyle(document.body);
      return {
        headerWidth: headerRect.width,
        headerHeight: headerRect.height,
        toggleColor: toggleStyles?.color ?? '',
        background: bodyStyles.backgroundColor,
        neutralToken: bodyStyles.getPropertyValue('--sl-color-neutral-0').trim()
      };
    });
    expect(heroStyles.headerWidth).toBeGreaterThan(400);
    expect(heroStyles.headerHeight).toBeGreaterThan(200);
    expect(heroStyles.toggleColor).not.toBe('');
    expect(heroStyles.background).not.toBe('rgba(0, 0, 0, 0)');
    expect(heroStyles.neutralToken).not.toBe('');
  });

  test('supports dark mode toggle', async ({ page }) => {
    await page.emulateMedia({ colorScheme: 'dark' });
    await page.goto(deployUrl);
    await page.waitForLoadState('load');
    await expect(page.locator('body')).toHaveClass(/sl-theme-dark/);
    const toggle = page.getByRole('button', { name: /switch to light mode/i });
    await toggle.click();
    await expect(page.locator('body')).not.toHaveClass(/sl-theme-dark/);
    await expect(page.getByRole('button', { name: /switch to dark mode/i })).toBeVisible();
  });
});
