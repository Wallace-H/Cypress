# 🍊 OrangeHRM — Cypress E2E Test Automation

End-to-end test automation suite for [OrangeHRM Live Demo](https://opensource-demo.orangehrmlive.com) built with **Cypress**. The project covers critical HR workflows including authentication and employee profile management, following industry best practices such as the **Page Object Model (POM)** design pattern and data-driven testing with external fixtures.

---

## 📋 Table of Contents

- [About the Project](#about-the-project)
- [Test Scenarios](#test-scenarios)
- [Project Structure](#project-structure)
- [Tech Stack](#tech-stack)
- [Getting Started](#getting-started)
- [Running the Tests](#running-the-tests)

---

## About the Project

This project automates key user flows on the OrangeHRM demo application to validate that the system behaves as expected under both happy-path and negative scenarios. It is structured with maintainability and scalability in mind, using a clear separation between test specs, page objects, and test data.

### Key Highlights

- **Page Object Model (POM):** Each page of the application is represented by a dedicated class that encapsulates its selectors and interactions, keeping test specs clean and readable.
- **Data-Driven Testing:** Credentials and test data are stored in JSON fixture files, making it easy to add new test cases without modifying the test logic.
- **Meaningful Assertions:** Tests assert against URL paths, DOM elements, and success/error messages to ensure reliable validation.

---

## Test Scenarios

### 🔐 Login (`orangeLogin.cy.js`)

| Scenario       | Description                                                                 |
|----------------|-----------------------------------------------------------------------------|
| Login - Success | Logs in with valid credentials and verifies the dashboard is displayed.     |
| Login - Fail    | Attempts login with invalid credentials and verifies the error alert is shown. |

### 👤 Update Personal Info (`orangeUpdateInfo.cy.js`)

| Scenario           | Description                                                                                          |
|---------------------|------------------------------------------------------------------------------------------------------|
| User Info Update    | Logs in, navigates to "My Info", updates personal details (name, employee ID, driver's license, date of birth, nationality, marital status), saves, and verifies the success toast message. |

---

## Project Structure

```
cypress/
├── e2e/
│   ├── orangeLogin.cy.js          # Login test specs (success & failure)
│   └── orangeUpdateInfo.cy.js     # Employee info update test spec
├── fixtures/
│   └── users/
│       └── user-data.json         # Test credentials (valid & invalid)
├── pages/
│   ├── loginPage.js               # Login page object (selectors & actions)
│   ├── dashboardPage.js           # Dashboard page object (post-login validation)
│   ├── menuPage.js                # Sidebar menu page object (navigation)
│   └── infoPage.js                # Personal info page object (form interactions)
└── support/
    ├── commands.js                # Custom Cypress commands
    └── e2e.js                     # Global test configuration & imports
```

---

## Tech Stack

| Technology | Purpose                        |
|------------|--------------------------------|
| [Cypress](https://www.cypress.io/) | E2E testing framework |
| [Chance.js](https://chancejs.com/) | Random data generation library |
| JavaScript (ES6+) | Programming language       |
| Node.js    | Runtime environment            |

---

## Getting Started

### Prerequisites

- **Node.js** (v16 or higher)
- **npm** (comes with Node.js)

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/cypress-orangehrm.git
   cd cypress-orangehrm
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

---

## Running the Tests

### Interactive Mode (Cypress Test Runner)

```bash
npx cypress open
```

This opens the Cypress GUI where you can select and run individual test specs.

### Headless Mode (CI/Terminal)

```bash
npx cypress run
```

Runs all tests in headless mode and outputs results to the terminal.

---

> **Note:** This project targets the [OrangeHRM Live Demo](https://opensource-demo.orangehrmlive.com) environment. No additional setup is required — the base URL is already configured in `cypress.config.js`.
