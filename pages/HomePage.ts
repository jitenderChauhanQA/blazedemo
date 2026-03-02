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

  async open() {
    await this.page.goto("/");
  }

  async getDropdownOptions(dropdown: Locator): Promise<string[]> {
    const options = dropdown.locator("option");
    const count = await options.count();
    const cities: string[] = [];
    for (let i = 0; i < count; i++) {
      const text = await options.nth(i).textContent();
      if (text) {
        cities.push(text.trim());
      }
    }
    return cities;
  }

  async selectRandomCity(dropdown: Locator): Promise<string> {
    const cities = await this.getDropdownOptions(dropdown);
    const randomIndex = Math.floor(Math.random() * cities.length);
    const selectedCity = cities[randomIndex];
    await dropdown.selectOption({ label: selectedCity });
    return selectedCity;
  }

  async selectRandomSourceCity(): Promise<string> {
    return this.selectRandomCity(this.sourceDropdown);
  }

  async selectRandomDestinationCity(): Promise<string> {
    return this.selectRandomCity(this.destinationDropdown);
  }

  async clickFindFlights() {
    await this.findFlightsButton.click();
  }

  async searchFlights(): Promise<{ source: string; destination: string }> {
    const source = await this.selectRandomSourceCity();
    const destination = await this.selectRandomDestinationCity();
    await this.clickFindFlights();
    return { source, destination };
  }
}
