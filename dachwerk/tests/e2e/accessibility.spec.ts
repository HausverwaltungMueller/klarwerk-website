import { test, expect } from '@playwright/test';
import AxeBuilder from '@axe-core/playwright';

/**
 * Automatisierte Barrierefreiheits-Rauchtests. Ersetzt keine manuelle Pruefung,
 * faengt aber Regressionen bei Kontrast, Formularbezuegen und Landmarken ab.
 * docs/06, Abschnitt 15.
 */
test.describe('Barrierefreiheit', () => {
  test('Startseite hat keine kritischen oder schwerwiegenden Axe-Befunde', async ({ page }) => {
    await page.goto('/');
    // Der eingeschwungene Zustand zaehlt: waehrend des Reveal-Uebergangs (--dur-3,
    // 640ms) durchlaeuft die Deckkraft Zwischenwerte, die Axe faelschlich als
    // Kontrastfehler liest. Der Kontrast selbst ist bereits ueber npm run contrast
    // gegen alle Token-Paare geprueft.
    await page.waitForTimeout(1200);
    const results = await new AxeBuilder({ page }).analyze();
    const relevant = results.violations.filter((v) => v.impact === 'critical' || v.impact === 'serious');
    expect(relevant, JSON.stringify(relevant, null, 2)).toEqual([]);
  });

  test('Kontaktseite mit Formular hat keine kritischen oder schwerwiegenden Axe-Befunde', async ({ page }) => {
    await page.goto('/kontakt/');
    await page.waitForTimeout(1200);
    const results = await new AxeBuilder({ page }).analyze();
    const relevant = results.violations.filter((v) => v.impact === 'critical' || v.impact === 'serious');
    expect(relevant, JSON.stringify(relevant, null, 2)).toEqual([]);
  });

  test('Landmarken Kopf, Hauptinhalt und Fuss sind vorhanden', async ({ page }) => {
    await page.goto('/');
    await expect(page.locator('header')).toBeVisible();
    await expect(page.locator('main#inhalt')).toBeVisible();
    await expect(page.locator('footer')).toBeVisible();
  });

  test('reduzierte Bewegung: kein motion-ready, Hero-Inhalt sofort sichtbar', async ({ page }) => {
    await page.emulateMedia({ reducedMotion: 'reduce' });
    await page.goto('/');
    const hasMotionReady = await page.evaluate(() => document.documentElement.classList.contains('motion-ready'));
    expect(hasMotionReady).toBe(false);
    const heroHeading = page.locator('#hero h1');
    await expect(heroHeading).toBeVisible();
    await expect(heroHeading).toHaveCSS('opacity', '1');
  });
});
