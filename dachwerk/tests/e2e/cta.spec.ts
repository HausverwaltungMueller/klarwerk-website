import { test, expect } from '@playwright/test';
import { cta } from '../../src/content/cta';

/** Zentrale Handlungsangebote aus der CTA-Matrix, docs/05-KOHAERENZPRUEFUNG, Teil C. */
test.describe('Zentrale CTAs', () => {
  test('Kopfzeile: Projekt besprechen fuehrt ins Kontaktformular', async ({ page }) => {
    await page.goto('/');
    await page.getByRole('link', { name: cta.projekt }).first().click();
    await expect(page).toHaveURL('/kontakt/');
  });

  test('Hero: primaerer und sekundaerer CTA sind gesetzt', async ({ page }) => {
    await page.goto('/');
    const hero = page.locator('#hero');
    await expect(hero.getByRole('link', { name: cta.projekt }).first()).toHaveAttribute('href', '/kontakt/');
    await expect(hero.getByRole('link', { name: cta.leistungen })).toHaveAttribute('href', '/#leistungen');
  });

  test('mobile Aktionsleiste erscheint nach dem Hero mit Anruf- und Projektziel', async ({ page, isMobile }) => {
    test.skip(!isMobile, 'nur im mobilen Projekt relevant');
    await page.goto('/');
    const bar = page.locator('[data-sticky-actions]');
    await expect(bar).toHaveAttribute('data-sticky-actions', 'verborgen');
    await page.evaluate(() => window.scrollTo(0, document.body.scrollHeight * 0.3));
    await page.waitForTimeout(200);
    await expect(bar).toHaveAttribute('data-sticky-actions', 'sichtbar');
    await expect(bar.getByRole('link', { name: cta.projekt })).toHaveAttribute('href', '/kontakt/');
  });
});
