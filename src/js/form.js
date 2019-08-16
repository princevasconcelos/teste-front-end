import LocalStorage from './localStorage';
import Masks from './masks';

import '../css/styles.scss';

const form = document.querySelector('.form');
const sendBtn = document.querySelector('.btn__send');
const loading = document.querySelector('.loader');

function showLoading() {
    loading.innerHTML = '';
    loading.classList.add('loading');
    sendBtn.classList.add('btn__loading');
}

function hideLoading() {
    loading.innerHTML = 'Cadastrar';
    loading.classList.remove('loading');
    sendBtn.classList.remove('btn__loading');
}

function onSubtmitForm(e) {
    e.preventDefault();
    showLoading();

    const user = {
        name: document.getElementById('name').value,
        cpf: document.getElementById('cpf').value,
        phone: document.getElementById('phone').value,
        email: document.getElementById('email').value
    };

    LocalStorage.add(user);

    setTimeout(() => {
        form.reset();
        window.location.href = '/';
        hideLoading();
    }, 3000);
}

function checkFormValidity() {
    const isValid = form.checkValidity();

    return isValid
        ? sendBtn.removeAttribute('disabled')
        : sendBtn.setAttribute('disabled', '');
}

document.querySelectorAll('input').forEach($input => {
    const field = $input.dataset.js;

    $input.addEventListener(
        'input',
        e => {
            checkFormValidity();
            e.target.value = Masks[field](e.target.value);
        },
        false
    );
});

form.addEventListener('submit', onSubtmitForm);
