import { Box } from "@mui/material";
import React from "react";

const Row = ({children,sx}) => {
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        ...sx
      }}
    >
        {children}
    </Box>
  );
};

export default Row;
