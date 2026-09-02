import { test, expect } from '@playwright/test';
import { routes } from '../../src/routes';

/**
 * Rauchtest ueber alle dokumentierten Routen: HTTP-Erreichbarkeit, genau eine h1,
 * Titel und Description wie in routes.ts hinterlegt, keine Console- oder Skriptfehler.
 * Deckt zugleich die Hero- und Mobile-Hero-Szene ab, da beide beim Laden der
 * Startseite automatisch montiert werden. docs/07, B1 "SEO" und "Alle 18 Routen".
 */
for (const route of routes) {
  test(`${route.path} ist erreichbar, hat genau eine h1 und keine Konsolenfehler`, async ({ page }) => {
    const errors: string[] = [];
    page.on('console', (msg) => {
      if (msg.type() === 'error') errors.push(msg.text());
    });
    page.on('pageerror', (err) => errors.push(err.message));

    const response = await page.goto(route.path);
    expect(response?.ok(), `HTTP-Status fuer ${route.path}`).toBeTruthy();

    await expect(page).toHaveTitle(route.title);
    await expect(page.locator('h1')).toHaveCount(1);

    const description = await page.locator('meta[name="description"]').getAttribute('content');
    expect(description).toBe(route.description);

    // kurz warten, damit dynamisch geladene Szenen (Three.js, GSAP) sich melden koennen
    await page.waitForTimeout(400);
    expect(errors, `Konsolenfehler auf ${route.path}:\n${errors.join('\n')}`).toEqual([]);
  });
}
