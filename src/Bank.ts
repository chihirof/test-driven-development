import { Expression } from "./Expression";
import { pair } from "./Pair";

export class Bank {
  private rates = new Map();
  reduce(source: Expression, to: string) {
    return source.reduce(this, to);
  }

  addRate(from: string, to: string, rate: number){
    this.rates.set(pair(from, to), rate);
  }

  rate(from: string, to: string){
    return this.rates.get(pair(from, to));
  }
}