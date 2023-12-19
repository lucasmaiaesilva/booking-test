describe("Create Booking", () => {
  it("Should Edit New Booking and Edit-Desktop", () => {
    cy.viewport("macbook-16");
    cy.visit("/");

    cy.createBooking(1, 10, 20);
    cy.get('[aria-label="Edit Booking Button"]').click();
  });

  it("Should Create New Booking-Mobile", () => {
    cy.viewport("iphone-x");
    cy.visit("/");

    cy.createBooking(1, 10, 20);
  });
});
