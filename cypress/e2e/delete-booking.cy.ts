describe("Delete Booking", () => {
  it("Should Delete Existing Booking-Desktop", () => {
    cy.viewport("macbook-16");
    cy.visit("/");

    cy.createBooking(4, 10, 11);
    cy.get('[aria-label="Delete Booking Button"]').click();
    cy.get('[aria-label="Booking Deleted Succesfully"]').should("exist");
    cy.get('[aria-label="Booking List"] li').should("have.length", 0);
  });

  it("Should Delete Existing Booking-Mobile", () => {
    cy.viewport("iphone-x");
    cy.visit("/");

    cy.createBooking(4, 10, 11);
    cy.get('[aria-label="Delete Booking Button"]').click();
    cy.get('[aria-label="Booking Deleted Succesfully"]').should("exist");
    cy.get('[aria-label="Booking List"] li').should("have.length", 0);
  });
});
