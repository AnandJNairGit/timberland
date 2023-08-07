import { Box } from "@mui/material";
import React from "react";

const Centered = ({ children, bothAxis }) => {
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
        height: bothAxis ? "100%" : undefined,
      }}
    >
      {children}
    </Box>
  );
};

export default Centered;
