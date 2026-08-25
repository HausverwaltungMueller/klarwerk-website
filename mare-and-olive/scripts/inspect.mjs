import { chromium } from 'playwright'
import fs from 'node:fs'

const BASE = 'http://localhost:4173'
const routes = ['/', '/menu', '/restaurant', '/story', '/contact', '/reservation', '/imprint', '/privacy', '/does-not-exist']
const viewports = [
  { name: 'mobile', width: 390, height: 844 },
  { name: 'tablet', width: 768, height: 1024 },
  { name: 'desktop', width: 1440, height: 900 },
]

fs.mkdirSync('screenshots', { recursive: true })

const browser = await chromium.launch({ executablePath: '/opt/pw-browsers/chromium' }).catch(() => chromium.launch())
let hadErrors = false

for (const route of routes) {
  const context = await browser.newContext({ viewport: viewports[2] })
  const page = await context.newPage()
  const errors = []
  page.on('console', (msg) => {
    if (msg.type() === 'error') errors.push(msg.text())
  })
  page.on('pageerror', (err) => errors.push(String(err)))

  const resp = await page.goto(`${BASE}${route}`, { waitUntil: 'load', timeout: 15000 })
  await page.waitForTimeout(400)

  const h1Count = await page.locator('h1').count()
  const title = await page.title()
  const status = resp?.status()

  console.log(`\n=== ${route} ===`)
  console.log('status:', status, '| title:', title, '| h1 count:', h1Count)
  if (errors.length) {
    hadErrors = true
    console.log('CONSOLE ERRORS:', errors)
  }

  const slug = route === '/' ? 'home' : route.replace(/\//g, '')
  await page.screenshot({ path: `screenshots/${slug}-desktop.png`, fullPage: true })
  await context.close()
}

// Mobile pass on home + menu + reservation, also test mobile menu + form
for (const [route, name] of [['/', 'home'], ['/menu', 'menu'], ['/reservation', 'reservation']]) {
  const context = await browser.newContext({ viewport: viewports[0] })
  const page = await context.newPage()
  await page.goto(`${BASE}${route}`, { waitUntil: 'load', timeout: 15000 })
  await page.waitForTimeout(300)
  await page.screenshot({ path: `screenshots/${name}-mobile.png`, fullPage: true })

  if (route === '/') {
    await page.getByRole('button', { name: /open menu/i }).click()
    await page.waitForTimeout(500)
    await page.screenshot({ path: `screenshots/mobile-menu-open.png`, fullPage: false })
    await page.getByRole('button', { name: /close menu/i }).click()
  }
  await context.close()
}

// Reservation form flow
{
  const context = await browser.newContext({ viewport: viewports[2] })
  const page = await context.newPage()
  await page.goto(`${BASE}/reservation`, { waitUntil: 'load', timeout: 15000 })
  await page.getByLabel('Name').fill('Anna Beispiel')
  await page.getByLabel('Email').fill('anna@example.com')
  await page.getByLabel('Phone').fill('+49 40 1234567')
  await page.getByLabel('Date').fill('2026-09-12')
  await page.getByLabel('Time').fill('19:30')
  await page.getByRole('button', { name: /request reservation/i }).click()
  await page.waitForTimeout(1200)
  const thankYou = await page.getByText('Thank you.').count()
  console.log('\n=== reservation form submit ===')
  console.log('thank-you shown:', thankYou > 0)
  await page.screenshot({ path: 'screenshots/reservation-confirmed.png', fullPage: true })

  // Validation test: empty submit
  await page.goto(`${BASE}/reservation`, { waitUntil: 'load', timeout: 15000 })
  await page.getByRole('button', { name: /request reservation/i }).click()
  await page.waitForTimeout(200)
  const errCount = await page.locator('text=Please').count()
  console.log('validation errors shown on empty submit:', errCount)
  await context.close()
}

// Nav link check across desktop
{
  const context = await browser.newContext({ viewport: viewports[2] })
  const page = await context.newPage()
  await page.goto(`${BASE}/`, { waitUntil: 'load', timeout: 15000 })
  const links = await page.locator('header nav a').all()
  console.log('\n=== desktop nav links ===', links.length)
  await context.close()
}

await browser.close()
console.log('\nDONE. hadConsoleErrors:', hadErrors)
