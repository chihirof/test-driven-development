import { Money } from "./Money";


export class Dollar extends Money{
  
  constructor(amount: number){
    super(amount);
  }

  times(multiplier: number){
    return new Dollar(this.amount * multiplier);
  }

  equals(dollar: Dollar): boolean{
    return this.amount == dollar.amount;
  }
}