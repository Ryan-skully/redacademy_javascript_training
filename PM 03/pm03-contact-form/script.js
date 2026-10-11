function showMessage(){
    console.log("Welcome to PM-03");
}

showMessage();

const mockUsers = [
    {
        name: "Aisha Khan",
        email: "aisha.khan@example.com",
        company: {name: "Internal Helpdesk"}
    },
    {
        name: "Daniel Jacobs",
        email: "daniel.jacobs@example.com",
        company: {name: "Software Support"}
    },
    {
        name: "Nokuthula Maseko",
        email: "nokuthuka.maseko@example.com",
        company: {name: "Internal Helpdesk"}
    },

]

function displayUsers(users) {
    users.forEach(function(user) {
        console.log("Name: " + user.name);
        console.log("Email: " + user.email);
        console.log("Company: " + user.company.name);
        console.log("--------------------");
    });
}

displayUsers(mockUsers);

/*let departmentName = "Helpdesk";
console.log(departmentName);

let nameInput = "Ryan";
let departmentInput = "DevOps";

console.log("Script loaded successfully");
console.log("Name entered:", nameInput);
console.log("Department entered:", departmentInput);*/

/*let email = "not-an-email";

if (!email.includes("@")){
    console.warn("The email address may be invalid");
}

try {
    throw new Error("Example validation failure");
} catch (error){
    console.error("Something went wrong:", error.message);
}*/

/*try {
    let message = JSON.parse(`{ status: "Open"}`); //Invalid JSON
    console.log("Ticket status:", message.status);
} catch (error){
    console.error("Could not read the ticket data:", error.message);
}*/

/*try {
    console.log("Trying to sumbit the form...");
    // Form logic goes here
} catch (error){
    console.error("Form submission failed:", error.message);
} finally {
    console.log("Validation process completed.");
}*/

/*const departments = {
    helpdesk: "Helpdesk",
    support: "Software Support",
    devops: "DevOps",
    engineering: "Junior Software Engineering"
};

function getDepartmentLebel(code) {
    try {
        if (!departments[code]){
            throw new Error("Department code was not found.");
        }
        return departments[code];
    } catch (error) {
        console.error(error.message);
        return "Unknown Department";
    }
}

console.log(getDepartmentLebel("support"));
console.log(getDepartmentLebel("finance"));*/


/*const form = document.querySelector("#contactForm");
const nameInput = document.querySelector("#name");
const departmentSelect = document.querySelector("#department");
const output = document.querySelector("#outputMessage");

form.addEventListener("submit", function(event){
    event.preventDefault();

    let enteredName = nameInput.value.trim();
    let selectedDepartment = departmentSelect.value;

    console.log("Name:", enteredName);
    console.log("Department:", selectedDepartment);

    output.textContent = "Your request was captured successfully."
    output.className = "message success";
    //or
    output.style.color = "green";
});*/

const list = document.querySelector("#submissionList");
const item = document.createElement("li");
item.textContent = "New request added by Aisha from Helpdesk";
list.appendChild(item);

const clearButton = document.querySelector("#clearButton");

clearButton.addEventListener("click", function(){
    list.innerHTML = "";
    console.log("Status has been cleared");
    
});

const helpButton = document.querySelector("#helpButton");
const outputHelp = document.querySelector("#outputMessage");

helpButton.addEventListener("click", function(){
    output.textContent = "Please complete all required fields before submitting";
});

const submitForm = document.querySelector("#contactForm");

submitForm.addEventListener("submit", function (event){
    event.preventDefault();

    console.log("The form was submitted.");

    const nameInput = document.querySelector("#name");
    const departmentSelect = document.querySelector("#department");
    const reportInput = document.querySelector("#Report");

    console.log("Name:", nameInput.value);
    console.log("Department:", departmentSelect.value);
    console.log("Report:", reportInput.value);
});

const messageInput = document.querySelector("#message");
const characterCount = document.querySelector("#characterCount");

messageInput.addEventListener("input", function(){
    characterCount.textContent = messageInput.value.length
});

function isValidEmail(email) {
    const pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return pattern.test(email);
}

const emailForm = document.querySelector("#emailForm");
const emailInput = document.querySelector("#email");
const emailResult = document.querySelector("#emailResult");

function showEmailMessage(text, type) {
    emailResult.textContent = text;
    emailResult.className = "message " + type;
}

emailForm.addEventListener("submit", function(event) {
    event.preventDefault();

    const email = emailInput.value.trim();

    if (isValidEmail(email)) {
        console.log("Valid email address.");
        showEmailMessage("Email address is valid.", "success");
    } else {
        console.log("ERROR: Invalid email address.");
        showEmailMessage("Please enter a valid email address.", "error");
    }
});

fetch("https://jsonplaceholder.typicode.com/users")
    .then(function(response){
        return response.json();
    })
    .then(function(users){
        console.log(users);
    })
    .catch(function(error){
        console.error("API error:", error.message);
    });

async function getUsers() {
    try {
        const response = await fetch ("https://jsonplaceholder.typicode.com/users");
        const users = await response.json();
        console.log(users);
    }catch(error){
        console.error("Could not load users:", error.message);
    }
    
}
async function loadTasks() {
    try {
        const response = await fetch(
            "https://jsonplaceholder.typicode.com/todos"
        );

        const tasks = await response.json();

        const firstFiveTasks = tasks.slice(0, 5);

        firstFiveTasks.forEach(function(task) {
            console.log(task.title, task.completed);
        });

    } catch (error) {
        console.error("Error loading tasks:", error);
    }
}

loadTasks();

const detailsButton = document.querySelector("#detailsButton");
const detailsPanel = document.querySelector("#detailsPanel");

//Example HTML needed:
//<button id="detailsButton">Show Details</button>
//<div id="detailsPanel" hidden> Extra support information..</div>

detailsButton.addEventListener("click", function(){
    detailsPanel.hidden = !detailsPanel.hidden;
});

const outputMessage = document.getElementById("outputMessage");

function showSuccessAnimation() {
    outputMessage.classList.add("fade-in");
    console.log("Success animation triggered!");

    setTimeout(function() {
        outputMessage.classList.remove("fade-in");
    }, 500);
}

console.log(isValidEmail("user@example.com")); //true
console.log(isValidEmail("userexample.com")); //fasle