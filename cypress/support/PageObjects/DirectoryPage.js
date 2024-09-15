import DirectoryPageObjects from "../Wiring/DirectoryPageObjects"
import DashboardPage from "./DashboardPage"

const directoryPageObjects = new DirectoryPageObjects()
class DirectoryPage {
    searchEmployeeByName(firstName) {
        cy.get(directoryPageObjects.getEmployeeSearchInputSelector()).type(firstName)
        cy.get(directoryPageObjects.getSearchSuggestionSelector()).click()
        cy.get(directoryPageObjects.getSearchButtonSelector()).click()
        return this
    }
    assertFullNameVisibility(fullName) {
        cy.get(directoryPageObjects.getFullNameSelector())
            .invoke('text')
            .then((text) => {
                const normalizedText = text.replace(/\s+/g, ' ').trim();
                expect(normalizedText).to.eq(fullName);
            });

        let dashboard = new DashboardPage()
        return dashboard
    }
}
export default DirectoryPage