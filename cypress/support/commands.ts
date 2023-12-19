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
