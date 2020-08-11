import { Money } from "./Money";

export class Franc extends Money{
  
  constructor(amount: number){
    super(amount)
  }

  times(multiplier: number){
    return new Franc(this.amount * multiplier);
  }
}