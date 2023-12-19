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
- Open Cypress by running the command pnpm test:open or pnpm test:run to run in the background.
- Click on the desired test file from the Cypress interface to execute the tests.
- Observe the test results in the Cypress runner window.

### Happy Paths

The E2E tests for happy paths cover the following scenarios:

- Should Create New Booking-Desktop
- Should Create New Booking-Mobile
- Should Edit Booking-Desktop
- Should Edit Booking-Mobile
- Should Highlight the booking that's being edited-Desktop
- Should Highlight the booking that's being edited-Mobile
- Should Delete Existing Booking-Desktop
- Should Delete Existing Booking-Mobile

### Unhappy Paths

The E2E tests for unhappy paths cover the following scenarios:

- Create booking without fill input place - Desktopp
- Create booking without fill input place - Mobilep
- Create booking without fill start date - Desktopp
- Create booking without fill start date - Mobilep
- Create booking without fill end date - Desktopp
- Create booking without fill end date - Mobilep
- Integration between dates ( start date > end-date )-Desktop
- Integration between dates ( start date > end-date )-Mobile
- Integration between dates ( conflicted date - start date between existing dates )-Desktop
- Integration between dates ( conflicted date - start date between existing dates )-Mobile
- Integration between dates ( conflicted date - end date between existing dates )-Desktop
- Integration between dates ( conflicted date - end date between existing dates )-Mobile
- Integration between dates ( conflicted date - start and end dates “wrapping” another booking )-Desktop
- Integration between dates ( conflicted date - start and end dates “wrapping” another booking )-Mobile

## Deployed version

You can have the access to the published version at:
https://booking-test-lucasmaiaesilva.vercel.app

Feel free to explore the application and test its functionality in a live environment.

## Features Developed so far

- [x] Create Test E2E happy and unhappy paths
- [x] Write a documentation for the project
- [x] Close Calendar soon as the user click on a date
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
