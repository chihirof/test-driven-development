import { Money } from "./Money";
import { Bank } from "./Bank";

export interface Expression {
  reduce(bank: Bank, to: string): Money;
  plus(addend: Expression): Expression;
  times(multipliter: number): Expression
}