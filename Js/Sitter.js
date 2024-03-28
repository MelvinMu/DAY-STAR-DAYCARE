<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Sitter Form</title>
<style>
body {
    font-family: Arial, sans-serif;
    background-color: #f0f0f0;
    margin: 0;
    padding: 0;
}
.container {
    max-width: 500px;
    margin: 20px auto;
    background-color: #fff;
    padding: 20px;
    border-radius: 8px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
}
h1 {
    text-align: center;
    color: #333;
}
form {
    margin-top: 20px;
}
label {
    display: block;
    margin-bottom: 5px;
    color: #333;
}
input[type="text"], input[type="number"], input[type="tel"], textarea {
    width: 100%;
    padding: 8px;
    margin-bottom: 10px;
    border: 1px solid #ccc;
    border-radius: 4px;
    box-sizing: border-box;
}
input[type="submit"] {
    background-color: #4CAF50;
    color: white;
    padding: 10px 20px;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    font-size: 16px;
}
input[type="submit"]:hover {
    background-color: #45a049;
}
.error {
    color: red;
}
</style>
</head>
<body>

<div class="container">
    <h1>Sitter Form</h1>
    <form id="sitterForm">
        <label for="name">Sitter's Name:</label>
        <input type="text" id="name" name="name" required>

        <label for="age">Sitter's Age:</label>
        <input type="number" id="age" name="age" required>

        <label for="number">Sitter's Number:</label>
        <input type="tel" id="number" name="number" pattern="[0-9]{10}" required>

        <label for="address">Sitter's Address:</label>
        <textarea id="address" name="address" rows="4" required></textarea>

        <input type="submit" value="Submit">
    </form>
</div>

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

</body>
</html>
