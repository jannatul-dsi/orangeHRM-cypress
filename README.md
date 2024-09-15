# Cypress Automation for OrangeHRM

## Summary
This project contains Cypress automation scripts for performing a series of actions on the OrangeHRM Demo site. The goal of the assignment is to demonstrate the ability to perform various tasks such as login, employee management, and user interactions through automated tests. The scenarios include logging in as an admin, creating and updating employee records, searching for employees, and logging in with new employee credentials.

## Site Link
The automation scripts are designed to work with the OrangeHRM Demo site, which can be accessed at the following URL: [OrangeHRM Demo](https://opensource-demo.orangehrmlive.com/web/index.php/auth/login)

## How to Run

### Prerequisites
Ensure you have the following installed on your machine:
- [Node.js](https://nodejs.org/) (version 14 or higher)
- [npm](https://www.npmjs.com/) (comes with Node.js)
- [Cypress](https://www.cypress.io/) (will be installed via npm)

### Installation
1. Clone the repository to your local machine:
    ```bash
    git clone https://github.com/jannatul-dsi/orangeHRM-cypress.git
    cd orangeHRM cypress
    ```

2. Install the project dependencies:
    ```bash
    npm install
    ```
    
### Running the Tests
1. Open Cypress Test Runner:
    ```bash
    npx cypress open
    ```

2. Run the tests from the Cypress Test Runner interface.
    ```bash
    npx cypress run
    ```

### Scenarios Implemented

1. **Login as Admin**
   - URL: [OrangeHRM Demo](https://www.orangehrm.com/demo/)
   - Credentials: Use the provided admin credentials.
   - Validation: Assert that the dashboard is visible after login.

2. **Create a New Employee**
   - Navigate to PIM and click on the Add Button.
   - Use Faker library to generate random employee data (First Name, Last Name, and a strong password).
   - Enter the details and click on Create Login Details Toggle, then submit.
   - Save the employee's ID, username, and password into a JSON file.
   - Validation: Assert the successful creation of the employee and that the full name is visible.

3. **Update Employee Information**
   - Navigate to the Employee Page and update the employee's nationality.
   - Save the updated nationality.
   - Validation: Assert success message and updated nationality.

4. **Search by Employee ID**
   - Go to PIM and search for the employee using the ID created in step 2.
   - Validation: Assert that the employee is found in the search results.

5. **Search in Directory by Employee Name**
   - Navigate to the Directory menu and search by the employee's name.
   - Validation: Assert that the employee is found in the directory.

6. **Logout**
   - Log out from the admin session.

7. **Login with New Employee Credentials**
   - Use the credentials from the JSON file to log in.
   - Validation: Assert that the full name is displayed beside the profile icon.

8. **Update My Info**
   - Navigate to the "My Info" section and update Gender and Blood Type.
   - Save the changes.
   - Validation: Assert that the changes are saved successfully.

9. **Logout as New Employee**
   - Log out from the newly created employee session.

## Notes
- Ensure that the URL and credentials used in the scripts are up-to-date.
- If you encounter any issues, refer to the Cypress documentation or check for updates in the repository.
