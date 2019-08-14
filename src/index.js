import './global-styles.scss';


const MOCK_URL = 'https://private-21e8de-rafaellucio.apiary-mock.com/users';
const emptyTemplate = () => '<span>Nenhuma contato cadastrado</span>';
const userTemplate = (user) => `
<tr>
    <td>${user.name}</td>
    <td>${user.cpf}</td>
    <td>${user.phone}</td>
    <td>${user.email}</td>
    <td><button class='btn__delete'>X</button></td>
</tr>
`;

function saveToLocalStorage(data) {
  localStorage.setItem('data', JSON.stringify(data));
}

function getFromLocalStorage() {
  return JSON.parse(localStorage.getItem('data'));
}


function setTableData(data) {
  const table = document.querySelector('#table tbody');

  table.innerHTML = data && data.length ? data.map((d) => userTemplate(d)).join('') : emptyTemplate();
}

function fetchInitialData() {
  try {
    fetch(MOCK_URL).then((r) => r.json()).then((data) => {
      saveToLocalStorage(data);
      setTableData(data);
    });
  } catch (e) {
    setTableData();
  }
}

function onPageReady() {
  const data = getFromLocalStorage();
  return data ? setTableData(data) : fetchInitialData();
}


document.addEventListener('DOMContentLoaded', onPageReady);
