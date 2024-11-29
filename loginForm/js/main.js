const LoginComponent = (function () {
    const alertBox = document.querySelector('.alert');
    const form = document.querySelector('.form-signin');
    const userPage = document.getElementById('user-page');

    function setLogAndPass(data) {
        localStorage.setItem('loginData', JSON.stringify(data));
    }

    function showAlert(message) {
        alertBox.textContent = message;
        alertBox.style.display = 'block';
    }

    function hideForm() {
        form.style.display = 'none';
        alertBox.style.display = 'none';
    }

    function showUserPage(email, password) {
        hideForm();

        userPage.innerHTML = `
            <div class="container border rounded-3 box-shadow"
                    style="width: fit-content; padding: 50px 75px; font-size: 18px; margin-top: 80px;">
                <h1 class="mb-3">Welcome, ${email.split('@')[0]}!</h1>
                <p class="mb-5">This is your account data:</p>
                <p><b>Email:</b> ${email}</p>
                <p><b>Password:</b>
                    <span id="passwordDisplay">${'*'.repeat(password.length)}</span>
                    <button class="btn btn-primary ml-3" id="showPasswordButton">Show</button>
                </p>
            </div>
            <div class="fixed-bottom text-center" style="margin-bottom: 75px;">
                <button class="btn btn-secondary box-shadow" id="backButton">Back</button>
            </div>`;
        userPage.style.display = 'block';

        const showPasswordButton = document.getElementById('showPasswordButton');
        const passwordDisplay = document.getElementById('passwordDisplay');
        showPasswordButton.addEventListener('click', function () {
            if (showPasswordButton.textContent === 'Show') {
                passwordDisplay.textContent = password;
                showPasswordButton.textContent = 'Hide';
            } else {
                passwordDisplay.textContent = '*'.repeat(password.length);
                showPasswordButton.textContent = 'Show';
            }
        });

        const backButton = document.getElementById('backButton');
        backButton.addEventListener('click', function () {
            userPage.style.display = 'none';
            form.style.display = 'block';
            document.getElementById('inputPassword').value = '';
        });
    }

    function verifyLogin() {
        const emailInput = document.getElementById('inputEmail');
        const passwordInput = document.getElementById('inputPassword');
        const submitButton = form.querySelector('button[type="submit"]');

        submitButton.addEventListener('click', (event) => {
            event.preventDefault();

            const email = emailInput.value.trim();
            const password = passwordInput.value.trim();

            if (!email || !password) {
                showAlert('Form is filled out incorrectly');
                return;
            }

            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(email)) {
                showAlert('Invalid email format');
                return;
            }

            const storedData = JSON.parse(localStorage.getItem('loginData'));
            if (storedData.email === email && storedData.password === password) {
                showUserPage(email, password);
            } else {
                showAlert('Incorrect login or password');
            }
        });
    }

    return {
        setLogAndPass,
        verifyLogin
    };
})();

// Set user email and password
LoginComponent.setLogAndPass({email: 'bezos@amazon.com', password: '123'});

document.addEventListener('DOMContentLoaded', LoginComponent.verifyLogin);
