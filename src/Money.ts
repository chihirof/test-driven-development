export class Money {
  constructor(protected readonly amount: number){}

  equals(money: Money): boolean{
    return this.amount == money.amount;
  }
}