import { test, expect } from '@playwright/test';

/**
 * Vierstufige Projektanfrage: Navigation, feldweise Validierung, Zurueck ohne
 * Datenverlust, Musterversand. docs/06, Abschnitt 18.
 */
test.describe('Projektanfrage-Formular', () => {
  test('vier Schritte, Validierung und Musterversand', async ({ page }) => {
    await page.goto('/kontakt/');
    const form = page.locator('form');

    await expect(page.getByText('Schritt 1 von 4', { exact: true })).toBeVisible();
    await page.getByRole('button', { name: 'Weiter' }).click();
    await expect(form.getByText('Bitte wählen Sie mindestens einen Punkt aus.', { exact: false })).toBeVisible();

    await page.getByRole('button', { name: 'Dachsanierung', exact: true }).click();
    await page.getByRole('button', { name: 'Weiter' }).click();
    await expect(page.getByText('Schritt 2 von 4', { exact: true })).toBeVisible();

    const plz = page.locator('#plz');
    await plz.fill('12');
    await plz.blur();
    await expect(page.getByText('Bitte eine fünfstellige Postleitzahl eintragen.')).toBeVisible();
    await plz.fill('31134');
    await page.getByRole('button', { name: 'Weiter' }).click();
    await expect(page.getByText('Schritt 3 von 4', { exact: true })).toBeVisible();

    await page.locator('#name').fill('Max Mustermann');
    await page.getByRole('button', { name: 'Weiter' }).click();
    await expect(form.getByText('Bitte eine Telefonnummer oder eine E-Mail-Adresse angeben.', { exact: false })).toBeVisible();
    await page.locator('#telefon').fill('05121 000000');
    await page.getByRole('button', { name: 'Weiter' }).click();
    await expect(page.getByText('Schritt 4 von 4', { exact: true })).toBeVisible();

    await page.getByRole('button', { name: 'Projektanfrage senden' }).click();
    await expect(form.getByText('Bitte bestätigen Sie den Hinweis zum Datenschutz', { exact: false })).toBeVisible();

    await page.locator('input[type="checkbox"]').check();
    await page.getByRole('button', { name: 'Projektanfrage senden' }).click();

    await expect(page.getByText('Vielen Dank.')).toBeVisible();
    await expect(page.getByText('nicht übermittelt und nicht gespeichert', { exact: false })).toBeVisible();
  });

  test('Zurueck-Navigation behaelt bereits eingegebene Werte', async ({ page }) => {
    await page.goto('/kontakt/');
    await page.getByRole('button', { name: 'Dachreparatur', exact: true }).click();
    await page.getByRole('button', { name: 'Weiter' }).click();
    await page.locator('#plz').fill('31134');
    await page.getByRole('button', { name: 'Weiter' }).click();
    await page.getByRole('button', { name: 'Zurück' }).click();
    await expect(page.locator('#plz')).toHaveValue('31134');
  });
});
