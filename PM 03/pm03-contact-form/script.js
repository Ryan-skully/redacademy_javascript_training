function showMessage(){
    console.log("Welcome to PM-03");
}

showMessage();

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

const form = document.querySelector("#contactForm");
const nameInput = document.querySelector("#name");