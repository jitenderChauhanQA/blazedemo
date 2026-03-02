import { type Page, type Locator } from "@playwright/test";

export class ConfirmationPage {
  readonly page: Page;
  readonly pageHeading: Locator;

  constructor(page: Page) {
    this.page = page;
    // XPath axes: locate the confirmation heading using ancestor-descendant relationship
    this.pageHeading = page.locator("//div[@class='container']/descendant::h1");
  }

  async getConfirmationText(): Promise<string> {
    const text = await this.pageHeading.textContent();
    return text?.trim() || "";
  }
}
