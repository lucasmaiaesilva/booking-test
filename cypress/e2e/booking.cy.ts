describe("Create Booking", () => {
  it("Should Create New Booking on a Desktop resolution", () => {
    // cy.viewport("iphone-x");
    cy.viewport("macbook-16");
    cy.visit("/");

    cy.selectPlace(1);
    cy.selectDate("start-date", 10);
    cy.selectDate("end-date", 20);
    cy.get('[aria-label="Submit Booking Info"]').click();

    cy.get('[aria-label="Booking Created Succesfully"]').should("exist");
    cy.get('[aria-label="Booking List"] li').should("not.have.length", 0);
  });

  it("Should Create New Booking on a Mobile device", () => {
    cy.viewport("iphone-x");
    cy.visit("/");

    cy.selectPlace(1);
    cy.selectDate("start-date", 10);
    cy.selectDate("end-date", 20);
    cy.get('[aria-label="Submit Booking Info"]').click();

    cy.get('[aria-label="Booking Created Succesfully"]').should("exist");
    cy.get('[aria-label="Booking List"] li').should("not.have.length", 0);
  });
});
