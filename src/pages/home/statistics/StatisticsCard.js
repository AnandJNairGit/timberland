import { Box, Typography } from "@mui/material";
import React from "react";
import Centered from "../../../components/common/Centered";

const StatisticsCard = ({ img, number, type }) => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        // background: "green",
        // width: { xs: "100px" },
        marginY:2
      }}
    >
      <Centered>
        <Box
          sx={{
            backgroundImage: `url(${img})`,
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
            backgroundSize: "cover",
            width: { xs: "150px",sm:"150px",md:"200px" },
            height: { xs: "150px",sm:"150px",md:"200px" },
            borderRadius: "50%",
            marginBottom: 2,
          }}
        />
        <Typography
          sx={{
            fontWeight: 500,
            fontSize: {
              xs: "15px",
              sm: "20px",
              md: "21px",
              lg: "25px",
            },
            textAlign: "center",
          }}
        >
          {number} <span style={{ color: "#7A9D58" }}>{type}</span>
        </Typography>
      </Centered>
    </Box>
  );
};

export default StatisticsCard;
