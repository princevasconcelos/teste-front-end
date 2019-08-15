import LocalStorage from './localStorage';
import Masks from './masks';

import '../css/styles.scss';

const form = document.querySelector('.form__signup');

function onSubtmitForm(e) {
  e.preventDefault();

  console.log(form);

  const user = {
    name: document.getElementById('name').value,
    cpf: document.getElementById('cpf').value,
    phone: document.getElementById('phone').value,
    email: document.getElementById('email').value,
  };

  // LocalStorage.add(user);
  // form.reset();
  // window.location.href = '/';
}

document.querySelectorAll('input').forEach(($input) => {
  const field = $input.dataset.js;

  console.log($input.validity);
  console.log($input.validationMessage);

  // $input.addEventListener('blur', (e) => {
  //   console.log(e.target);
  // });

  $input.addEventListener('input', (e) => {
    console.log(e.target.validity);
    e.target.value = Masks[field](e.target.value);
  }, false);
});

form.addEventListener('submit', onSubtmitForm);
