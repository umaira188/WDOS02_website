const subscriptionForm = document.getElementById('subscriptionForm');

subscriptionForm.addEventListener('submit', function(event) {
    // Prevent the default form submission
    event.preventDefault();

    // Get the email from the input field
    const email = document.getElementById('emailInput').value;

    // Retrieve existing subscriptions from localStorage
    const subscriptions = JSON.parse(localStorage.getItem('subscriptions')) || [];

    // Add the new subscription
    subscriptions.push(email);

    // Save the updated subscriptions back to localStorage
    localStorage.setItem('subscriptions', JSON.stringify(subscriptions));

    // Optionally, you can display a message to the user
    alert('You have been subscribed!');

    // Clear the email input field
    document.getElementById('emailInput').value = '';
});