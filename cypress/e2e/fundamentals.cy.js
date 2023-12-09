// We get elements in cypress using css query selectors

describe("Fundametals test", () => {

  // We use beforeEach to run this before each test instead of writing it at the beginning of each test amnd we write "/fundamentals" only without "http:/localhost:3000" because we already defined it as the baseUrl in cypress.config file
  beforeEach(() => {
    cy.visit("/fundamentals");
  })

  it("Contains the correct Header text", () => {

    // Used "getDataTest" custom command
    cy.getDataTest("fundamentals-header").should(
      "contain.text",
      "Testing Fundamentals"
    );
  });

  // We can use it.only if i want to run this test only if i don't care about the other tests //
  it("Accordion working correctly", () => {

    // We used regular expressions instead of quotations to make it case insensitive
    cy.contains(
      /Your tests will exist in a describe block./i
    ).should("not.be.visible");

    // inside get, it should be single quotation not double quotation, and we use square brackets when getting with "data-test"
    cy.get('[data-test="accordion-test-1"] div[role="button"]').click()

    cy.contains(/Your tests will exist in a describe block./i).should('be.visible')

    cy.get('[data-test="accordion-test-1"] div[role="button"]').click()

    cy.contains(
      /Your tests will exist in a describe block./i
    ).should("not.be.visible");
  });
});
