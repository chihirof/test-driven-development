export abstract class Money {
  constructor(protected readonly amount: number, protected readonly currencyStr: string) {}

  equals(money: Money): boolean {
    return this.amount === money.amount && money.constructor.name === this.constructor.name;
  }

  static dollar(amount: number): Money {
    return new Dollar(amount, 'USD');
  }

  static franc(amount: number): Money {
    return new Franc(amount, 'CHF');
  }

  abstract times(multiplier: number): Money;

  currency() {
    return this.currencyStr;
  }
}

class Dollar extends Money {
  times(multiplier: number): Money {
    return Money.dollar(this.amount * multiplier);
  }
}

class Franc extends Money {
  times(multiplier: number): Money {
    return Money.franc(this.amount * multiplier)
  }
}
