import React, { FC, PropsWithChildren } from "react";
import { Box, BoxProps, styled } from "@mui/material";
import { StyledEngineProvider } from "@mui/material/styles";
import ErrorBoundary from "./ErrorBoundary";

const Layout: FC<PropsWithChildren> = ({ children }) => {
  return (
    <ErrorBoundary>
      <StyledEngineProvider injectFirst>
        <StyledBox>{children}</StyledBox>
      </StyledEngineProvider>
    </ErrorBoundary>
  );
};

const StyledBox = styled(Box)<BoxProps>({
  width: "100vw",
  height: "100vh",
  background: "white",
});

export default Layout;
