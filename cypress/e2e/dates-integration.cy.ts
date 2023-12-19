describe("Dates Integration", () => {
  it("Fail-Integration between dates ( start date > end-date )-Desktop", () => {
    cy.viewport("macbook-16");
    cy.visit("/");

    cy.selectPlace(3);
    cy.selectDate("start-date", 20);
    cy.selectDate("end-date", 10);
    cy.get('[aria-label="Submit Booking Info"]').click();

    cy.get(
      '[aria-label="Check-in date cannot be after the Check-out date."]'
    ).should("exist");
  });

  it("Fail-Integration between dates ( start date > end-date )-Mobile", () => {
    cy.viewport("iphone-x");
    cy.visit("/");

    cy.selectPlace(3);
    cy.selectDate("start-date", 20);
    cy.selectDate("end-date", 10);
    cy.get('[aria-label="Submit Booking Info"]').click();

    cy.get(
      '[aria-label="Check-in date cannot be after the Check-out date."]'
    ).should("exist");
  });

  it("Fail-Integration between dates ( conflicted date - start date between existing dates )-Desktop", () => {
    cy.viewport("macbook-16");
    cy.visit("/");

    cy.createBooking(2, 10, 20);
    cy.selectPlace(3);
    cy.selectDate("start-date", 11);
    cy.selectDate("end-date", 30);
    cy.get('[aria-label="Submit Booking Info"]').click();

    cy.get('[aria-label="Conflicted Dates"]').should("exist");
  });

  it("Fail-Integration between dates ( conflicted date - start date between existing dates )-Mobile", () => {
    cy.viewport("iphone-x");
    cy.visit("/");

    cy.createBooking(2, 10, 20);
    cy.selectPlace(3);
    cy.selectDate("start-date", 11);
    cy.selectDate("end-date", 30);
    cy.get('[aria-label="Submit Booking Info"]').click();

    cy.get('[aria-label="Conflicted Dates"]').should("exist");
  });

  it("Fail-Integration between dates ( conflicted date - end date between existing dates )-Desktop", () => {
    cy.viewport("macbook-16");
    cy.visit("/");

    cy.createBooking(2, 10, 20);
    cy.selectPlace(3);
    cy.selectDate("start-date", 8);
    cy.selectDate("end-date", 15);
    cy.get('[aria-label="Submit Booking Info"]').click();

    cy.get('[aria-label="Conflicted Dates"]').should("exist");
  });

  it("Fail-Integration between dates ( conflicted date - end date between existing dates )-Mobile", () => {
    cy.viewport("iphone-x");
    cy.visit("/");

    cy.createBooking(2, 10, 20);
    cy.selectPlace(3);
    cy.selectDate("start-date", 8);
    cy.selectDate("end-date", 15);
    cy.get('[aria-label="Submit Booking Info"]').click();

    cy.get('[aria-label="Conflicted Dates"]').should("exist");
  });

  it("Fail-Integration between dates ( conflicted date - start and end dates “wrapping” another booking )-Desktop", () => {
    cy.viewport("macbook-16");
    cy.visit("/");

    cy.createBooking(2, 10, 20);
    cy.selectPlace(3);
    cy.selectDate("start-date", 8);
    cy.selectDate("end-date", 22);
    cy.get('[aria-label="Submit Booking Info"]').click();

    cy.get('[aria-label="Conflicted Dates"]').should("exist");
  });

  it("Fail-Integration between dates ( conflicted date - start and end dates “wrapping” another booking )-Mobile", () => {
    cy.viewport("iphone-x");
    cy.visit("/");

    cy.createBooking(2, 10, 20);
    cy.selectPlace(3);
    cy.selectDate("start-date", 8);
    cy.selectDate("end-date", 22);
    cy.get('[aria-label="Submit Booking Info"]').click();

    cy.get('[aria-label="Conflicted Dates"]').should("exist");
  });
});
