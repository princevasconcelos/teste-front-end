import Masks from '../src/js/masks';

describe('Masks', () => {
  describe('CPF', () => {
    it('should clean non digits', () => {
      expect(Masks.cpf('qwertyiioasdffhcbcvb!@#$%¨&*())_+=-{[]~,<.>;:')).toBe('');
    });

    it('should pass', () => {
      expect(Masks.cpf('0')).toBe('0');
      expect(Masks.cpf('01')).toBe('01');
      expect(Masks.cpf('012')).toBe('012');
      expect(Masks.cpf('0123')).toBe('012.3');
      expect(Masks.cpf('01234')).toBe('012.34');
      expect(Masks.cpf('0123456')).toBe('012.345.6');
      expect(Masks.cpf('01234567')).toBe('012.345.67');
      expect(Masks.cpf('012345678')).toBe('012.345.678');
      expect(Masks.cpf('0123456789')).toBe('012.345.678-9');
      expect(Masks.cpf('01234567890')).toBe('012.345.678-90');
    });
  });

  describe('Phone', () => {
    it('should clean non digits', () => {
      expect(Masks.phone('qwertyiioasdffhcbcvb!@#$%¨&*())_+=-{[]~,<.>;:')).toBe('');
    });

    it('should pass', () => {
      expect(Masks.phone('0')).toBe('(0');
      expect(Masks.phone('01')).toBe('(01');
      expect(Masks.phone('012')).toBe('(01) 2');
      expect(Masks.phone('0123')).toBe('(01) 23');
      expect(Masks.phone('01234')).toBe('(01) 234');
      expect(Masks.phone('012345')).toBe('(01) 2345');
      expect(Masks.phone('0123456')).toBe('(01) 2345-6');
      expect(Masks.phone('01234567')).toBe('(01) 2345-67');
      expect(Masks.phone('012345678')).toBe('(01) 2345-678');
      expect(Masks.phone('0123456789')).toBe('(01) 2345-6789');
      expect(Masks.phone('01234567890')).toBe('(01) 23456-7890');
    });
  });

  describe('Name', () => {
    it('should clean digits', () => {
      expect(Masks.name('0123456789')).toBe('');
    });
  });
});
