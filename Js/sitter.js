const paymentHistory = [];
const registeredSitters = [
    {
        name: "Jake",
        amount: 2,
        telephone: "075345678" // Added quotes to make it a string
    },
    {
        name: "John",
        amount: 2,
        telephone: "0785222189" // Added quotes to make it a string
    }
];

//Function
function updatePaymentHistory() {
    const paymentHistoryBody = document.getElementById("sitterpayment");
    if (!paymentHistoryBody) {
        console.error("Element with id 'sitterpayment' not found.");
        return; // Exit the function if element not found
    }

    paymentHistoryBody.innerHTML = ""; // Clear the content of the table body
    paymentHistory.forEach(entry => {
        const row = document.createElement("tr");
        row.innerHTML = `
            <td>${entry.name}</td>
            <td>${entry.amount}</td>
            <td>${entry.telephone}</td>
        `;
        paymentHistoryBody.appendChild(row);
    });
}

//eventlisteners for the submit button
document.getElementById("sitterform").addEventListener("submit", (event)=>{
    event.preventDefault();
    const sitterName = document.getElementById("sitter-name").value;
    const amountPaid = document.getElementById("amount").value;
    const telephone = document.getElementById("telephone").value;
    const datepaid = document.getElementById("Date")
paymentHistory.push({
     sitterName:"name",
     amount:amount,
     telephone:telephone,
     date:new Date().toLocaleString

});


updatePaymentHistory();

})



// Call the function to update the payment history initially
updatePaymentHistory();
