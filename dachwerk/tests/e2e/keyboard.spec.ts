import { test, expect } from '@playwright/test';

/**
 * Tastaturbedienung: Sprungmarke, sichtbarer Fokus, Mega-Panel.
 * docs/06, Abschnitt 15: "Tastaturbedienung fuer Mega-Panel ... Sprungmarke im Hero",
 * "Fokus immer sichtbar, --focus, nie outline: none ohne Ersatz".
 */
test.describe('Tastaturbedienung', () => {
  test('Sprungmarke ist das erste fokussierbare Element und zeigt auf #inhalt', async ({ page }) => {
    await page.goto('/');
    await page.keyboard.press('Tab');
    const active = page.locator(':focus');
    await expect(active).toHaveText('Zum Inhalt springen');
    await expect(active).toHaveAttribute('href', '#inhalt');
  });

  test('sichtbarer Fokusring auf dem ersten Tab-Ziel', async ({ page }) => {
    await page.goto('/');
    await page.keyboard.press('Tab');
    const outline = await page.locator(':focus').evaluate((el) => getComputedStyle(el).outlineStyle);
    expect(outline).not.toBe('none');
  });

  test('Mega-Panel oeffnet bei Fokus und schliesst, wenn der Fokus es verlaesst', async ({ page, isMobile }) => {
    test.skip(isMobile, 'Mega-Panel existiert nur ab dem lg-Breakpoint');
    await page.goto('/');
    await page.getByRole('button', { name: 'Dach', exact: true }).focus();
    await expect(page.locator('#panel-dach')).toBeVisible();
    for (let i = 0; i < 8; i++) await page.keyboard.press('Tab');
    await expect(page.locator('#panel-dach')).toHaveCount(0);
  });
});
