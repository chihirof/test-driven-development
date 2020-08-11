import {Dollar} from '../src/Dollar'
  
  test('test multiplication', () => {
    const five = new Dollar(5);
    const product1 = five.times(2);
    expect(product1.amount).toBe(10);
    const product2 = five.times(3);
    expect(product2.amount).toBe(15);
  })

  test('equals()', () => {
    expect(new Dollar(5).equals(new Dollar(5))).toBe(true);
    expect(new Dollar(5).equals(new Dollar(6))).toBe(false);
  })
