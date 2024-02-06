import { expect, test } from '@playwright/test'

test('index page has expected h1', async ({ page }) => {
	await page.goto('/')
	await expect(page.getByRole('heading', { name: 'Welcome to SvelteKit' })).toBeVisible()
})

test('Submitting form with name "John Doe" greets with "Hello, John Doe!"', async ({ page }) => {
	await page.goto('/')
	await page.getByRole('textbox', { name: 'name' }).fill('John Doe')
	await page.click('text=Submit')

	await expect(page.getByText('Hello, John Doe!')).toBeVisible()
})
