const userName = document.getElementById('user-name-signup').value;
const password = document.getElementById('pwd-signup').value;
const email = document.getElementById('email-html').value;
const userBirthdate = document.getElementById('user-birthdate').value;



function chkUsername() {
    const userName = document.getElementById('user-name-signup').value;
    const alretUsername = document.getElementById('username-message');
    if (userName === '' || userName.length < 4 || userName.length > 12) {
        alretUsername.innerHTML = 'Please enter a valid name that must contain more than 4 chars';
        alretUsername.style.color = 'red';
        return false;
    } else return true;
}

function chkPassword() {
    const password = document.getElementById('pwd-signup').value;
    const alretPwd = document.getElementById('password-message');
    const repeatPassword = document.getElementById('repeat-pwd').value;
    const alretRepeatPwd = document.getElementById('repeat-password-message');

    if (password === '' || password.length < 6 || password.length > 20) {
        alretPwd.innerHTML = 'Please enter a valid password that contain more than 6 chars';
        alretPwd.style.color = 'red';
        return false;
    } if (repeatPassword === '') {
        alretRepeatPwd.style.color = 'red';
        alretRepeatPwd.innerHTML = 'You must fill this area';
    } else if (repeatPassword != password) {
        alretPwd.style.color = 'red';
        alretRepeatPwd.style.color = 'red'
        alretPwd.innerHTML = `Passwords don\'t match`;
        alretRepeatPwd.innerHTML = `Passwords don\'t match`;
    }
    else return true;

}

function chkEmail() {
    const email = document.getElementById('email-html').value;
    const alretEmail = document.getElementById('email-message');

    if (email === '') {
        alretEmail.style.color = 'red';
        alretEmail.innerHTML = 'Please enter a valid email';
        return false;
    } else return true;


}

function chkGender() {
    const male = document.getElementById('male-check-input');
    const female = document.getElementById('female-check-input');
    const alretGender = document.getElementById('gender-message');
    if (!male.checked && !female.checked) {
        alretGender.innerHTML = 'Must pick a gender';
        alretGender.style.color = 'red';
        return false;
    } else return true;
}

function calcAge() {
    const userBirthdate = new Date(document.getElementById('user-birthdate').value);
    const ageDifferenceSeconds = Date.now() - userBirthdate.getTime();
    const userAgeFloat = ageDifferenceSeconds / 3.156e+10;
    const userAge = Math.floor(userAgeFloat);
    const ageAlret = document.getElementById('birthdate-message');

    if (isNaN(userAge) || userAge < 18 || userAge > 100) {
        ageAlret.innerHTML = 'You must be between 18 and 100 years old';
        ageAlret.style.color = 'red';
        return false;
    } else return true;
}

function chkTerms() {
    const termsBox = document.getElementById('terms-check-box');
    const alretTerms = document.getElementById('check-box-message');

    if (!termsBox.checked) {
        alretTerms.style.color = 'red';
        alretTerms.innerHTML = 'You must read and agree to the terms'
    } else return true
}

function chkData() {
    const userName = document.getElementById('user-name-signup').value;
    const password = document.getElementById('pwd-signup').value;
    const email = document.getElementById('email-html').value;
    const userBirthdate = document.getElementById('user-birthdate').value;


    const usernamePassed = chkUsername();
    const passwordPassed = chkPassword();
    const passedEmail = chkEmail();
    const genderPassed = chkGender();
    const agePassed = calcAge();
    const termsPassed = chkTerms();

    if (usernamePassed && passwordPassed && genderPassed && agePassed && passedEmail && termsPassed === true) {
        axios.post('http://localhost:3000/users', { username: userName, password: password, email: email, birthdate: userBirthdate, })
        window.location.href = '/index.html'
    }
}
