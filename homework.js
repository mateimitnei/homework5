// Archive with a template - loginForm folder.
// Goal: create a component using the module pattern, which has an external interface.
// You need to create a component that allows the user to log into the system (login).
// Additional Information
// Some layout examples are in the template.
// You should have 2 public methods:
// • setLogAndPass() — accepts an object with the login and password that we will check against;
// • initComponent() — directly launches the application.
// Advanced Version
// Implement the same functionality but using a constructor function. That is, methods and properties will be located in
// this (Example: Session 25, notes, section "Constructor Function").
// Instructions:
// 0. Set the login and password values in localStorage that we will later check against.
// 1. Initially, only the login form is visible on the screen.
// 2. The user fills out the form and clicks the "Login" button.
// 3. When the button is clicked, you need to check that all form fields are not empty.
// 4. If the check fails, a red banner "form is filled out incorrectly" should appear above the form.
// 5. The login in our case is the email, so you need to implement a check to ensure the entered value is in email format.
// To do this, use a regular expression that can be found on the internet.
// 5. If the check is successful, you need to compare the entered user data with the data stored in localStorage.
// 6. If the data is correct, you should hide the form and show a page with the user's data instead.
// 7. The password should be displayed as asterisks. That is, the number of characters should match, but instead of them,
// you display asterisks.
// 8. At the bottom of the page, you should show a "Back" button. When clicked, it returns you to the previous page.
// 9. Next to the password, there is a special "Show Password" button. When clicked, the password is displayed as it is,
// not as asterisks.
// 10. The button changes its label to "Hide Password".
// 11. After clicking, the password is again displayed as asterisks, and the button again changes its label to "Show
// Password".
