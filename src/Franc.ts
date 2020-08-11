export class Franc {
  
  constructor(private readonly amount: number){}

  times(multiplier: number){
    return new Franc(this.amount * multiplier);
  }

  equals(dollar: Franc): boolean{
    return this.amount == dollar.amount;
  }
}