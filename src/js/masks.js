const masks = {
  cpf(value) {
    return value.replace(/\D/g, '')
      .replace(/(\d{3})(\d)/, '$1.$2')
      .replace(/(\d{3})(\d)/, '$1.$2')
      .replace(/(\d{3})(\d{1,2})/, '$1-$2')
      .replace(/(-\d{2})\d+?$/, '$1');
  },
  phone(value) {
    return value.replace(/\D/g, '')
      .replace(/(\d)/, '($1')
      .replace(/(\d{2})(\d)/, '$1) $2')
      .replace(/(\d{4})(\d)/, '$1-$2')
      .replace(/(\d{4})-(\d)(\d{4})/, '$1$2-$3')
      .replace(/(-\d{4})\d+?$/, '$1');
  },
  name(value) {
    return value.replace(/\d/g, '');
  },
  email(value) {
    return value;
  },
};

export default masks;
