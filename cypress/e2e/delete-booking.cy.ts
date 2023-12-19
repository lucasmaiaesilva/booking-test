describe("Delete Booking", () => {
  it("Should Delete Existing Booking-Desktop", () => {
    cy.viewport("macbook-16");
    cy.visit("/");

    // cy.createBooking(4, 10, 11);
    // cy.createBooking(4, 12, 13);
    // cy.createBooking(4, 14, 15);

    cy.selectPlace(2);
    cy.selectDate("end-date", 2);
    // cy.get('[aria-label="Edit Booking Button"]').click();
  });

  // it("Should Create New Booking-Mobile", () => {
  //   cy.viewport("iphone-x");
  //   cy.visit("/");

  //   cy.createBooking(1, 10, 20);
  // });
});
