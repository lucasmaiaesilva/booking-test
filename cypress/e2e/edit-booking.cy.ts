describe("Edit Booking", () => {
  it("Should Edit Booking-Desktop", () => {
    cy.viewport("macbook-16");
    cy.visit("/");

    cy.createBooking(1, 10, 20);
    cy.get('[aria-label="Edit Booking Button"]').click();
    cy.selectDate("start-date", 20);
    cy.selectDate("end-date", 30);

    cy.get('[aria-label="Submit Booking Info"]').should(
      "contains.text",
      "Update Destination"
    );
    cy.get('[aria-label="Submit Booking Info"]').click();

    cy.get('[aria-label="Booking Updated Succesfully"]').should("exist");
    cy.get('[aria-label="Booking List"] li').should("not.have.length", 0);
  });

  it("Should Edit Booking-Mobile", () => {
    cy.viewport("iphone-8");
    cy.visit("/");

    cy.createBooking(1, 10, 20);
    cy.get('[aria-label="Edit Booking Button"]').click();
    cy.selectDate("start-date", 20);
    cy.selectDate("end-date", 30);

    cy.get('[aria-label="Submit Booking Info"]').should(
      "contains.text",
      "Update Destination"
    );
    cy.get('[aria-label="Submit Booking Info"]').click();

    cy.get('[aria-label="Booking Updated Succesfully"]').should("exist");
    cy.get('[aria-label="Booking List"] li').should("not.have.length", 0);
  });

  it("Should Highlight the booking that's being edited-Desktop", () => {
    cy.viewport("macbook-16");
    cy.visit("/");

    cy.createBooking(1, 10, 20);
    cy.get('[aria-label="Edit Booking Button"]').click();
    cy.get('[aria-label="Booking thats being edited"]').should("exist");
  });
  it("Should Highlight the booking that's being edited-Mobile", () => {
    cy.viewport("iphone-x");
    cy.visit("/");

    cy.createBooking(1, 10, 20);
    cy.get('[aria-label="Edit Booking Button"]').click();
    cy.get('[aria-label="Booking thats being edited"]').should("exist");
  });
});
