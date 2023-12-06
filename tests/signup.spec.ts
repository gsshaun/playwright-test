import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://linkstaff.biz/');
  await page.getByRole('link', { name: 'ログイン' }).click();
  await page.getByRole('link', { name: '新規登録する' }).click();
  await page.getByPlaceholder('Enter Email...').click();
  await page.getByPlaceholder('Enter Email...').fill('');
  await page.getByPlaceholder('Enter Password...').click();
  await page.getByPlaceholder('Enter Password...').fill('');
  await page.getByLabel('男').check();
  await page.getByPlaceholder('Enter First name...').click();
  await page.getByPlaceholder('Enter First name...').fill('');
  await page.getByPlaceholder('Enter Last name...').click();
  await page.getByPlaceholder('Enter Last name...').fill('');
  await page.getByRole('button', { name: '登録する' }).click();
  // await page.getByPlaceholder('認証コード').click();

  const authCodeInput = await page.waitForSelector('[placeholder="認証コード"]')

  const isAuthCodeEmpty = await authCodeInput.inputValue() === '';

  if (!isAuthCodeEmpty) {
    await authCodeInput.click();
  }

  while (true) {
    const authCodeLength = (await authCodeInput.inputValue()).length;

    if (authCodeLength === 4) {
      break;
    }

    await page.waitForTimeout(1000);
  }

  await page.getByLabel('次へ').click();

});