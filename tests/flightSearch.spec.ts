import { test, expect } from "@playwright/test";
import { HomePage } from "../pages/HomePage";
import { FlightsPage } from "../pages/FlightsPage";

let homePage: HomePage;
let flightsPage: FlightsPage;
let source: string;
let destination: string;

test.beforeEach(async ({ page }) => {
  homePage = new HomePage(page);
  flightsPage = new FlightsPage(page);
  await homePage.open();
  // DRY: reusable searchFlights method handles random city selection and click
  const cities = await homePage.searchFlights();
  source = cities.source;
  destination = cities.destination;
});

test("Test Case 1 - Validate flights header text", async () => {
  const headingText = await flightsPage.getPageHeadingText();
  expect(headingText).toBe(`Flights from ${source} to ${destination}:`);
});

test("Test Case 2 - Validate Departs and Arrives column headers", async () => {
  const departsText = await flightsPage.getDepartsHeaderText();
  const arrivesText = await flightsPage.getArrivesHeaderText();
  expect(departsText).toBe(`Departs: ${source}`);
  expect(arrivesText).toBe(`Arrives: ${destination}`);
});
