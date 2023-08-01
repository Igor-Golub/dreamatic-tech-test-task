import { createContext } from "react";
import { IMainContext } from "../interfaces";
import { initialValue } from "./initialValue";

export const MainContext = createContext<IMainContext>({
  ...initialValue,
  handleChangeTo: () => {},
  handleChangeAmountFrom: () => {},
  handleResetError: () => {},
});
