import { test, expect } from "@playwright/test";

test.beforeEach("Block add adds", async ({ page }) => {
  await page.route("**/*", (route) => {
    if (route.request().resourceType() === "image") {
      return route.abort();
    } else 
        return route.continue();
  });
});


test("Validate  Demoqa Element Text Form labels", async ({ page }) => {
  await page.goto("https://demoqa.com/");
  await page.waitForLoadState("networkidle");
  await page.locator("//h5[text()='Elements']").click();
  let title = await page.title();
  console.log(title);
  await page.locator("span:has-text('Text Box')").click();
  await page.getByPlaceholder("Full Name").fill("Syed Hoque");
  //to read text inside the palce holder
  let emailtext = await page.getByPlaceholder("name@example.com").getAttribute("Placeholder");
  console.log(emailtext);
});




test.skip("Validate add/image blocking ", async ({ page }) => {
  await page.goto("https://www.flipkart.com/");
  await page.pause();
});
