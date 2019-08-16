import LocalStorage from './localStorage';

const table = document.querySelector('#table tbody');

const URL = 'https://private-21e8de-rafaellucio.apiary-mock.com/users';

function setDeleteButtonsEvent() {
    const $buttons = document.querySelectorAll('.btn__delete');
    $buttons.forEach(($btn, i) => {
        $btn.addEventListener('click', () => {
            const row = $btn.parentNode.parentNode;
            table.removeChild(row);

            LocalStorage.deleteAt(i);
        });
    });
}

function setTableData(data) {
    if (!data || !data.length) {
        table.innerHTML = `
    <tr>
        <td colspan="3">
            Nenhuma contato cadastrado
        </td>
    </tr>
    `;
        return;
    }

    table.innerHTML = data
        .map(
            ({ name, cpf, phone, email }) => `
                <tr>
                    <td>${name}</td>
                    <td>${cpf}</td>
                    <td>${phone}</td>
                    <td>${email}</td>
                    <td><button class='btn btn__delete'>Excluir</button></td>
                </tr>
            `
        )
        .join('');

    setDeleteButtonsEvent();
}

async function fetchInitialData() {
    const response = await fetch(URL);
    const data = await response.json();

    if (!data) return;

    LocalStorage.updateWith(data);
    setTableData(data);
}

function onLocalStorageChange() {
    const data = LocalStorage.get();

    setTableData(data);
}

function onPageLoaded() {
    const data = LocalStorage.get();
    return data ? setTableData(data) : fetchInitialData();
}

if (table) {
    document.addEventListener('LocalStorageChanged', onLocalStorageChange);
    document.addEventListener('DOMContentLoaded', onPageLoaded);
}
