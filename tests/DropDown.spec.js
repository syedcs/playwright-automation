const { test, expect } = require("@playwright/test");
const { threadId } = require("worker_threads");

test("Check drop down validation", async ({ page }) => {
  // const userName=page.locator("#username");
  await page.goto("https://rahulshettyacademy.com/loginpagePractise/");
  console.log(await page.title());
  const dropDown = await page.locator("select.form-control");
  await dropDown.selectOption("consult");
  await page.locator(".radiotextsty").last().click();
  expect(page.locator(".radiotextsty").last()).toBechecked();
});

test("Child window validation", async ({ browser }) => {
  const context = await browser.newContext();
  const page = await context.newPage();
  await page.goto("https://rahulshettyacademy.com/loginpagePractise/");
  console.log(await page.title());

  const [newPage] = await Promise.all([
    context.waitForEvent("page"),
    await page.locator(".blinkingText").nth(0).click(),
  ]);

  const text = await newPage.locator(".red").textContent();
  console.log(text);
  const arraytext = text.split("@");
  const email = arraytext[1].split(" ")[0];
  console.log(email);

  await page.locator("#username").fill(email);
});

test("only for practice test", async ({ browser }) => {
  //const userName=page.locator("#username");
  const context = await browser.newContext();
  const page = await context.newPage();
  await page.goto("https://rahulshettyacademy.com/loginpagePractise/");
  console.log(await page.title());

  const [newPage] = await Promise.all([
    context.waitForEvent("page"),
    page.locator(".blinkingText").click(),
  ]);

  const emailid = await newPage
    .locator("a[href='mailto:mentor@rahulshettyacademy.com']")
    .textContent();
  console.log(emailid);
  page.locator("#username").fill(emailid);

  await page.pause();
});
