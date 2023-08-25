import { Container } from "@mui/material";
import React from "react";
import Headding from "../../../components/common/Headding";
import Info from "./Info";

const About = () => {
  return (
    <>
      <Container sx={{ marginTop: 5 }}>
        <Headding>About Us</Headding>
        <Info />
      </Container>
    </>
  );
};

export default About;
