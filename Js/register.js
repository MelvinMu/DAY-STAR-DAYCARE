

document.addEventListener('DOMContentLoaded', function() {
  const form = document.querySelector('form');

  // Load form data from local storage if available
  const savedFormData = JSON.parse(localStorage.getItem('babyRegisterFormData')) || {};
  document.getElementById('babyName').value = savedFormData.babyName || '';
  document.getElementById('babyGender').value = savedFormData.babyGender || '';
  document.getElementById('babyAge').value = savedFormData.babyAge || '';
  document.getElementById('location').value = savedFormData.location || '';
  document.getElementById('personBrought').value = savedFormData.personBrought || '';
  document.getElementById('parentName').value = savedFormData.parentName || '';
  document.getElementById('fee').value = savedFormData.fee || '';
  document.getElementById('periodOfStay').value = savedFormData.periodOfStay || '';
  document.getElementById('babyNumber').value = savedFormData.babyNumber || '';

  form.addEventListener('submit', function(event) {
      event.preventDefault(); // Prevent the default form submission
      
      // Fetch form values
      const babyName = document.getElementById('babyName').value;
      const babyGender = document.getElementById('babyGender').value;
      const babyAge = document.getElementById('babyAge').value;
      const location = document.getElementById('location').value;
      const personBrought = document.getElementById('personBrought').value;
      const parentName = document.getElementById('parentName').value;
      const fee = document.getElementById('fee').value;
      const periodOfStay = document.getElementById('periodOfStay').value;
      const babyNumber = document.getElementById('babyNumber').value;

      // Validation
      if (babyName === '' || babyGender === '' || babyAge === '' || location === '' || personBrought === '' || parentName === '' || fee === '' || periodOfStay === '' || babyNumber === '') {
          alert('Please fill in all fields.');
          return;
      }

      // Construct the data object
      const formData = {
          babyName: babyName,
          babyGender: babyGender,
          babyAge: babyAge,
          location: location,
          personBrought: personBrought,
          parentName: parentName,
          fee: fee,
          periodOfStay: periodOfStay,
          babyNumber: babyNumber
      };

      // Save form data to local storage
      localStorage.setItem('babyRegisterFormData', JSON.stringify(formData));

      // Here you can send the formData object to your backend for further processing
      console.log('Form data:', formData);

      // Optional: Reset the form after submission
      form.reset();
  });
});
