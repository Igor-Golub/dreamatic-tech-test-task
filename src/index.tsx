import React from "react";
import { createRoot } from "react-dom/client";
import { CssBaseline } from "@mui/material";
import App from "./App";
import { MainContextProvider } from "./context";

const root = createRoot(document.getElementById("root") as HTMLElement);

root.render(
  <MainContextProvider>
    <CssBaseline />
    <App />
  </MainContextProvider>,
);
