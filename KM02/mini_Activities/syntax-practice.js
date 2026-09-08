/*Topic 1

let learnerName = "Ryan";
let department = "DevOps";
let openTickets = 12;

console.log("Name:", learnerName);
console.log("Departmant:", department);
console.log(openTickets);*/

/*//Topic 2

const requestId = "Dev123";
const departmentName = "DevOps";
let itemRequested = "Wine Bottles";
let quantity = 7;
let isApproved = false;

console.log("ID:", requestId, "Department:", departmentName, "Item:", itemRequested, "Quantity", quantity, "Approved", isApproved);*/

/*//Topic 3

const learnerProfile = {
    fullName: "Ryan",
    age: 21,
    departmant: "DevOps",
    hasLaptop: true,
    completedModules: ["1","2","3"],
    mentor: "Brandon", 
}

console.log(typeof learnerProfile);*/

/* //Topic 4

let itemPrice= 25.99;
let quantity= 7;
const discount= 0.25;
const vatRate= 0.15;

const subTotal = itemPrice * quantity ; //SubTotal
console.log("SubTotal R:", subTotal);

const discountedSubtotal = subTotal * discount;
console.log("Discount R:", discountedSubtotal); //Discount

const vatAmount = subTotal * vatRate;
console.log("VatRate R:", vatAmount); //VatRate

const finalTotal = subTotal - discountedSubtotal + vatRate;
console.log("Final Cost: R", finalTotal); //Final Cost */

/*//Topic 5

let availableLeaveDays = 10;
let requestedLeaveDays = 4;


if (requestedLeaveDays === 0) {
    console.log("Please review your leave application");
}
    else if (requestedLeaveDays > availableLeaveDays) {
        console.log("Leave not Approved");
    }   
    else if (requestedLeaveDays <= availableLeaveDays) {
        console.log("Leave is approved");
    }
    else (console.log("tHANKS "));*/

/*//Topic 6
const vatAmount = 0.15;
function calculateVat (Item) {
    // const vatAmount = 0.15;
    return vatAmount * Item;
}
function calculateFinalTotal (Item) {
    const  vat = calculateVat(Item)
    return Item + vat;
}
const total = calculateFinalTotal(250);
console.log("VAT:" , vatAmount , "Total:", total);*/

//Topic 7

let learnersName = ["Ryan Wa","Brandon DW", "Phindi M", "Shane D", "Ryan W"];

console.log(learnersName[0]); //Ryan Wa  
console.log(learnersName[4]); // Ryan W
console.log(learnersName.length);
learnersName.push("TestUser1");
learnersName.shift();
console.log(learnersName);

