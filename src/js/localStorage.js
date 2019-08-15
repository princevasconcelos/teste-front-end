const LocalStorage = {
  get: () => JSON.parse(localStorage.getItem('data')),

  updateWith: data => localStorage.setItem('data', JSON.stringify(data)),

  add: newItem => {
    const data = this.get();
    data.push(newItem);
    this.updateWith(data);
  },

  deleteAt: pos => {
    const data = this.get();
    const newData = data.filter((_, i) => i !== pos);
    this.updateWith(newData);
  },
};

export default LocalStorage;
