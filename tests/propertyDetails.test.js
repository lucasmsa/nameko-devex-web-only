import { expect, test } from '@playwright/test'

test.describe('roperty Details page', async ({ page }) => {
	await page.goto('/property-details')
	expect(true).toBe(true)
})
