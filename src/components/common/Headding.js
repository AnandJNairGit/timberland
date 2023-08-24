import { Box, Typography } from "@mui/material";
import React from "react";

const Headding = ({ children }) => {
  return (
    <>
      <Box
        sx={{
          borderBottom: "3px solid #C3D6A0",
          display: "inline-block",
        }}
      >
        <Typography
          sx={{
            fontFamily: "poppins",
            fontSize: {xs:"23px", sm:"35px"},
          }}
        >
          {children}
        </Typography>
      </Box>
    </>
  );
};

export default Headding;
