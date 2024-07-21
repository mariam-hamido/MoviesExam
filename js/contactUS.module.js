// validation.js

export function validateForm() {
    const name = document.getElementById('name').value;
    const email = document.getElementById('mail').value;
    const phone = document.getElementById('Phone').value;
    const age = document.getElementById('age').value;
    const password = document.getElementById('password').value;
    const repassword = document.getElementById('repassword').value;

    const nameRegex = /^[a-zA-Z\s]+$/;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const phoneRegex = /^\d{10}$/;
    const ageRegex = /^\d+$/;
    const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;

    if (!nameRegex.test(name)) {
        alert('Please enter a valid name.');
        return false;
    }
    if (!emailRegex.test(email)) {
        alert('Please enter a valid email.');
        return false;
    }
    if (!phoneRegex.test(phone)) {
        alert('Please enter a valid phone number.');
        return false;
    }
    if (!ageRegex.test(age)) {
        alert('Please enter a valid age.');
        return false;
    }
    if (!passwordRegex.test(password)) {
        alert('Password must be at least 8 characters long and contain both letters and numbers.');
        return false;
    }
    if (password !== repassword) {
        alert('Passwords do not match.');
        return false;
    }

    alert('Form submitted successfully!');
    return true;
}
