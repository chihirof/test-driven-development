import { Expression } from "./Expression";
import { pair } from "./Pair";
import { Money } from "./Money";

export class Bank {
  private rates = new Map();
  reduce(source: Expression, to: string): Money {
    return source.reduce(this, to);
  }

  addRate(from: string, to: string, rate: number): void {
    this.rates.set(pair(from, to), rate);
  }

  rate(from: string, to: string): number {
    if(from === to) return 1;
    return this.rates.get(pair(from, to));
  }
}