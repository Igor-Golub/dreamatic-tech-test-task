import React, { useMemo } from "react";
import {
  ToCurrencyAutocomplete,
  FromCurrencyAutocomplete,
} from "../../conponents";
import { Stack, StackProps, styled } from "@mui/material";
import { useMainContext } from "../../context";
import { Currencies } from "../../enums";

const ConventionCardContent = () => {
  const {
    rates,
    to,
    amountFrom,
    amountTo,
    handleChangeAmountFrom,
    handleChangeTo,
  } = useMainContext();

  const setOfRates = useMemo(() => Object.keys(rates) as Currencies[], [rates]);

  return (
    <StyledStack>
      <FromCurrencyAutocomplete
        amount={amountFrom}
        onChangeAmount={handleChangeAmountFrom}
      />
      <ToCurrencyAutocomplete
        amount={amountTo}
        onChangeAmount={() => {}}
        onChangeCurrency={handleChangeTo}
        currencyValue={to}
        options={setOfRates}
      />
    </StyledStack>
  );
};

const StyledStack = styled(Stack)<StackProps>({
  flexDirection: "column",
  gap: "1rem",
  alignItems: "center",
  justifyContent: "space-between",
  width: "100%",
});

export default ConventionCardContent;
