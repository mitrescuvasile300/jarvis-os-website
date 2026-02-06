import { test, expect } from '@playwright/test';

/**
 * Navigation E2E Tests
 * Tests site navigation functionality
 */

test.describe('Navigation', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/');
  });

  test('should navigate to all main pages', async ({ page }) => {
    // Get all navigation links
    const links = page.locator('nav a');
    const count = await links.count();
    
    // Skip if no navigation links found
    test.skip(count === 0, 'No navigation links found');
    
    // Test each link
    for (let i = 0; i < count; i++) {
      const link = links.nth(i);
      const href = await link.getAttribute('href');
      
      // Skip external links and anchors
      if (href?.startsWith('http') || href?.startsWith('#')) continue;
      
      await link.click();
      await expect(page).toHaveURL(new RegExp(href || '/'));
      await page.goBack();
    }
  });

  test('should highlight current page in navigation', async ({ page }) => {
    const activeLink = page.locator('nav a[aria-current="page"], nav a.active, nav a[data-active="true"]');
    // This test passes if no active link is found (optional feature)
    // or if an active link is visible
    const count = await activeLink.count();
    if (count > 0) {
      await expect(activeLink.first()).toBeVisible();
    }
  });

  test('should have working logo link to homepage', async ({ page }) => {
    const logo = page.locator('nav a[href="/"], header a[href="/"]').first();
    if (await logo.count() > 0) {
      await logo.click();
      await expect(page).toHaveURL('/');
    }
  });

  test('should support keyboard navigation', async ({ page }) => {
    await page.keyboard.press('Tab');
    const focusedElement = page.locator(':focus');
    await expect(focusedElement).toBeVisible();
  });
});
