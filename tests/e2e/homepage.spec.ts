import { test, expect } from '@playwright/test';

/**
 * Homepage E2E Tests
 * Tests the main landing page functionality
 */

test.describe('Homepage', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/');
  });

  test('should display the main heading', async ({ page }) => {
    const heading = page.locator('h1');
    await expect(heading).toBeVisible();
    await expect(heading).not.toBeEmpty();
  });

  test('should have a valid page title', async ({ page }) => {
    await expect(page).toHaveTitle(/./);
  });

  test('should display navigation', async ({ page }) => {
    const nav = page.locator('nav');
    await expect(nav).toBeVisible();
  });

  test('should be responsive on mobile', async ({ page }) => {
    await page.setViewportSize({ width: 375, height: 667 });
    const main = page.locator('main');
    await expect(main).toBeVisible();
  });

  test('should have no console errors on load', async ({ page }) => {
    const errors: string[] = [];
    page.on('console', msg => {
      if (msg.type() === 'error') {
        errors.push(msg.text());
      }
    });
    await page.goto('/');
    await page.waitForLoadState('networkidle');
    expect(errors).toHaveLength(0);
  });
});
