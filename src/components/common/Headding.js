import { Typography } from "@mui/material";
import React from "react";

const Heading = ({ text, children, size, color }) => {
  const fontSize = {
    s1: { xs: "20px", sm: "30px", md: "40px" },
    s2: { xs: "17px", sm: "25px", md: "35px" },
  };

  const defaultFontSize = { xs: "25px", sm: "35px", md: "48px" };
  const defaultMarginY = { xs: "10px", sm: "20px", md: "20px" };

  return (
    <Typography
      sx={{
        fontWeight: 500,
        fontSize: size ? fontSize[size] : defaultFontSize,
        marginY: defaultMarginY,
        color: color || undefined,
      }}
    >
      {text || children}
    </Typography>
  );
};

export default Heading;
