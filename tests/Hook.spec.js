import { expect, test } from "@playwright/test";

test.beforeEach("souce login test hook", async ({ page }) => {
  await page.goto("https://www.saucedemo.com/");
  await page.locator('[data-test="username"]').click();
  await page.locator('[data-test="username"]').fill("standard_user");
  await page.locator('[data-test="password"]').click();
  await page.locator('[data-test="password"]').fill("secret_sauce");
  await page.locator('[data-test="login-button"]').click();
});

test("Souce validate home page add card test @smoke", async ({ page }) => {
  await page.locator('[data-test="add-to-cart-sauce-labs-backpack"]').click();
  await page.locator('[data-test="item-0-title-link"]').click();
  await page.locator('[data-test="add-to-cart"]').click();
});

test("Log out test", { tag: "@sanity" }, async ({ page }) => {
  await page.locator('[data-test="add-to-cart-sauce-labs-backpack"]').click();
  await page.locator('[data-test="item-0-title-link"]').click();
  await page.locator('[data-test="add-to-cart"]').click();
  await page.getByRole("button", { name: "Open Menu" }).click();
  await page.locator('[data-test="logout-sidebar-link"]').click();
});

test("Validate seelct option drop down", async ({ page }) => {
  await page.locator(".product_sort_container").selectOption("hilo");
  await page.locator("#add-to-cart-sauce-labs-fleece-jacket:visible").click();
});

test.afterEach("close browser hook ", async ({ page }) => {
  await page.close();
});
