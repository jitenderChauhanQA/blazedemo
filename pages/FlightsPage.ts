import { type Page, type Locator } from "@playwright/test";

export class FlightsPage {
  readonly page: Page;
  readonly pageHeading: Locator;
  readonly flightsTable: Locator;
  readonly tableRows: Locator;
  readonly departsHeader: Locator;
  readonly arrivesHeader: Locator;

  constructor(page: Page) {
    this.page = page;
    this.pageHeading = page.locator("h3");
    this.flightsTable = page.locator("table.table");
    // XPath axes: select table body rows using descendant axis
    this.tableRows = page.locator("//table[@class='table']//tbody/tr");
    // XPath axes: find Departs and Arrives column headers using th elements
    this.departsHeader = page.locator("//table[@class='table']//thead//th[3]");
    this.arrivesHeader = page.locator("//table[@class='table']//thead//th[4]");
  }

  async getPageHeadingText(): Promise<string> {
    const text = await this.pageHeading.textContent();
    return text?.trim() || "";
  }

  async getDepartsHeaderText(): Promise<string> {
    const text = await this.departsHeader.textContent();
    return text?.trim() || "";
  }

  async getArrivesHeaderText(): Promise<string> {
    const text = await this.arrivesHeader.textContent();
    return text?.trim() || "";
  }

  async getFlightCount(): Promise<number> {
    return this.tableRows.count();
  }

  async chooseRandomFlight() {
    const count = await this.getFlightCount();
    const randomIndex = Math.floor(Math.random() * count);
    // XPath axes: locate the "Choose This Flight" button within a specific row
    // using ancestor/descendant relationship
    const chooseButton = this.tableRows
      .nth(randomIndex)
      .locator("xpath=.//td/input[@type='submit']");
    await chooseButton.click();
  }
}
