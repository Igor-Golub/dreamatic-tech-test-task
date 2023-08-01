import { Currencies } from "../enums";

export interface IAllRates {
  success: boolean;
  timestamp: number;
  base: Currencies.EUR;
  date: string;
  rates: Record<Currencies, number>;
}

export interface IConvert {
  success: true;
  query: {
    from: Currencies;
    to: Currencies;
    amount: number;
  };
  info: {
    timestamp: number;
    rate: number;
  };
  date: string;
  result: number;
}

export interface IConvertParameters {
  from: Currencies;
  to: Currencies;
  amount: number;
}
