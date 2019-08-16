const changeEvent = new Event('LocalStorageChanged');

const get = () => {
    return JSON.parse(localStorage.getItem('data'));
};

const updateWith = data => {
    localStorage.setItem('data', JSON.stringify(data));
    document.dispatchEvent(changeEvent);
};

const add = newItem => {
    const data = get() || [];
    data.push(newItem);
    updateWith(data);
};

const deleteAt = pos => {
    const data = get();
    const newData = data.filter((_, i) => i !== pos);
    updateWith(newData);
};

const clean = () => {
    localStorage.clear();
};

export default {
    get,
    updateWith,
    add,
    deleteAt,
    clean
};
