import { test, expect } from '@playwright/test';


test('has title', async ({ page }) => {
    await page.goto('https://linkstaff.biz/');

    // Expect a title "to contain" a substring.
    await expect(page).toHaveTitle(/LinkStaff求人サイト/);
});

test('has title and clicks apply button', async ({ page }) => {
    // Navigate to the specified URL.
    await page.goto('https://linkstaff.biz/');

    // Click the button with class 'btn_apply'.
    await page.click('.btn_apply');
});

test('login successfull', async ({ page }) => {
    await page.goto('https://linkstaff.biz/');

    // Visit the span with text 'ログイン'.
    const loginSpan = page.locator('span:has-text("ログイン")');
    await loginSpan.click();

    await page.locator('[name="email"]').fill('')

    await page.locator('[name="password"]').fill('')

    await page.locator('text=同意してログイン').click()

    await page.locator('text=ゴラム サロワル').isVisible();





});


