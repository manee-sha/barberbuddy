function verifyOTP() {
    var otpInput = document.getElementById('otp').value;
    if (otpInput) { // Assuming OTP verification is successful
        showModal('alertModal'); // Use custom modal for confirmation message
        setTimeout(function() {
            window.location.href = 'home.html';
        }, 2000);
    } else {
        alert('Please enter a valid OTP'); // If the OTP input is empty or incorrect
    }
}

// Function to show any modal by ID
function showModal(modalId) {
    var modal = document.getElementById(modalId);
    modal.style.display = "block";
    var closeButtons = modal.getElementsByClassName('close-alert');
    for (var i = 0; i < closeButtons.length; i++) {
        closeButtons[i].onclick = function() {
            modal.style.display = "none";
        };
    }

    window.onclick = function(event) {
        if (event.target === modal) {
            modal.style.display = "none";
        }
    };
}

document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('bookingForm').addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent the form from submitting
        showModal('otpModal'); // Show the OTP modal
    });
});
