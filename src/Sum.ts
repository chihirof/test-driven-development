import { Money } from "./Money";
import { Expression } from "./Expression";

export class Sum implements Expression{
  constructor(public augend:Money, public addend: Money){
    
  }
}