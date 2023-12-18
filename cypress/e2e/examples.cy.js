describe("various-examples", () => {
  beforeEach(() => {
    cy.visit("/examples");
  });

  it("multi-page-testing", () => {
    // Testing pathname
    cy.getDataTest("nav_why_cypress").click();
    cy.location("pathname").should("equal", "/");

    cy.getDataTest("nav_overview").click();
    cy.location("pathname").should("equal", "/overview");

    cy.getDataTest("nav_fundamentals").click();
    cy.location("pathname").should("equal", "/fundamentals");
  });

  // it.only to run this test only from the describe block
  it.only("intercept", () => {
    // To mock making Request to the server , we use intercept which takes 3 argument (1: Type of Request, 2: URL of Request, 3: Response of Request)
    cy.intercept("POST", "http://localhost:3000/examples", {
      body: {
        message: "Successfully intercepted request",
      },
    });
    cy.getDataTest("intercept-button").click();
  });
});
