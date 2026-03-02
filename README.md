# BookingDemo - Playwright Automation Framework

## Overview
This is an automated testing framework built using **Playwright** with **TypeScript** for testing the [BlazeDemo](https://blazedemo.com/) flight booking application.

## Tech Stack
- **Playwright** - Browser automation framework
- **TypeScript** - Type-safe scripting
- **Faker.js** - Random test data generation

## Project Structure
```
BookingDemo/
├── pages/                  # Page Object Model classes
│   ├── HomePage.ts
│   ├── FlightsPage.ts
│   ├── PurchasePage.ts
│   └── ConfirmationPage.ts
├── tests/                  # Test spec files
│   ├── flightSearch.spec.ts
│   └── flightBooking.spec.ts
├── playwright.config.ts    # Playwright configuration
├── package.json
├── tsconfig.json
└── .gitignore
```

## Design Principles
- **Page Object Model (POM)** - Each page has its own class with locators and methods
- **DRY (Don't Repeat Yourself)** - Reusable methods across test cases
- **Random Data Generation** - Dynamic city selection and form data using Faker.js
- **Parallel Execution** - All tests configured to run in parallel
- **XPath Axes** - Used for locating elements where standard attributes are not available

## Test Cases
1. **Flight Search Validation** - Validates "Flights from <source> to <destination>" header
2. **Column Header Validation** - Validates "Departs:<source>" and "Arrives:<destination>" column headers
3. **Full Booking Flow** - End-to-end flight booking with random data input and purchase confirmation

## How to Run

### Prerequisites
- Node.js (v18 or above)
- npm

### Setup
```bash
npm install
npx playwright install chromium
```

### Run All Tests
```bash
npx playwright test
```

### Run Tests with UI
```bash
npx playwright test --ui
```

### Run Specific Test
```bash
npx playwright test tests/flightSearch.spec.ts
npx playwright test tests/flightBooking.spec.ts
```

### View Report
```bash
npx playwright show-report
```
