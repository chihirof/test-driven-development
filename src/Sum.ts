import { Money } from "./Money";
import { Expression } from "./Expression";

export class Sum implements Expression{
  constructor(public readonly augend:Money, public readonly addend: Money){}
}