alert("Welcome to LDS WebPage!");

console.log("The script.js file has loaded successfully.");

// Find the paragraph that will display the message.
const storeMessage = document.getElementById("storeMessage");
const removeMessage = document.getElementById("removeMessage");

// Find the theme button.
const themeButton = document.getElementById("themeButton");

// Listen for a click.
themeButton.addEventListener("click", function () {

    // Add or remove the dark-theme class.
    document.body.classList.toggle("dark-theme");

    console.log("The page theme was changed.");
    // Change the text displayed on the web page.
    removeMessage.textContent = "";
    storeMessage.textContent = "The LDS team assist support teams to make sure users can login and complete their work.";

    // Display a browser popup.
    alert("This is what the LDS team does");

    // Record the click for testing.
    console.log("The learn more button was clicked");
});

console.log("The page has loaded successfully.");
