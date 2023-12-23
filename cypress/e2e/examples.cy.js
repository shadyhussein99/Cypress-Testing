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
  it("intercept", () => {
    // To mock making Request to the server , we use intercept which takes 3 argument (1: Type of Request, 2: URL of Request, 3: Response of Request), (We can use fixtures folder to make files containing mocked data as response and use this data by calling the file under "fixture" property)
    cy.intercept("POST", "http://localhost:3000/examples", {
      fixture: "example.json",
    });
    cy.getDataTest("post-button").click();
  });

  it.only("grudge-list", () => {
    cy.contains(/add some grudges/i);

    // use "within" method to limit the scope to get the input that is inside (data-test="grudge-list") only another way that facilitates selecting
    cy.getDataTest("grudge-list").within(() => {
      cy.get("li").should("have.length", 0);
    });

    cy.getDataTest("grudge-list").within(() => {
      cy.get("input").type("added one grudge");
    });
    cy.getDataTest("add-grudge-button").click({ force: true });
    cy.getDataTest("grudge-list").within(() => {
      cy.get("li").should("have.length", 1);
    });

    cy.getDataTest("grudge-list").within(() => {
      cy.get("input").type("grudge number 2");
    });
    cy.getDataTest("add-grudge-button").click({ force: true });
    cy.getDataTest("grudge-list").within(() => {
      cy.get("li").should("have.length", 2);

      // the difference between (have.text & contains.text) is that "have.text" means that it typically has this text only but "contains.text" means that it contains this text it may contains more text no problem
      // ".its" method is applied on data structures to get element with certain index in arrays or to get certain key in objects
      cy.get("li").its(0).should("contains.text", "added one grudge");
    });
  });
});
/////////////////  Try checking first the presence of "li" before checking the length
// if (cy.getDataTest("grudge-list").within(() => {
//   cy.get('li').should('exist')
// })) { 
//   ////// Write the code to check the length of "li"
// }