<script>
document.getElementById('sitterForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent default form submission

    // Get form values
    var name = document.getElementById('name').value;
    var age = document.getElementById('age').value;
    var number = document.getElementById('number').value;
    var address = document.getElementById('address').value;

    // Perform validation (You can customize validation as per your requirements)
    if (!name || !age || !number || !address) {
        alert('Please fill in all fields');
        return;
    }

    // If all fields are filled, you can process the data here
    // For demonstration, let's just log the values
    console.log('Sitter Name:', name);
    console.log('Sitter Age:', age);
    console.log('Sitter Number:', number);
    console.log('Sitter Address:', address);

    // You can also submit the form data to a server using AJAX if needed
});
</script>