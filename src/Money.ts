export abstract class Money {
  constructor(protected readonly amount: number){}

  equals(money: Money): boolean{
    return this.amount === money.amount 
      && money.constructor.name === this.constructor.name;
  }

  static dollar(amount: number): Money{
    return new Dollar(amount)
  }

  static franc(amount: number): Money{
    return new Franc(amount)
  }

  abstract times(multiplier: number): Money;
}

class Dollar extends Money{
  
  constructor(amount: number){
    super(amount);
  }

  times(multiplier: number): Money{
    return new Dollar(this.amount * multiplier);
  }
}

class Franc extends Money{
  
  constructor(amount: number){
    super(amount)
  }

  times(multiplier: number): Money{
    return new Franc(this.amount * multiplier);
  }
}
