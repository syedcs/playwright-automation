const { test, expect } = require("@playwright/test");

//import {test ,expect} from '@playwright/test';

test("First playwright test", async ({ page }) => {
  const userName = page.locator("#username");
  const password = page.locator("#password");
  const signin = page.locator("#signInBtn");
  const cardTiles = page.locator(".card-title a");

  //const contetxt= await browser.newContext();
  // const page= await contetxt.newPage();
  await page.goto("https://rahulshettyacademy.com/loginpagePractise/");
  console.log(await page.title());
  await expect(page).toHaveTitle("LoginPage Practise | Rahul Shetty Academy");
  await userName.fill("Syedcs36@gmail.com");
  await password.fill("Test@123");
  await signin.click();
  console.log(await page.locator("[style*='block']").textContent());
  expect(page.locator("[style*='block']")).toContainText("Incorrect username/password.");

  await userName.fill("");
  await userName.fill("rahulshettyacademy");
  await password.fill("learning");
  await signin.click();
  await page.waitForLoadState("networkidle");
  await page.waitForSelector(".card-title a", { timeout: 120000 });
  console.log(await cardTiles.nth(0).textContent());
  const allTitles = await cardTiles.allTextContents();
  console.log(allTitles);
});

test("First playwright Registration", async ({ page }) => {
  // const userName=page.locator("#username");
  await page.goto("https://rahulshettyacademy.com/client");
  console.log(await page.title());
  await page.locator(".text-reset").click();
  await page.locator("#firstName").fill("Syed");
  await page.locator("#lastName").fill("Hoq");
  await page.locator(" #userEmail").fill("syedcs106@gmail.com");
  await page.locator(" #userMobile").fill("1234056789");
  await page.locator("[value='Male']").click();
  await page.locator("#userPassword").fill("Test@123");
  await page.locator("#confirmPassword").fill("Test@123");
  await page.locator("[type='checkbox']").click();
  await page.locator("#login").click();
});

test("Get title of the iphone", async ({ page }) => {
  // const userName=page.locator("#username");
  await page.goto("https://rahulshettyacademy.com/client");
  console.log(await page.title());
  await page.locator("#userEmail").fill("syedcs106@gmail.com");
  await page.locator("#userPassword").fill("Test@123");
  await page.locator("#login").click();

  await page.waitForLoadState("networkidle");
  const textFirstEelemnt1 = await page.locator(".card-body b").allTextContents();
  const textFirstEelemnt2 = await page.locator(".card-body b").nth(0).textContent();
  console.log(textFirstEelemnt1);
});
