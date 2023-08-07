import { Avatar as MuiAvatar } from "@mui/material";
import React from "react";

const Avatar = ({ size, text, img }) => {
  return (
    <MuiAvatar
      src={img}
      sx={{
        height: Math.round(size),
        width: Math.round(size),
        fontSize: `${Math.round(size / 2)}px`,
      }}
    >
      {text ? text : ""}
    </MuiAvatar>
  );
};

export default Avatar;
