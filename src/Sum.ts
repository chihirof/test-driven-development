import { Money } from "./Money";
import { Expression } from "./Expression";
import { Bank } from "./Bank";

export class Sum implements Expression{
  constructor(public readonly augend:Expression, public readonly addend: Expression){}

  reduce(bank:Bank, to: string){
    const amount = this.augend.reduce(bank, to).amount + this.addend.reduce(bank, to).amount;
    return new Money(amount, to)
  }

  plus(addend: Expression): Expression{
    return new Sum(this, addend);
  }

  times(multipliter: number): Expression{
    return new Sum(this.augend.times(multipliter), this.addend.times(multipliter))
  }
}