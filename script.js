// JavaScript code
document.addEventListener('DOMContentLoaded', function() {
    const passwordInput = document.getElementById('passwordInput');
    const buttons = document.querySelectorAll('.num-button');
    const successPopup = document.getElementById('successPopup');
    const errorPopup = document.getElementById('errorPopup');
    const continueBtn = document.getElementById('continueBtn');
    const tryAgainBtn = document.getElementById('tryAgainBtn');
    const errorMessage = document.getElementById('errorMessage');
    const correctPassword = "24042023";
    
    let currentInput = "";
    let attempts = 0;

    buttons.forEach(button => {
        button.addEventListener('click', function() {
            if (this.classList.contains('clear')) {
                currentInput = "";
                passwordInput.value = "";
            } else if (this.classList.contains('enter')) {
                checkPassword();
            } else {
                if (currentInput.length <= 8) {
                    currentInput += this.textContent;
                    passwordInput.value = currentInput.replace(/./g, '*');
                }
            }
        });
    });

    function checkPassword() {
        if (currentInput === correctPassword) {
            successPopup.style.display = 'flex';
        } else {
            attempts++;
            if (attempts === 1) {
                errorMessage.textContent = '💕 Gợi ý: 1 ngày rất đặc biệt với chúng ta.';
            } else if (attempts === 2) {
                errorMessage.textContent = '💕 Gợi ý: Ngày mà đánh dấu 1 mốc giữa quan hệ của chúng ta.';
            } else {
                errorMessage.textContent = '💕 Gợi ý: Ngày mà anh tỏ tình với em đó! ngốc ạ!!!';
            }
            errorPopup.style.display = 'flex';
            currentInput = "";
            passwordInput.value = "";
        }
    }

    continueBtn.addEventListener('click', function() {
        window.location.href = 'celebration.html';
    });

    tryAgainBtn.addEventListener('click', function() {
        errorPopup.style.display = 'none';
    });
});