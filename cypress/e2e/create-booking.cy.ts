describe("Create Booking", () => {
  it("Should Create New Booking-Desktop", () => {
    cy.viewport("macbook-16");
    cy.visit("/");

    cy.createBooking(1, 10, 20);
    cy.get('[aria-label="Edit Booking Button"]').click();
  });

  it("Should Create New Booking-Mobile", () => {
    cy.viewport("iphone-8");
    cy.visit("/");

    cy.createBooking(1, 10, 20);
  });

  it("Fail-Create booking without fill input place - Desktop", () => {
    cy.viewport("macbook-16");
    cy.visit("/");

    cy.selectDate("start-date", 10);
    cy.selectDate("end-date", 20);
    cy.get('[aria-label="Submit Booking Info"]').click();
    cy.get('[aria-label="You must choose a place first"]').should("exist");
  });

  it("Fail-Create booking without fill input place - Mobile", () => {
    cy.viewport("iphone-8");
    cy.visit("/");

    cy.selectDate("start-date", 10);
    cy.selectDate("end-date", 20);
    cy.get('[aria-label="Submit Booking Info"]').click();
    cy.get('[aria-label="You must choose a place first"]').should("exist");
  });

  it("Fail-Create booking without fill start date - Desktop", () => {
    cy.viewport("macbook-16");
    cy.visit("/");

    cy.selectPlace(3);
    cy.selectDate("end-date", 20);
    cy.get('[aria-label="Submit Booking Info"]').click();
    cy.get('[aria-label="Please input a Check-in date"]').should("exist");
  });

  it("Fail-Create booking without fill start date - Mobile", () => {
    cy.viewport("iphone-8");
    cy.visit("/");

    cy.selectPlace(3);
    cy.selectDate("end-date", 20);
    cy.get('[aria-label="Submit Booking Info"]').click();
    cy.get('[aria-label="Please input a Check-in date"]').should("exist");
  });

  it("Fail-Create booking without fill end date - Desktop", () => {
    cy.viewport("macbook-16");
    cy.visit("/");

    cy.selectPlace(2);
    cy.selectDate("start-date", 20);
    cy.get('[aria-label="Submit Booking Info"]').click();
    cy.get('[aria-label="Please input a Check-out date"]').should("exist");
  });

  it("Fail-Create booking without fill end date - Mobile", () => {
    cy.viewport("iphone-8");
    cy.visit("/");

    cy.selectPlace(3);
    cy.selectDate("start-date", 20);
    cy.get('[aria-label="Submit Booking Info"]').click();
    cy.get('[aria-label="Please input a Check-out date"]').should("exist");
  });
});
