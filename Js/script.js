 // Get reference to form elements
 const form = document.querySelector('form');
 const sitterNameInput = document.getElementById('sitterNmae');
 const amountpaidInput = document.getElementById('Amountpaid');
 const TelephoneInput = document.getElementById('Telephone');
 const DatepaidInput = document.getElementById('Datepaid');
 // Function to handle form submission
 function handleSubmit(event) {
     event.preventDefault(); // Prevent default form submission
     // Perform form validation
     if (validateForm()) {
         // If form is valid, submit the form data
         submitFormData();
     }
 }
 
 // Function to validate form inputs
 function validateForm() {
     let isValid = true;
     if (sitterNameInput.value.trim() === '') {
         isValid = false;
         alert('Please enter sitter\'s name.');
     }
     if (childAgeInput.value.trim() === '') {
         isValid = false;
         alert('Please enter amount paid.');
     }
    
     if (TelephoneInput.value.trim() === '') {
        isValid = false;
        alert('Please enter Telephone.');
    }
    if (DatepaidInput.value.trim() === '') {
        isValid = false;
        alert('Please enter Date paid.');
    }
     return isValid;
 }
 
 // Function to submit form data
 function submitFormData() {
     // Here you can implement the logic to submit form data to the server
     alert('Form submitted successfully!');
 }
 
 // Event listener for form submission
 form.addEventListener('submit', handleSubmit);
 