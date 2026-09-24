/*Topic 1 Mini Activity

let learnerName = "Ryan";
let department = "DevOps";
let openTickets = 12;

console.log("Name:", learnerName);
console.log("Departmant:", department);
console.log(openTickets);*/

/*//Topic 2 Mini Activity

const requestId = "Dev123";
const departmentName = "DevOps";
let itemRequested = "Wine Bottles";
let quantity = 7;
let isApproved = false;

console.log("ID:", requestId, "Department:", departmentName, "Item:", itemRequested, "Quantity", quantity, "Approved", isApproved);*/

/*//Topic 3 Mini Activity

const learnerProfile = {
    fullName: "Ryan",
    age: 21,
    departmant: "DevOps",
    hasLaptop: true,
    completedModules: ["1","2","3"],
    mentor: "Brandon", 
}

console.log(typeof learnerProfile);*/

/* //Topic 4 Mini Activity

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

/*//Topic 5 Mini Activity

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

/*//Topic 6 Mini Activity
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

/*// Topic 7 Mini Activity
let learnersName = ["Ryan Ward","Brandon DeWet", "Phindi M", "Shane D", "Ryan Williams"];

const firstName = learnersName.map(name => name.split(" ")[0]);
const surnames = learnersName.map(name => name.split(" ")[1]);
console.log(firstName); //First Name to display
console.log(surnames); // Surname to display
console.log(learnersName[0]); // display first user
console.log(learnersName[4]); // display last user 
console.log(learnersName.length); // get length of array
learnersName.push("Johan Kruger"); // adds learner
learnersName.shift(); // removes 1st user
console.log(learnersName);*/

/*// Topic 8 Mini Activity
const tickets = [
  { id: 101, priority: "High" },
  { id: 102, priority: "Low" },
  { id: 103, priority: "High" },
  { id: 104, priority: "Medium" },
  { id: 105, priority: "High" }
];

// Initialize a counter variable
let highPriorityCount = 0;

for (const ticket of tickets) {
  if (ticket.priority === "High") {
    highPriorityCount++;
  }
}
console.log("Number of High priority tickets:", highPriorityCount);*/

/*// Topic 9 Mini Activity
function calculateNetPay(grossPay) {
  const taxRate = 0.20; // 20% tax rate local constant
  const netPay = grossPay * (1 - taxRate);
  return netPay;
}

console.log("Net Pay:", calculateNetPay(1000)); // Output: 800
console.log(taxRate);*/

/*//Topic 10 Mini Activity
const prices = [50, 80, 120, 150, 200];
console.log("Original Prices:" + prices);

// Use map() to create pricesWithVat (adding 15% VAT)
const pricesWithVat = prices.map(price => price * 1.15);
console.log("Prices with VAT: "+ pricesWithVat);
// Use filter() to keep only prices above 100
const highPrices = pricesWithVat.filter(price => price > 100);
console.log("Prices above 100:"+ highPrices);
// Use reduce() to calculate the total price of those filtered items
const totalPrice = highPrices.reduce((sum, price) => sum + price, 0);
console.log("Total Price: R"+totalPrice.toFixed(2));*/

