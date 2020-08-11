import {Dollar} from '../src/Dollar'
  
  test('test multiplication', () => {
    const five = new Dollar(5);
    expect(five.times(2)).toStrictEqual(new Dollar(10));
    expect(five.times(3)).toStrictEqual(new Dollar(15));
  })

  test('equals()', () => {
    expect(new Dollar(5).equals(new Dollar(5))).toBe(true);
    expect(new Dollar(5).equals(new Dollar(6))).toBe(false);
  })

  test('test Franc multiplication', () => {
    const five = new Franc(5);
    expect(five.times(2)).toStrictEqual(new Franc(10));
    expect(five.times(3)).toStrictEqual(new Franc(15));
  })
