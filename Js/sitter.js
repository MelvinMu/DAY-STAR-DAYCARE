document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('payment-form');

    form.addEventListener('submit', function (event) {
        event.preventDefault();

        const sitterName = document.getElementById('sitter-name').value;
        const amount = document.getElementById('amount').value;
        const telephone = document.getElementById('telephone').value;
        const date = document.getElementById('date').value;

        const paymentData = {
            sitterName: sitterName,
            amount: amount,
            telephone: telephone,
            date: date
        };

        // Dummy data for testing
        const dummyData = [
            {
                sitterName: 'John Doe',
                amount: '50',
                telephone: '1234567890',
                date: '2024-04-07'
            },
            {
                sitterName: 'Jane Smith',
                amount: '75',
                telephone: '9876543210',
                date: '2024-04-08'
            }
        ];

        // Store the payment data in local storage
        localStorage.setItem('paymentData', JSON.stringify(paymentData));

        // Redirect to the new page to render the data
        window.location.href = 'payment_summary.html';
    });
});
