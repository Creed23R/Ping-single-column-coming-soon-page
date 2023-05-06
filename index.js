const form = document.querySelector('.form');
const inputEmail = document.querySelector('.email');
const error = document.querySelector('.error');

form.addEventListener('submit', (event) => {
    const regExp = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/g;

    if (regExp.test(inputEmail.value)) {
        inputEmail.style.border = '1px solid var(--GrayLight)';
        inputEmail.style.backgroundImage = 'url("")';
        error.innerHTML = '';
    } else {
        event.preventDefault();
        inputEmail.style.border = '1px solid var(--LightRed)';
        error.innerHTML = 'Please provide a valid email address';
    }
});