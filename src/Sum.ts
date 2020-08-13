import { Money } from "./Money";
import { Expression } from "./Expression";
import { Bank } from "./Bank";

export class Sum implements Expression{
  constructor(public readonly augend:Money, public readonly addend: Money){}

  reduce(bank:Bank, to: string){
    const amount = this.augend.amount + this.addend.amount;
    return new Money(amount, to)
  }
}