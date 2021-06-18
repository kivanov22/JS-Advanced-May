function validate() {
    let submitButton = document.getElementById('submit');
    submitButton.addEventListener('click', validateFormHandler);

    let isCompanyCheckbox = document.getElementById('company');
    isCompanyCheckbox.addEventListener('change', onIsCompanyHandler);

    function validateFormHandler(e) {
        e.preventDefault();//when page reloads
        let usernameInput = document.getElementById('username');
        let usernameRegex = /^[a-zA-Z0-9]{3,20}$/;
        let usernameIsValid = usernameRegex.test(usernameInput.value);
        setBorder(usernameInput, usernameIsValid);

        let emailInput = document.getElementById('email');
        let emailRegex = /^.*@.*\..*$/;
        let isEmailValid = emailRegex.test(emailInput.value);
        setBorder(emailInput, isEmailValid);

        let passwordInput = document.getElementById('password');
        let passwordRegex = /^\w{5,15}$/;
        let confirmPasswordInput = document.getElementById('confirm-password');
        let confirmPasswordIsValid = passwordRegex.test(confirmPasswordInput.value);
        let passwordIsValid = passwordRegex.test(passwordInput.value);
        let passwordsMatch = passwordIsValid && passwordInput.value === confirmPasswordInput.value;
        setBorder(passwordInput, passwordsMatch);
        setBorder(confirmPasswordInput, passwordsMatch);


        let companyNumberIsValid = false;
        let isCompanyCheckbox = document.getElementById('company');
        if (isCompanyCheckbox.checked) {
            let companyNumberInput = document.getElementById('companyNumber');

            if (companyNumberInput.value.trim() !== '' && !isNaN(Number(companyNumberInput.value))) {
                let companyNumber = Number(companyNumberInput.value);
                if (companyNumber >= 1000 && companyNumber <= 9999) {
                    companyNumberIsValid = true;
                }
            }
            setBorder(companyNumberInput, companyNumberIsValid);
        }
        let validDiv = document.getElementById('valid');
        let mainInputAreValid = usernameIsValid && isEmailValid && passwordsMatch;
        let companyInfoIsValid = !isCompanyCheckbox.checked ||(isCompanyCheckbox.checked && companyNumberIsValid);
        let shouldShowValidDiv = mainInputAreValid && companyInfoIsValid;
        validDiv.style.display = shouldShowValidDiv ? 'block' : 'none';
    }

    function onIsCompanyHandler(e) {//checkbox 
        let companyInfoFieldSet = document.getElementById('companyInfo');
        companyInfoFieldSet.style.display = e.target.checked ? 'block' : 'none';

    }

    function setBorder(element, isValid) {

        if (isValid) {
            element.style.setProperty('border', 'none');
        } else {
            element.style.setProperty('border', '2px solid red');
            //element.style.setProperty('border-color', 'red');
        }
    }

}
