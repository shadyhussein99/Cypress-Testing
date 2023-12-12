describe("Form testing", () => {
  beforeEach(() => {
    cy.visit("/forms");
  });

  it("Test subscribe form", () => {
    cy.contains(/Testing Forms/i);

    // Find element inside another element, we cannot use css query selectors here because we used our custom command to get by "data-test"
    // Creating (alias: اسم مستعار) using .as function and calling the alias using @ (helps in facilitating queries)
    cy.getDataTest("subscribe-form").find("input").as("subscribe-input");
    cy.get("@subscribe-input").type("shadyhussein99@gmail.com");
    cy.contains(/Successfully subbed: shadyhussein99@gmail.com!/i).should(
      'not.exist'
    );
    cy.getDataTest("subscribe-button").click();
    cy.contains(/Successfully subbed: shadyhussein99@gmail.com!/i).should('be.visible');

    // To wait for 3 seconds
    cy.wait(3000);
    cy.contains(/Successfully subbed: shadyhussein99@gmail.com!/i).should(
      'not.exist'
    );
    cy.get("@subscribe-input").type("shadyhussein99@gmail.c");
    cy.getDataTest("subscribe-button").click();
    cy.contains(/Invalid email: shadyhussein99@gmail.c!/i).should(
      'exist'
    );
  });
});
