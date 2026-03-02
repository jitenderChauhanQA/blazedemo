import { type Page, type Locator } from "@playwright/test";

export class HomePage {
  readonly page: Page;
  readonly sourceDropdown: Locator;
  readonly destinationDropdown: Locator;
  readonly findFlightsButton: Locator;

  constructor(page: Page) {
    this.page = page;
    this.sourceDropdown = page.locator("select[name='fromPort']");
    this.destinationDropdown = page.locator("select[name='toPort']");
    this.findFlightsButton = page.locator("input[type='submit']");
  }
}
