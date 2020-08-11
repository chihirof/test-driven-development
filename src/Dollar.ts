export class Dollar {
  
  constructor(private readonly amount: number){}

  times(multiplier: number){
    return new Dollar(this.amount * multiplier);
  }

  equals(dollar: Dollar): boolean{
    return this.amount == dollar.amount;
  }
}