import { Box } from "@mui/material";
import React from "react";

const Spacer = ({ row, size }) => {
  return <Box sx={{ width: row ? size : "", height: row ? "" : size }} />;
};

export default Spacer;
