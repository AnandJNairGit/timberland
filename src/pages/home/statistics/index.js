import { Box, Container, Typography } from "@mui/material";
import React from "react";
import Headding from "../../../components/common/Headding";

import s1 from "../../../assets/home/statistics/s1.webp";
import s2 from "../../../assets/home/statistics/s2.webp";
import s3 from "../../../assets/home/statistics/s3.webp";
import s4 from "../../../assets/home/statistics/s4.webp";

import Row from "../../../components/common/Row";
import StatisticsCard from "./StatisticsCard";

const Statistics = () => {
  const statData = [
    { type: "Acres", number: "5000", img: s1 },
    { type: "Trees", number: "5000 * 580", img: s2 },
    { type: "Old", number: "8 years", img: s3 },
    { type: "CBM", number: "25,000", img: s4 },
  ];

  return (
    <>
      <Container>
        <Headding>Key Statistics</Headding>

        <Row sx={{flexWrap:"wrap", marginTop:3}}>
          {statData.map((stat) => (
            <StatisticsCard {...stat} />
          ))}
        </Row>
      </Container>
    </>
  );
};

export default Statistics;
