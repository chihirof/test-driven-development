import { Expression } from "./Expression";
import { Money } from "./Money";
import { Sum } from "./Sum";

export class Bank {
  reduce(source: Expression, to: string) {
    const sum = source as Sum;
    return sum.reduce(to);
  }
}