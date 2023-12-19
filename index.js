// Declare a variable in global scope
var customerName = 'bob';

// Function to uppercase the global customerName variable
function upperCaseCustomerName() {
    customerName = customerName.toUpperCase();
}

// Function to declare a new global variable bestCustomer and set its value
function setBestCustomer() {
    window.bestCustomer = 'not bob'; // Using window to explicitly declare a global variable
}

// Function to overwrite the global variable bestCustomer
function overwriteBestCustomer() {
    bestCustomer = 'maybe bob'; // Reassigning the value of bestCustomer
}

// Declare a constant in global scope
const leastFavoriteCustomer = 'some initial value';

// Function that attempts to change the constant leastFavoriteCustomer
function changeLeastFavoriteCustomer() {
    leastFavoriteCustomer = 'attempted new value'; // This will cause an error
}
