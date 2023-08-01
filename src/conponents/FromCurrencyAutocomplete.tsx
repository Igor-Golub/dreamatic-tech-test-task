import React from "react";
import { Box, Stack } from "@mui/material";
import { Currencies } from "../enums";
import Input from "./Input";

interface Props {
  amount: string | null;
  onChangeAmount: (value: string) => void;
}

const CurrencyAutocomplete = ({ amount, onChangeAmount }: Props) => {
  return (
    <Stack direction="row" sx={{ position: "relative", width: "100%" }}>
      <Input
        value={amount || ""}
        onChange={({ target }) => onChangeAmount(target.value)}
        size="small"
        type="number"
        fullWidth
      />
      <Box sx={{ position: "absolute", top: "0.5rem", right: "1rem" }}>
        {Currencies.EUR}
      </Box>
    </Stack>
  );
};

export default CurrencyAutocomplete;
