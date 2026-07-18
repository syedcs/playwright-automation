const { test, expect } = require("@playwright/test");

test.only("this my 2nd program", async ({ page }) => {
  await page.goto("https://rahulshettyacademy.com/loginpagePractise/");
  await page.pause();
  await await page.getByRole("combobox").selectOption("Teacher");
  await page.getByLabel("User", { exact: true }).click();
  await page.waitForLoadState("networkidle");
});

