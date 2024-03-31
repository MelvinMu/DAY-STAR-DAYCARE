const dummyData = [
    {
      name: "John",
      sex: "male",
      age: 6, // months
      weight: 7.5, // kg
      allergies: ""
    },
    {
      name: "Emily",
      sex: "female",
      age: 8, // months
      weight: 8.2, // kg
      allergies: "Peanuts"
    },
    {
      name: "Michael",
      sex: "male",
      age: 10, // months
      weight: 9.3, // kg
      allergies: "Dairy products"
    }
  ];
  
  export default dummyData;
  
  // Get reference to form elements
const form = document.querySelector('form');
const childNameInput = document.getElementById('childName');
const childAgeInput = document.getElementById('childAge');
const childWeightInput = document.getElementById('childWeight');

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
    if (childNameInput.value.trim() === '') {
        isValid = false;
        alert('Please enter baby\'s name.');
    }
    if (childAgeInput.value.trim() === '') {
        isValid = false;
        alert('Please enter baby\'s age.');
    }
    if (childWeightInput.value.trim() === '') {
        isValid = false;
        alert('Please enter baby\'s weight.');
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
