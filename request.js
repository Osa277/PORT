function validateForm() {
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
    const request = document.getElementById('request').value;

    if (name === '' || email === '' || phone === '' || request === '') {
        alert('All fields are required.');
        return false;
    }

    // Additional validation can be added here

    return true;
}