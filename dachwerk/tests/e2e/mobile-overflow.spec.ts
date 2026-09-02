import { test, expect } from '@playwright/test';

/** Kein horizontaler Overflow auf 390px Breite, geprueft an fuenf Seitentypen. */
const ROUTES = ['/', '/dach/dachsanierung/', '/region/hildesheim/', '/kontakt/', '/ratgeber/pv-kosten/'];

test.describe('Mobile Breite ohne horizontalen Overflow', () => {
  for (const path of ROUTES) {
    test(`kein Overflow auf ${path}`, async ({ page, isMobile }) => {
      test.skip(!isMobile, 'Viewport wird ueber das mobile Projekt vorgegeben');
      await page.setViewportSize({ width: 390, height: 844 });
      await page.goto(path);
      await page.waitForTimeout(300);
      const overflow = await page.evaluate(
        () => document.documentElement.scrollWidth - document.documentElement.clientWidth,
      );
      expect(overflow, `${path} hat horizontalen Overflow von ${overflow}px`).toBeLessThanOrEqual(1);
    });
  }
});
