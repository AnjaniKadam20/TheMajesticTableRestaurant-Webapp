document.addEventListener('DOMContentLoaded', function() {
    let paymentOptions = document.querySelectorAll('input[name="payment-method"]');
    let cardInfo = document.getElementById('card-info');
    let googlePayInfo = document.getElementById('googlepay-info');
    let phonepayInfo = document.getElementById('phonepay-info');
    let payNowBtn = document.getElementById('pay-now-btn');

    paymentOptions.forEach(option => {
        option.addEventListener('change', function() {
            if (this.value === 'card') {
                cardInfo.style.display = 'block';
                googlePayInfo.style.display = 'none';
                phonepeInfo.style.display = 'none';
            } else if (this.value === 'googlepay') {
                cardInfo.style.display = 'none';
                googlePayInfo.style.display = 'block';
                phonepayInfo.style.display = 'none';
            } else if (this.value === 'phonepay') {
                cardInfo.style.display = 'none';
                googlePayInfo.style.display = 'none';
                phonepayInfo.style.display = 'block';
            }
        });
    });

    payNowBtn.addEventListener('click', function() {
        let selectedPaymentMethod = document.querySelector('input[name="payment-method"]:checked').value;
        if (selectedPaymentMethod === 'card') {
            window.location.href = 'creditdebitotp.html';
        } else if (selectedPaymentMethod === 'googlepay') {
            window.location.href = 'googlepayconfirmation.html';
        } else if (selectedPaymentMethod === 'phonepay') {
            window.location.href = 'phonepayconfirmation.html';
        }
    });
});
