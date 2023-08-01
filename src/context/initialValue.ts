import { Currencies } from "../enums";
import { IMainContextValues } from "../interfaces";

export const initialValue: IMainContextValues = {
  rates: {},
  timestamp: null,
  currentRate: null,
  date: null,
  to: Currencies.USD,
  amountFrom: "1",
  amountTo: "1",
  isLoading: true,
  isError: false,
  errorMessage: null,
};
