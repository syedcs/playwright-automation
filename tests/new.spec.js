const { test, expect } = require("@playwright/test");
const dataset = JSON.parse(JSON.stringify(require("../utils/data.json")));

test("this is my test case", async ({ page }) => {
  await page.goto("https://www.naukri.com/");
  await page.getByTitle("Jobseeker Login").click();
  await page.getByRole("link", { name: "Register for free" }).waitFor({ state: "visible" });
  await page.getByRole("textbox", { name: "Enter your active Email ID / Username" }).fill("syedcs36@gmail.com");
  await expect(page.getByRole("link", { name: "Register for free" })).toHaveText("Register for free"); //.toBeVisible(); //
  await page.waitForLoadState("networkidle");
  const text = await page.getByRole("link", { name: "Register for free" }).textContent();
  console.log(text);

  await page.getByRole("textbox", { name: "Enter your active Email ID / Username" }).clear();
});

test("Simple GET API test", async ({ request }) => {
  // Make a GET request to a sample API
  const response = await request.get("https://jsonplaceholder.typicode.com/posts/1");

  // Validate status code
  expect(response.status()).toBe(200);

  // Validate response body
  const body = await response.json();
  expect(body.id).toBe(1);
  expect(body.userId).toBeGreaterThan(0);
});

test("handle alert pop up", async ({ page }) => {
  await page.goto("https://mail.rediff.com/cgi-bin/login.cgi");
  //event registration for alert pop up is must before the action which trigger the alert pop up

  page.on("dialog", (dialog) => dialog.accept());
  //page.on("dialog", dialog =>  dialog.dismiss());

  await page.locator("button.signin-btn").click();
});

for (const data of dataset) {
  test(`Validate data driven testing ${data.UserName}`, async ({ page }) => {
    await page.goto("https://www.saucedemo.com/");
    await page.locator('[data-test="username"]').click();
    await page.locator('[data-test="username"]').fill(data.UserName);
    await page.locator('[data-test="password"]').click();
    await page.locator('[data-test="password"]').fill(data.Password);
    await page.locator('[data-test="login-button"]').click();
  });
}
