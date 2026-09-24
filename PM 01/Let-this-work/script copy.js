alert("Welcome to JavaScript Fundamentals!");

console.log("The script.js file has loaded successfully.");

const welcomeButton = document.getElementById("welcomeButton");
const message = document.getElementById("message");

welcomeButton.addEventListener("click", function(){
    alert("This updated was made on a Git branch");
    message.textContent = "JaveScript changed this message on the page.";
    console.log("Branch update tested successfully.");
    console.log("The welcome button was clicked.");
    console.log("The page message was updated.");
});

console.log("The page has loaded.");
console.log("The learner is testing JavaScript output");