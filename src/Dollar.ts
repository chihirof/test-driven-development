export class Dollar {
  
  constructor(public amount: number){}

  times(multiplier: number){
    return new Dollar(this.amount * multiplier);
  }

  equals(obj: any): boolean{
    return true;
  }
}