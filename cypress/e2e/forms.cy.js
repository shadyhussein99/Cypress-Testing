describe("Form testing", () => {
  beforeEach(() => {
    cy.visit("/forms");
  });

  it("Test subscribe form", () => {
    cy.contains(/Testing Forms/i);

    // Find element inside another element, we cannot use css query selectors here because we used our custom command to get by "data-test"
    cy.getDataTest("subscribe-form")
      .find("input")
      .type("shadyhussein99@gmail.com");
      cy.contains(/Successfully subbed: shadyhussein99@gmail.com!/i).should('not.exist')
      cy.getDataTest("subscribe-button").click()
      cy.contains(/Successfully subbed: shadyhussein99@gmail.com!/i).should('exist')
  });
});
