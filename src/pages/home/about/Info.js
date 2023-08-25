import React from "react";
import Row from "../../../components/common/Row";
import { Box, Typography } from "@mui/material";

import img from "../../../assets/home/about/about.png";

const Info = () => {
  return (
    <>
      <Row>
        <Box sx={{ width: "60%" }}>
          <Typography>
            Forest Department conducted the field survey and selected degraded
            forest which should be restored and rehabilitated with forest
            plantation before 2014. Kyauk Chaung Gyi Reserve Forest was covered
            with degraded forest and it was selected for Private Forest
            Plantation Program to establish forest plantation.
          </Typography>
          <Typography>
            Government of The Republic of The Union Of Myanmar, Ministry of
            Environmental Conservation and Forestry, Forest Department invited
            Expressions of Interest (EoI) and explained about the OPEN TENDER
            procedure to invest in Private Forest Plantation Program. Submission
            of open tender form was closed at 23rd October, 2014.
          </Typography>
        </Box>
        <Box
          sx={{
            backgroundImage: `url(${img})`,
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
            backgroundSize: "cover",
            width: { xs: "150px", sm: "150px", md: "300px" },
            height: { xs: "150px", sm: "150px", md: "300px" },
            borderRadius: "5%",
            // marginBottom: 2,
          }}
        />
      </Row>
    </>
  );
};

export default Info;
