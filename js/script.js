// DYNAMICALLY ADD STUDENT INFO
const studentInfo = document.getElementById('student-info');  // SELECTS THE HTML ELEMENT WITH ID "STUDENT-INFO"
const studentId = "200597138";  // DEFINES THE STUDENT ID AS A STRING
const studentName = "PARTH SURESHCHANDRA THAKOR";  // DEFINES THE STUDENT NAME AS A STRING
studentInfo.textContent = `Student ID: ${studentId} | Name: ${studentName}`;  // UPDATES THE ELEMENT'S TEXT CONTENT WITH STUDENT INFO

// PIZZA CLASS
class Pizza {  // DEFINES A CLASS NAMED "PIZZA" TO REPRESENT PIZZA ORDERS
    constructor(name, size, toppings, crust, notes) {  // CONSTRUCTOR METHOD TO INITIALIZE PROPERTIES
        this.name = name;  // STORES CUSTOMER NAME
        this.size = size;  // STORES PIZZA SIZE
        this.toppings = toppings;  // STORES SELECTED TOPPINGS AS AN ARRAY
        this.crust = crust;  // STORES CRUST TYPE
        this.notes = notes;  // STORES SPECIAL INSTRUCTIONS
    }

    describe() {  // METHOD TO GENERATE PIZZA ORDER SUMMARY AS HTML STRING
        return `
            <h2>🍕 Your Pizza Order 🍕</h2>  <!-- HEADING FOR ORDER SUMMARY -->
            <p><strong>Customer:</strong> ${this.name}</p>  <!-- DISPLAY CUSTOMER NAME -->
            <p><strong>Size:</strong> ${this.size}</p>  <!-- DISPLAY PIZZA SIZE -->
            <p><strong>Toppings:</strong> ${this.toppings.join(", ")}</p>  <!-- DISPLAY SELECTED TOPPINGS AS A COMMA-SEPARATED LIST -->
            <p><strong>Crust:</strong> ${this.crust}</p>  <!-- DISPLAY CRUST TYPE -->
            <p><strong>Special Instructions:</strong> ${this.notes || "None"}</p>  <!-- DISPLAY NOTES OR "NONE" IF EMPTY -->
        `;
    }
}

// FORM HANDLER
document.getElementById("pizza-form").addEventListener("submit", function(event) {  // ADDS EVENT LISTENER TO FORM SUBMISSION
    event.preventDefault();  // PREVENTS THE DEFAULT FORM SUBMISSION BEHAVIOR (AVOIDS PAGE RELOAD)

    const name = document.getElementById("name").value;  // GETS CUSTOMER NAME VALUE
    const size = document.getElementById("size").value;  // GETS SELECTED PIZZA SIZE VALUE
    const crust = document.getElementById("crust").value;  // GETS SELECTED CRUST TYPE VALUE
    const notes = document.getElementById("notes").value;  // GETS SPECIAL INSTRUCTIONS VALUE

    // COLLECT TOPPINGS
    const toppingElements = document.querySelectorAll('input[type="checkbox"]:checked');  // SELECTS ALL CHECKED TOPPING CHECKBOXES
    const toppings = Array.from(toppingElements).map(input => input.value);  // EXTRACTS TOPPING VALUES INTO AN ARRAY

    // VALIDATE TOPPING SELECTION
    if (toppings.length === 0) {  // CHECKS IF NO TOPPING IS SELECTED
        alert("Please select at least one topping!");  // SHOWS ALERT IF NO TOPPING IS SELECTED
        return;  // EXITS THE FUNCTION EARLY
    }

    // CREATE PIZZA OBJECT
    const pizza = new Pizza(name, size, toppings, crust, notes);  // INSTANTIATES A NEW PIZZA OBJECT

    // DISPLAY PIZZA ORDER SUMMARY
    const output = document.getElementById("output");  // SELECTS THE OUTPUT DIV
    output.innerHTML = pizza.describe();  // UPDATES THE OUTPUT DIV WITH THE PIZZA ORDER SUMMARY
});
