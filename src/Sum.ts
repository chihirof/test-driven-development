import { Money } from "./Money";
import { Expression } from "./Expression";

export class Sum implements Expression{
  constructor(public readonly augend:Money, public readonly addend: Money){}

  reduce(to: string){
    const amount = this.augend.amount + this.addend.amount;
    return new Money(amount, to)
  }
}