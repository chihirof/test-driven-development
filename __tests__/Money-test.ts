import {Dollar} from '../src/Dollar'
  
  test('test multiplication', () => {
    const five = new Dollar(5);
    five.times(2);
    expect(five.amount).toBe(10);
    five.times(3);
    expect(five.amount).toBe(15);
  })
