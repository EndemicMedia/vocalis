import { test, expect } from '@playwright/test';
import path from 'path';
import { AxeBuilder } from '@axe-core/playwright';

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

test('includes investor sections', async ({ page }) => {
  await page.goto(fileUrl);
  await expect(page.getByRole('heading', { name: 'Market Opportunity' })).toBeVisible();
  await expect(page.getByRole('heading', { name: 'Business Model' })).toBeVisible();
});

