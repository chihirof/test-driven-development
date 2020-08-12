export class Money {
  constructor(protected readonly amount: number, protected readonly currencyStr: string) {}

  equals(money: Money): boolean {
    return this.amount === money.amount && this.currency() === money.currency();
  }

  static dollar(amount: number): Money {
    return new Dollar(amount, 'USD');
  }

  static franc(amount: number): Money {
    return new Franc(amount, 'CHF');
  }

  times(multiplier: number): Money|null{
    return new Money(this.amount * multiplier, this.currencyStr)
  };

  currency() {
    return this.currencyStr;
  }

  toString(): string {
    return this.amount + ' ' + this.currencyStr;
  }
}

export class Dollar extends Money {
}

export class Franc extends Money {
}
