import React from "react";
import { Paper, PaperProps, styled } from "@mui/material";
import ConventionCardHeader from "./ConventionCardHeader";
import ConventionCardContent from "./ConventionCardContent";

const ConventionCard = () => {
  return (
    <StyledPaper elevation={3}>
      <ConventionCardHeader />

      <ConventionCardContent />
    </StyledPaper>
  );
};

const StyledPaper = styled(Paper)<PaperProps>({
  position: "absolute",
  padding: "2rem",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  minWidth: "20rem",
  maxWidth: "20rem",
  minHeight: "17rem",
  maxHeight: "17rem",
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
  gap: "1rem",
});

export default ConventionCard;
