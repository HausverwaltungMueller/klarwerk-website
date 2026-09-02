import { defineConfig, devices } from '@playwright/test';

/**
 * Browser-QA fuer den gebauten, vorgerenderten Stand (dist/), nicht fuer den
 * Dev-Server. `npm run test:e2e` baut zuerst (siehe package.json, pretest:e2e)
 * und startet danach `vite preview` gegen genau dieses Ergebnis.
 * docs/06, Abschnitt 1.1 nennt Playwright fuer Rauchtests, docs/07 beschreibt
 * die Pruefungen, die hier als reproduzierbare Tests verankert werden.
 */
export default defineConfig({
  testDir: './tests/e2e',
  fullyParallel: true,
  forbidOnly: !!process.env.CI,
  retries: process.env.CI ? 1 : 0,
  reporter: [['list']],
  timeout: 30_000,
  use: {
    baseURL: 'http://localhost:4173',
    trace: 'retain-on-failure',
    // Diese Umgebung liefert einen vorinstallierten Chromium unter einem eigenen
    // Pfad, dessen Revision von der des installierten @playwright/test abweicht.
    launchOptions: process.env.PLAYWRIGHT_CHROMIUM_PATH
      ? { executablePath: process.env.PLAYWRIGHT_CHROMIUM_PATH }
      : undefined,
  },
  webServer: {
    command: 'npm run preview -- --port 4173 --strictPort',
    url: 'http://localhost:4173',
    reuseExistingServer: !process.env.CI,
    timeout: 30_000,
  },
  projects: [
    { name: 'desktop', use: { ...devices['Desktop Chrome'] } },
    { name: 'mobile', use: { ...devices['Pixel 7'] } },
  ],
});
