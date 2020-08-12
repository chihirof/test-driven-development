export class Money {
  constructor(protected readonly amount: number, protected readonly currencyStr: string) {}

  equals(money: Money): boolean {
    return this.amount === money.amount && this.currency() === money.currency();
  }

  static dollar(amount: number): Money {
    return new Money(amount, 'USD');
  }

  static franc(amount: number): Money {
    return new Money(amount, 'CHF');
  }

  times(multiplier: number): Money|null{
    return new Money(this.amount * multiplier, this.currencyStr)
  };

  currency() {
    return this.currencyStr;
  }

  plus(addend: Money){
    return new Money(this.amount + addend.amount, this.currencyStr)
  }

  toString(): string {
    return this.amount + ' ' + this.currencyStr;
  }
}
