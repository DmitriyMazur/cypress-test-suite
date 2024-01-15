# Cypress E2E Testing for Cypress Website
## Overview
This repository contains end-to-end (E2E) tests for the Cypress website. The tests are written using [Cypress](https://www.cypress.io/), a powerful JavaScript testing framework.
## Prerequisites
Before you begin, ensure you have met the following requirements:
- Node.js and npm installed.
  - You can download Node.js from [here](https://nodejs.org/).
- A modern web browser.
## Getting Started
1. **Clone the Repository:**
   ```bash
   https://github.com/DmitriyMazur/cypress-test-suite.git
   cd cypress-test-suite
   ```
2. **Install Dependencies:**
   ```bash
   npm install
   ```
3. **Set Up Cypress:**
   If you don't have Cypress installed globally, you might need to install it:
   ```bash
   npm install -g cypress
   ```
   You can also run Cypress using the locally installed version:
   ```bash
   npx cypress open
   ```
   Ensure your Cypress version is 10.0.0 or above.
## Running Tests
### Running Tests in Browser

To run Cypress tests interactively in the browser, use the following steps:

1. Open Cypress in the interactive mode:

```bash
   npx cypress open
```
2. In the Cypress window, click on the "E2E Testing" option, choose a browser and `Start E2E Testing``.

3. Click on the test file you want to run, ex. `visitCypressWebsite.cy.js.`

4. The selected test file will open in the Cypress browser.

Monitor the test execution and view the results in the Cypress interactive window.

### Running Tests in Headless Mode
To run all E2E tests, use the following command:
```bash
npx cypress run
```
To run single test in headless mode:
```bash
npx cypress run --headless --spec "cypress/e2e/visitCypressWebsite.cy.js"
```
## Adding New Tests
1. **Create a New Test File:**
   - Navigate to the `cypress/e2e` directory.
   - Create a new Cypress test file, e.g., `visitCypressWebsite.cy.js`.
2. **Write Your Test:**
   - Use Cypress commands to interact with the application.
   - You can refer to existing test files for examples.
3. **Run Your Test:**
   - Run your new test using the Cypress Test Runner or via the command line.
## Project Structure
- `cypress`: Contains test files, fixtures, and support files.
- `cypress/e2e`: E2E test files.
## Configuration
- Cypress configurations are set in `cypress.config.js`.
## Reporting
Test results are reported using the Mochawesome reporter. Reports can be found in the `mochawesome-report` directory after running tests.
## Contributing
1. Fork the repository.
2. Create a new branch.
3. Make changes and commit them.
4. Push to your fork and submit a pull request.
## License
This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
