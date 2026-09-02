import { test, expect } from '@playwright/test';

/**
 * Navigation, Mega-Panel, Mobilmenue, Brotkrume und interne Verlinkung der
 * Startseite. Ergaenzt scripts/check-links.ts (statische Pruefung des
 * vorgerenderten HTML) um eine Pruefung gegen den echten HTTP-Server.
 */
test.describe('Navigation', () => {
  test('Mega-Panel Dach oeffnet per Klick und verlinkt in die Domaene', async ({ page, isMobile }) => {
    test.skip(isMobile, 'Mega-Panel existiert nur ab dem lg-Breakpoint');
    await page.goto('/');
    await page.getByRole('button', { name: 'Dach', exact: true }).click();
    const panel = page.locator('#panel-dach');
    await expect(panel).toBeVisible();
    await expect(panel.getByRole('link', { name: 'Alle Leistungen' })).toHaveAttribute('href', '/dach/');
  });

  test('Mobiles Menue oeffnet ueber die volle Flaeche mit sieben Zielen plus Telefon', async ({ page, isMobile }) => {
    test.skip(!isMobile, 'nur im mobilen Projekt relevant');
    await page.goto('/');
    await page.getByRole('button', { name: 'Menü' }).click();
    const nav = page.getByRole('navigation', { name: 'Hauptnavigation' });
    await expect(nav).toBeVisible();
    await expect(nav.locator('a[href^="/"]')).toHaveCount(7);
    await expect(nav.locator('a[href^="tel:"]')).toHaveCount(1);
  });

  test('Brotkrume erscheint auf Unterseiten, nicht auf der Startseite', async ({ page }) => {
    await page.goto('/');
    await expect(page.getByRole('navigation', { name: 'Brotkrumennavigation' })).toHaveCount(0);
    await page.goto('/dach/dachsanierung/');
    const crumb = page.getByRole('navigation', { name: 'Brotkrumennavigation' });
    await expect(crumb).toBeVisible();
    await expect(crumb.getByText('Dachsanierung')).toBeVisible();
  });

  test('interne Links der Startseite antworten ohne Fehlerstatus', async ({ page, request, baseURL }) => {
    await page.goto('/');
    const hrefs = await page.locator('a[href^="/"]').evaluateAll((els) =>
      Array.from(new Set(els.map((e) => e.getAttribute('href')).filter((h): h is string => !!h))),
    );
    expect(hrefs.length).toBeGreaterThan(5);
    for (const href of hrefs) {
      const res = await request.get(`${baseURL}${href}`);
      expect(res.status(), `Link ${href} antwortet mit ${res.status()}`).toBeLessThan(400);
    }
  });
});
