import { Typography } from "@mui/material";
import React from "react";

const Gradient = ({ children }) => {
  return (
    <Typography
      sx={{
        backgroundImage:
          "linear-gradient(90deg, #000000 -4.69%, #ECA830 48.02%, #000000 103.89%)",
        backgroundClip: "text",
        color: "transparent",
      }}
    >
      {children}
    </Typography>
  );
};

export default Gradient;
