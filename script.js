const amountButtons = document.querySelectorAll('.amount-btn');
const customAmountInput = document.getElementById('customAmount');
const form = document.getElementById('donationForm');
const messageDiv = document.getElementById('message');
let selectedAmount = 0;

amountButtons.forEach(button => {
    button.addEventListener('click', function() {
        amountButtons.forEach(btn => btn.classList.remove('active'));
        this.classList.add('active');
        selectedAmount = this.getAttribute('data-amount');
        customAmountInput.value = '';
    });
});

customAmountInput.addEventListener('input', function() {
    amountButtons.forEach(btn => btn.classList.remove('active'));
    selectedAmount = this.value;
});

form.addEventListener('submit', function(e) {
    e.preventDefault();
    
    const name = document.getElementById('donorName').value;
    const email = document.getElementById('donorEmail').value;
    const amount = selectedAmount || customAmountInput.value;

    if (!amount || amount <= 0) {
        alert('Please select or enter a donation amount');
        return;
    }

    messageDiv.className = 'message success';
    messageDiv.textContent = `Thank you ${name}! Your donation of $${amount} has been received.`;
    
    form.reset();
    amountButtons.forEach(btn => btn.classList.remove('active'));
    selectedAmount = 0;
});