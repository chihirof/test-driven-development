import { Expression } from "./Expression";
import { Sum } from "./Sum";

export class Money implements Expression {
  constructor(public readonly amount: number, public readonly currencyStr: string) {}

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
    return new Money(this.amount * multiplier, this.currencyStr);
  };

  currency() {
    return this.currencyStr;
  }

  plus(addend: Money): Expression {
    return new Sum(this, addend);
  }

  reduce(to: string) {
    return this;
  }

  toString(): string {
    return this.amount + ' ' + this.currencyStr;
  }
}
