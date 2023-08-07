import { Box } from "@mui/material";
import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Navigate = ({ to, children }) => {
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [to]);

  const handleClick = () => {
    navigate(`${to}`);
  };

  return (
    <Box sx={{ cursor: "pointer" }} onClick={handleClick}>
      {children}
    </Box>
  );
};

export default Navigate;
