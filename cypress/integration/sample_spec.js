describe("My first test", function () {
  it("Visits the Home page of Find an API", function () {
    cy.visit("https://ancient-headland-70915.herokuapp.com/");
  });
  it("Finds an element", function () {
    cy.contains("Get Random API");
  });
  it("Clicks an element", function () {
    cy.contains("Get Random API").click();
  });
  it("Gets and asserts", function () {
    cy.get(".search-box").within(() => {
      cy.get("option").contains("Pick One");
      cy.get("option").contains("Anime");
      cy.get("option").contains("Weather");
    });
  });
  it("Clicks search", function () {
    cy.get(".search-box").within(() => {
      cy.get("button").type("Search").click();
    });
  });
  it("Search results display", function () {
    cy.get(".search-results-container").within(() => {
      cy.get(".detail-card");
    });
  });
});
