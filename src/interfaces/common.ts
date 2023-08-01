import { Currencies } from "../enums";

export interface IMainContextValues {
  rates: Partial<Record<Currencies, number>>;
  currentRate: number | null;
  timestamp: number | null;
  date: string | null;
  to: Currencies;
  amountFrom: string;
  amountTo: string | null;
  isLoading: boolean;
  isError: boolean;
  errorMessage: string | null;
}

export interface IMainContext extends IMainContextValues {
  handleChangeTo: (value: Currencies) => void;
  handleChangeAmountFrom: (value: string) => void;
  handleResetError: () => void;
}

export interface ISelectValue {
  value: Currencies;
  label: Currencies;
}
