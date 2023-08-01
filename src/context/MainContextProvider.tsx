import React, {
  FC,
  PropsWithChildren,
  useCallback,
  useEffect,
  useState,
} from "react";
import { MainContext } from "./main";
import { IMainContextValues } from "../interfaces";
import { Currencies } from "../enums";
import { FixerAPI } from "../API";
import { calculateAmountOfCurrency } from "../utils";
import { initialValue } from "./initialValue";

const MainContextProvider: FC<PropsWithChildren> = ({ children }) => {
  const [mainContext, setMainContext] =
    useState<IMainContextValues>(initialValue);

  const handleChangeAmountFrom = useCallback((value: string) => {
    setMainContext((prev) => {
      const { currentRate } = prev;

      const result = calculateAmountOfCurrency(Number(value), currentRate);

      return {
        ...prev,
        amountTo: String(result),
        amountFrom: value,
      };
    });
  }, []);

  const handleChangeTo = useCallback((value: Currencies) => {
    setMainContext((prev) => ({
      ...prev,
      currentRate: prev.rates[value] || null,
      to: value,
    }));
  }, []);

  useEffect(() => {
    if (!mainContext.currentRate) return;

    const result = calculateAmountOfCurrency(
      Number(mainContext.amountFrom),
      mainContext.currentRate,
    );

    setMainContext((prev) => ({
      ...prev,
      amountTo: result,
    }));
  }, [mainContext.currentRate]);

  useEffect(() => {
    FixerAPI.getData()
      .then((response) => {
        setMainContext((prev) => ({
          ...prev,
          rates: response?.rates,
          date: response?.date,
          currentRate: response?.rates[Currencies.USD],
          timestamp: response?.timestamp,
        }));
      })
      .catch((error) => {
        setMainContext((prev) => ({
          ...prev,
          isError: true,
          errorMessage: error.message,
        }));
      })
      .finally(() =>
        setMainContext((prev) => ({
          ...prev,
          isLoading: false,
        })),
      );
  }, []);

  const handleResetError = useCallback(() => {
    setMainContext((prev) => ({
      ...prev,
      isError: false,
      errorMessage: null,
    }));
  }, []);

  return (
    <MainContext.Provider
      value={{
        ...mainContext,
        handleChangeAmountFrom,
        handleChangeTo,
        handleResetError,
      }}
    >
      {children}
    </MainContext.Provider>
  );
};

export default MainContextProvider;
