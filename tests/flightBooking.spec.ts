import { test, expect } from "@playwright/test";
import { HomePage } from "../pages/HomePage";
import { FlightsPage } from "../pages/FlightsPage";
import { PurchasePage } from "../pages/PurchasePage";
import { ConfirmationPage } from "../pages/ConfirmationPage";

test("Test Case 3 - Complete flight booking with random data", async ({
  page,
}) => {
  const homePage = new HomePage(page);
  const flightsPage = new FlightsPage(page);
  const purchasePage = new PurchasePage(page);
  const confirmationPage = new ConfirmationPage(page);

  // Step 1-4: Go to BlazeDemo, select random cities, click Find Flights
  await homePage.open();
  await homePage.searchFlights();

  // Step 5: Randomly select one of the available flights
  await flightsPage.chooseRandomFlight();

  // Step 6: Fill form with random Faker data
  await purchasePage.fillFormWithFakerData();

  // Step 7: Click Purchase Flight
  await purchasePage.clickPurchaseFlight();

  // Step 8: Validate confirmation message
  const confirmationText = await confirmationPage.getConfirmationText();
  expect(confirmationText).toBe("Thank you for your purchase today!");
});
