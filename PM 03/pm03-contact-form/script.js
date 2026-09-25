function showMessage(){
    console.log("Welcome to PM-03");
}

showMessage();

let departmentName = "Helpdesk";
console.log(departmentName);

let nameInput = "Ryan";
let departmentInput = "DevOps";

console.log("Script loaded successfully");
console.log("Name entered:", nameInput);
console.log("Department entered:", departmentInput);

let email = "not-an-email";

if (!email.includes("@")){
    console.warn("The email address may be invalid");
}

try {
    throw new Error("Example validation failure");
} catch (error){
    console.error("Something went wrong:", error.message);
};