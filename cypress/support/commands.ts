/// <reference types="cypress" />

Cypress.Commands.add("selectPlace", (placeIndex: number) => {
  cy.get('[aria-label="select-place-trigger"]').should("be.visible");
  cy.get('[aria-label="select-place-trigger"]').click();
  cy.get(`[aria-label="select-place-option-${placeIndex}"]`).should(
    "be.visible"
  );
  cy.get(`[aria-label="select-place-option-${placeIndex}"]`).click();
});

Cypress.Commands.add(
  "selectDate",
  (type: "start-date" | "end-date", day: number) => {
    cy.get(`[aria-label="select-${type}-trigger"]`).should("exist");
    cy.get(`[aria-label="select-${type}-trigger"]`).click();
    cy.get('[aria-label="Go to next month"]').click();
    cy.get('button[name="day"]').contains(`${day}`).click();
  }
);

Cypress.Commands.add(
  "createBooking",
  (placeIndex: number, startMonthDay: number, endMonthDay: number) => {
    cy.selectPlace(placeIndex);
    cy.selectDate("start-date", startMonthDay);
    cy.selectDate("end-date", endMonthDay);
    cy.get('[aria-label="Submit Booking Info"]').should(
      "contains.text",
      "Add Destination"
    );
    cy.get('[aria-label="Submit Booking Info"]').click();

    cy.get('[aria-label="Booking Created Succesfully"]').should("exist");
    cy.get('[aria-label="Booking List"] li').should("not.have.length", 0);
  }
);
