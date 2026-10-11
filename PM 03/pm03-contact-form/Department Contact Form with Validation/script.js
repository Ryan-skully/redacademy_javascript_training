//PM-03: Department contact Form with Validation
// This script validates a form, updates the DOM, handles events and fetches API data.

const contactForm = document.querySelector("#contactForm");
const nameInput = document.querySelector("#name");
const departmentSelect = document.querySelector("#department");
const emailInput = document.querySelector("#email");
const categorySelect = document.querySelector("#category");
const messageInput = document.querySelector("#message");
const characterCount = document.querySelector("#characterCount");
const outputMessage = document.querySelector("#outputMessage");
const submissionList = document.querySelector("#submissionList");
const clearButton = document.querySelector("#clearButton");
const loadApiButton = document.querySelector("#loadApiButton");
const apiOutput = document.querySelector("#apiOutput");

function showMessage(text, type) {
    outputMessage.textContent = text;
    outputMessage.className = "message" + type;
}
function isValidEmail(email){
    const pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return pattern.test(email);
}
function validateForm(){
    const name = nameInput.value.trim();
    const department = departmentSelect.value;
    const email = emailInput.value.trim();
    const category = categorySelect.value;
    const message = messageInput.value.trim();

    console.log("Validating form...");
    console.log({ name, department, email, category, message});

    if (name.length < 2) {
        return "Please enter your full name.";
    }
    if (department === ""){
        return "Please select your department.";
    }
    if (!isValidEmail(email)) {
        return "Please enter a valid email address.";
    }
    if (category === ""){
        return "Please select an issue categry";
    }
    if (message.length < 10){
        return "Please enter a message with at least 10 characters.";
    }
    return "";
}
function addSubmissionToList(){
    const item = document.createElement("li");
    item.classList.add("fade-in");
    item.textContent = `${nameInput.value.trim()} from ${departmentSelect.value} submitted: ${categorySelect.value}`;
    submissionList.appendChild(item);
}
contactForm.addEventListener("submit", function (event) {
    event.preventDefault();
    try{
        const errorMessage = validateForm();
        if (errorMessage !== "") {
            showMessage(errorMessage, "error");
            return;
        }
        addSubmissionToList();
        showMessage("Your request was submitted successfully.", "success");
        contactForm.reset();
        characterCount.textContent = "0 characters typed";
    } catch (error){
        console.error("Unexpected form error:", error.message);
        showMessage("Something went wrong while submitting the form.", "error");
    }
});
messageInput.addEventListener("input", function(){
    characterCount.textContent = messageInput.value.length + "characters typed";
});
clearButton.addEventListener("click", function(){
    submissionList.innerHTML = "";
    showMessage("Submission list cleared.", "success");
});
async function loadApiData() {
    apiOutput.innerHTML = "<p> Loading sample user data...</p>";

    try{
        const response = await fetch("https://jsonplaceholder.typicode.com/users");
        if (!response.ok) {
            throw new Error("API request failed with status" + response.status);
        }
        const user = await response.json();
        displayUsers(useSyncExternalStore.slice(0, 5));
    }catch(error){
        console.error("Could not load users:", error.message);
        apiOutput.innerHTML = "<p>Could not load API data. Please try again later.</p>";
    }
}
function displayUsers(users){
    apiOutput.innerHTML= "";

    users.forEach(function(user){
        const card = document.createElement("div");
        card.className = "card fade-in";
        card.innerHTML = `
        <h3>${user.name}</h3>
        <p><strong>Email:</strong>${user.email}<p>
        <p><strong>Company:</strong> ${user.company.name}</p>
        `;
        apiOutput.appendChild(card);
    });
}

loadApiButton.addEventListener("click", loadApiData);
console.log("PM-03 script loaded successfully.");