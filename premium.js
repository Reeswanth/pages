// Example validation (Optional)
document.getElementById('premium-form').addEventListener('submit', function(event) {
    const fullName = document.getElementById('full-name').value.trim();
    const email = document.getElementById('email').value.trim();
    const cardNumber = document.getElementById('card-number').value.trim();
    const expiryDate = document.getElementById('expiry-date').value.trim();
    const cvv = document.getElementById('cvv').value.trim();
    
    if (!fullName || !email || !cardNumber || !expiryDate || !cvv) {
        event.preventDefault();
        alert("Please fill all fields before submitting.");
    }
});
