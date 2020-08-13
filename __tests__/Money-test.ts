import { Money } from '../src/Money';
import { Expression } from '../src/Expression';
import { Bank } from '../src/Bank';
import { Sum } from '../src/Sum';

  test('test multiplication', () => {
    const five: Money = Money.dollar(5);
    expect(five.times(2)).toEqual(Money.dollar(10));
    expect(five.times(3)).toEqual(Money.dollar(15));
  });

  test('equals()', () => {
    expect(Money.dollar(5).equals(Money.dollar(5))).toBe(true);
    expect(Money.dollar(5).equals(Money.dollar(6))).toBe(false);
    expect(Money.franc(5).equals(Money.dollar(5))).toBe(false);
  });

  test('test Currency', () => {
    expect(Money.dollar(1).currency()).toBe('USD');
    expect(Money.franc(1).currency()).toBe('CHF');
  });

  test('test simple addition', () => {
    const five: Money = Money.dollar(5);
    const sum: Expression = five.plus(five);
    const bank = new Bank();
    const reduced = bank.reduce(sum, 'USD');
    expect(reduced).toEqual(Money.dollar(10));
  });

  test('pulus() returns Sum', () => {
    const five: Money = Money.dollar(5);
    const result: Expression = five.plus(five)
    const sum = result as Sum
    expect(sum.augend).toBe(five)
    expect(sum.addend).toBe(five)
  })

  test('reduce() Sum', () => {
    const sum = Money.dollar(3).plus(Money.dollar(4))
    const bank = new Bank();
    const reduced = bank.reduce(sum, 'USD');
    expect(reduced).toStrictEqual(Money.dollar(7))
  })

  test('reduce() Money', () => {
    const bank = new Bank();
    const reduced = bank.reduce(Money.dollar(1), 'USD');
    expect(reduced).toStrictEqual(Money.dollar(1))
  })

  test('reduce() Money different currency', () => {
    const bank = new Bank();
    bank.addRate('CHF', 'USD', 2);
    const reduced = bank.reduce(Money.franc(2), 'USD');
    expect(reduced).toStrictEqual(Money.dollar(1))
  })
