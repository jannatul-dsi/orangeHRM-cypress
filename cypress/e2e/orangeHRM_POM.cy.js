describe("orangeHRM", () => {
    const adminUserName = "Admin";
    const adminPassword = "admin123";
    before(() => {
        cy.login(adminUserName, adminPassword) 
    });
    it("passes", () =>{
        cy.waitTillVisible("h6")
        cy.title().should("eq", "OrangeHRM");
    })
})

