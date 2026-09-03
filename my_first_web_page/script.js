// Find the HTML element with the ID welcomeButton.
const welcomeButton = document.getElementById("welcomeButton");

// Confirm that the page loaded.
console.log("The page loaded successfully.");

// Listen for a click on the button.
welcomeButton.addEventListener("click", function () {

    // Display a popup message to the user.
    alert("Welcome! This message was displayed using JavaScript.");

    // Record the action in the browser console.
    console.log("The welcome button was clicked.");
});
