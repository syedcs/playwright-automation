import { test, expect } from "@playwright/test";

test("Validate drop down", async ({ page }) => {
  await page.goto("https://rahulshettyacademy.com/loginpagePractise/");
  await page.locator("//select[@class='form-control']").selectOption("Consultant"); //select by value
  await page.locator("//select[@class='form-control']").selectOption({ index: 0 }); //select by index
  await page.locator("//select[@class='form-control']").selectOption({ label: "Teacher" }); //select by label
});

test("Select radio button", async ({ page }) => {
  await page.goto("https://rahulshettyacademy.com/loginpagePractise/");
  await page.locator("(//span[@class='checkmark'])[2]").click();
});

test("validate Handle child broser", async ({ page, context }) => {
  await page.goto("https://rahulshettyacademy.com/loginpagePractise/");
  const [newpage] = await Promise.all(
  [context.waitForEvent("page"), 
  page.locator("//a[text()='Free Access to InterviewQues/ResumeAssistance/Material']").click()]);

  const pageName = await newpage.title();
  console.log(pageName);

  //go back original page
  console.log(await page.title());
});
