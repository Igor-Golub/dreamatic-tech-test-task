import React from "react";
import { ConventionCard } from "./widget";
import Layout from "./conponents/Layout";
import { Alert, Snackbar } from "@mui/material";
import { useMainContext } from "./context";

function App() {
  const { isError, errorMessage, handleResetError } = useMainContext();

  return (
    <Layout>
      <>
        <ConventionCard />
        <Snackbar
          open={isError}
          onClose={handleResetError}
          autoHideDuration={2000}
        >
          <Alert severity="error">{errorMessage}</Alert>
        </Snackbar>
      </>
    </Layout>
  );
}

export default App;
