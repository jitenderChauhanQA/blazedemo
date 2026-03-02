import { type Page, type Locator } from "@playwright/test";
import { faker } from "@faker-js/faker";

export class PurchasePage {
  readonly page: Page;
  readonly nameInput: Locator;
  readonly addressInput: Locator;
  readonly cityInput: Locator;
  readonly stateInput: Locator;
  readonly zipCodeInput: Locator;
  readonly cardTypeDropdown: Locator;
  readonly creditCardNumberInput: Locator;
  readonly monthInput: Locator;
  readonly yearInput: Locator;
  readonly nameOnCardInput: Locator;
  readonly purchaseFlightButton: Locator;

  constructor(page: Page) {
    this.page = page;
    this.nameInput = page.locator("#inputName");
    this.addressInput = page.locator("#address");
    this.cityInput = page.locator("#city");
    this.stateInput = page.locator("#state");
    this.zipCodeInput = page.locator("#zipCode");
    this.cardTypeDropdown = page.locator("#cardType");
    this.creditCardNumberInput = page.locator("#creditCardNumber");
    this.monthInput = page.locator("#creditCardMonth");
    this.yearInput = page.locator("#creditCardYear");
    this.nameOnCardInput = page.locator("#nameOnCard");
    // XPath axes: locate the Purchase Flight button using ancestor form context
    this.purchaseFlightButton = page.locator(
      "//input[@type='submit' and @value='Purchase Flight']"
    );
  }

  async fillFormWithFakerData() {
    const cardTypes = ["visa", "amex", "dinersclub"];
    const randomCardType = cardTypes[Math.floor(Math.random() * cardTypes.length)];

    await this.nameInput.fill(faker.person.fullName());
    await this.addressInput.fill(faker.location.streetAddress());
    await this.cityInput.fill(faker.location.city());
    await this.stateInput.fill(faker.location.state());
    await this.zipCodeInput.fill(faker.location.zipCode());
    await this.cardTypeDropdown.selectOption(randomCardType);
    await this.creditCardNumberInput.fill(faker.finance.creditCardNumber());
    await this.monthInput.fill(String(faker.number.int({ min: 1, max: 12 })));
    await this.yearInput.fill(String(faker.number.int({ min: 2025, max: 2030 })));
    await this.nameOnCardInput.fill(faker.person.fullName());
  }

  async clickPurchaseFlight() {
    await this.purchaseFlightButton.click();
  }
}
