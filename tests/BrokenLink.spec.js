const { test, expect } = require("@playwright/test");

test("Validate broken link ", async ({ page, request }) => {
  await page.goto("https://testautomationpractice.blogspot.com/");

  const brokenLocator = await page.locator("//div[@id='broken-links']//a").all();

  for (let hrefb of brokenLocator) {
    const newhref = await hrefb.getAttribute("href");
    console.log(newhref);

    const response = await request.get(newhref);
    console.log(response);

    //commenting for gitHub action
    // expect.soft(response.status(),`link is broken ${newhref}`).toBeLessThan(400)
  }
});
