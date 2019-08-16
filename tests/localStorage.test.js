import LocalStorage from '../src/js/localStorage';

const mock = {
  name: 'Test',
  email: 'test@test.com',
  phone: '1122233344',
  cpf: '050050050',
};

LocalStorage.add = jest.fn((item) => {
  const data = [mock];
  data.push(item);
  return data;
});

LocalStorage.deleteAt = jest.fn((position) => {
  const data = [mock].filter((_, j) => position !== j);
  return data;
});


describe('Local Storage', () => {
  beforeEach(() => {
    LocalStorage.updateWith(mock);
  });

  afterEach(() => {
    LocalStorage.clean();
  });

  it('should return all values with get', () => {
    expect(LocalStorage.get()).toEqual(mock);
  });

  it('should add a new item with add', () => {
    const newItem = {
      name: 'Test 2',
      email: 'test2@email.com',
      phone: '9393939393',
      cpf: '030339393',
    };

    expect(LocalStorage.add(newItem)).toEqual([mock, newItem]);
  });

  it('should replace the data with updateWith', () => {
    const newData = {
      name: 'test 3',
      email: 'test3@email.com',
      phone: '92838383',
      cpf: '2398238293',
    };

    LocalStorage.updateWith(newData);

    expect(LocalStorage.get()).toEqual(newData);
  });

  it('should delete one item with delete', () => {
    expect(LocalStorage.deleteAt(0)).toEqual([]);
  });
});
