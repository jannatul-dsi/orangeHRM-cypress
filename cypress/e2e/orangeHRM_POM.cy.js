describe("orangeHRM", () => {
    const adminUserName = "Admin";
    const adminPassword = "admin123";
    before(() => {
        cy.Login(adminUserName, adminPassword) 
    });
    it("passes", () =>{
        cy.waitTillVisible("h6")
        cy.title().should("eq", "OrangeHRM");
    })
})

