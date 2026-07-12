const { test, expect } = require("@playwright/test");

// Validate reading text from a text element

test.only("validate text from text webelement or a placeholder text", async ({ page }) => {
  // Get the hidden placeholder text from the input field
  await page.goto("https://accounts.zoho.in/signin?servicename=ZohoHome&signupurl=https://www.zoho.com/signup.html");

  const placeholderText = await page.getByPlaceholder("Email address or mobile number").getAttribute("placeholder");
  console.log(placeholderText);

  // Enter email ID and verify input value
  await page.locator("#login_id").fill("Syedcs36");
  const inputValue = await page.locator("#login_id").inputValue();
  console.log(inputValue);
});

test("Validate a text on a button", async ({ page }) => {
  // Validate the text on the Next button
  await page.goto("https://accounts.zoho.in/signin?servicename=ZohoHome&signupurl=https://www.zoho.com/signup.html");

  // const nextButton = await page.locator("//span[text()='Next']").textContent();
  // await console.log(nextButton);
  // await expect(nextButton).toBe("Next");

  const nextbutton1 = await page.getByText("Next").nth(0).textContent();
  console.log(nextbutton1);
});
