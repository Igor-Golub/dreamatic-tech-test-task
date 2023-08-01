import React from "react";
import {
  Autocomplete as MUIAutocomplete,
  Stack,
  TextField,
} from "@mui/material";
import { ISelectValue } from "../interfaces";
import { Currencies } from "../enums";
import Input from "./Input";

interface Props {
  amount: string | null;
  currencyValue: Currencies;
  options: Currencies[];
  onChangeAmount: (value: string) => void;
  onChangeCurrency: (value: Currencies) => void;
}

const ToCurrencyAutocomplete = ({
  amount,
  onChangeAmount,
  currencyValue,
  onChangeCurrency,
  options,
}: Props) => {
  const prepareOptions = (): ISelectValue[] => {
    return options.map((currency) => ({ label: currency, value: currency }));
  };

  return (
    <Stack direction="row" sx={{ position: "relative", width: "100%" }}>
      <Input
        value={amount || ""}
        onChange={({ target }) => onChangeAmount(target.value)}
        size="small"
        type="number"
        fullWidth
      />
      <MUIAutocomplete
        forcePopupIcon={false}
        disableClearable
        sx={{
          position: "absolute",
          right: 0,
          minWidth: "4rem",
          zIndex: 1,
          "& :hover": {
            cursor: "pointer",
          },
        }}
        value={{ label: currencyValue, value: currencyValue }}
        onChange={(_, nextValue) => {
          if (!nextValue) return;
          onChangeCurrency(nextValue.value);
        }}
        options={prepareOptions()}
        autoHighlight
        getOptionLabel={(option) => option.label}
        renderInput={(params) => (
          <TextField
            {...params}
            size="small"
            sx={{
              "& fieldset": {
                border: "none",
              },
            }}
            fullWidth
          />
        )}
      />
    </Stack>
  );
};

export default ToCurrencyAutocomplete;
