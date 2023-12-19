// load type definitions from Cypress module
/// <reference types="cypress" />

declare namespace Cypress {
  interface Chainable {
    /**
     * Custom command to visit google page
     * @example cy.google()
     */

    selectPlace(placeIndex: number): Chainable<Window>;
    selectDate(type: "start-date" | "end-date", day: number): Chainable<Window>;
    createBooking(
      placeIndex: number,
      startMonthDay: number,
      endMonthDay: number
    ): Chainable<Window>;
  }
}
