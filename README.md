# Booking Test

Booking Test is a project developed as part of a job interview test. It is designed to be a simple booking scheduler application. This document provides an overview of the project, the installation process, and the steps to run it locally. It also includes details about the end-to-end tests that have been implemented.

## Installation

To install the project dependencies, you need to execute the following command in your terminal:

```bash
pnpm install
```

## Local Development

To start the project in the local development environment, run the following command:

```bash
pnpm dev
```

This command starts the development server and provides you with a local URL where you can access the application.

Local URL: http://localhost:5173

## End-to-End Tests

End-to-end (E2E) tests have been implemented to ensure the application functions properly in various scenarios. These tests cover both happy and unhappy paths. The E2E tests are conducted using the Cypress testing framework.

To run the E2E tests, follow these steps:

- Start the local development server by running the command pnpm dev.
- Open Cypress by running the command pnpm cypress:open.
- Click on the desired test file from the Cypress interface to execute the tests.
- Observe the test results in the Cypress runner window.

### Happy Paths

The E2E tests for happy paths cover the following scenarios:

- Booking creation with valid input: This test verifies that a booking can be successfully created with all the required fields provided accurately.
- Editing an existing booking: This test ensures that an existing booking can be edited without any issues.
- Deleting a booking: This test validates the functionality to delete an existing booking from the scheduler.

### Unhappy Paths

The E2E tests for unhappy paths cover the following scenarios:

- Booking creation with missing required fields: This test checks that attempting to create a booking with missing required fields results in appropriate error messages.
- Editing an existing booking with invalid input: This test verifies that attempting to edit an existing booking with invalid input displays the relevant error messages.
- Deleting a booking that does not exist: This test ensures that attempting to delete a non-existent booking is handled gracefully.
- Deployed Version
- The deployed version of the Booking Scheduler project can be accessed at the following URL:

https://booking-test-lucasmaiaesilva.vercel.app

Feel free to explore the application and test its functionality in a live environment.

## Features Developed so far

- [ ] Create Test E2E happy and unhappy paths
- [ ] Write a documentation for the project
- [ ] Close Calendar soon as the user click on a date
- [ ] Scroll to form when the user clicks on an item to be edited
- [x] Handle errors gracefully - handle not only the happy path, but all edge cases for the implemented functionalities
- [x] Validate Duplicated entry
- [x] Host on vercel and add link to the documentation
- [x] Add toast for duplicate error data
- [x] Add toast for Delete Booking ( destructive )
- [x] Add toast for Edit Booking
- [x] Add toast for Create Booking
- [x] Pass toast to the top of the page
- [x] Fix background image on vercel
- [x] Validate Check-out < Check-in
- [x] Validate all data input
- [x] Configure Toast
- [x] Update a Booking
- [x] Host on Github
- [x] Delete a Booking
- [x] Add React-Hook_form
- [x] Set Label of Date Component to Start/End Dates
- [x] Read a Booking
- [x] Create a Booking
- [x] Global State ( Context API )
- [x] Add Hooks not in dedicated files
- [x] Responsive UI

## Contributing

If you would like to contribute to the project, please follow the guidelines outlined in the CONTRIBUTING.md file.

## License

This project is licensed under the MIT License.
