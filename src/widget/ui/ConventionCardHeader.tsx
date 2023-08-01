import React, { useMemo } from "react";
import {
  Stack,
  StackProps,
  styled,
  Typography,
  TypographyProps,
} from "@mui/material";
import dayjs from "dayjs";
import { useMainContext } from "../../context";
import { Currencies } from "../../enums";

const ConventionCardHeader = () => {
  const { to, amountFrom, amountTo, date, timestamp } = useMainContext();

  const dateValue = useMemo<string>(() => `Last update - ${date} ${dayjs(timestamp).format("HH:mm")}` ?? dayjs().format("DD-MM-YY"), [])

  return (
    <StyledStack>
      <StyledTypography>
        {amountFrom} {Currencies.EUR} equals
      </StyledTypography>
      <StyledTypography>
        {amountTo} {to}
      </StyledTypography>
      <StyledTypography>
        {dateValue}
      </StyledTypography>
    </StyledStack>
  );
};

const StyledTypography = styled(Typography)<TypographyProps>({
  whiteSpace: "nowrap",
  overflow: "hidden",
  textOverflow: "ellipsis",
  maxWidth: "100%",
});

const StyledStack = styled(Stack)<StackProps>({
  flexDirection: "column",
  gap: "1rem",
  alignItems: "center",
  justifyContent: "space-between",
  maxWidth: "100%",
});

export default ConventionCardHeader;
