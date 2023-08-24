import React from "react";
import Row from "../../../components/common/Row";
import {
  Box,
  Button,
  Chip,
  Container,
  IconButton,
  Typography,
} from "@mui/material";

import bannerImg from "../../../assets/home/bannerImg.png";
import fb from "../../../assets/home/fb.png";
import ig from "../../../assets/home/ig.png";
import twitter from "../../../assets/home/twiter.png";
import Centered from "../../../components/common/Centered";

const Banner = () => {
  const LeftBannerSection = () => {
    return (
      <Box>
        <Chip
          label="Oxygen Plant"
          sx={{
            background: "#D5EEC6",
            color: "#244030",
            fontFamily: "Open Sans",
            fontSize: "12.444px",
          }}
        />
        <Typography
          sx={{
            marginY: 2,
            color: "#142E38",
            fontFamily: "Poppins",
            fontSize: { xs: "40px", sm: "40px", md: "50px", lg: "65px" },
            width: { xs: "200px", sm: "300px", md: "400px", lg: "500px" },
            fontWeight: 600,
            lineHeight: { xs: "40px", sm: "50px", md: "65px", lg: "75px" },
          }}
        >
          Beautiful living greenery for Investment
        </Typography>
        <Typography
          sx={{
            color: "#142E38",
            fontSize: "19px",
            width: { xs: "200px", sm: "300px", md: "400px", lg: "500px" },
          }}
        >
          Invest in Sustainable Forestry with Timberland Plantation Investment
          Company Limited.
        </Typography>
        <Button
          sx={{
            background: "#318161",
            paddingX: 2,
            fontSize: "21px",
            borderRadius: "10px",
            marginY: 3,
          }}
        >
          See More
        </Button>
      </Box>
    );
  };

  const RightBannerSection = () => {
    return (
      <Row sx={{ display: { xs: "block", sm: "flex" } }}>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            width: { xs: "200px", sm: "250px", md: "400px", lg: "500px" },
            height: { xs: "200px", sm: "250px", md: "400px", lg: "500px" },
            borderRadius: "50%",
            backgroundImage: "linear-gradient(to bottom, #D5EEC6, #318161)",
            boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.2)",
            overflow: "hidden",
          }}
        >
          <img src={bannerImg} width="95%" alt="Banner" />
        </Box>
        <Box
          sx={{
            display: { xs: "none", sm: "flex" },
            flexDirection: "column", // Set flexDirection to "column"
            justifyContent: "center",
            alignItems: "center",
            marginLeft: 2,
          }}
        >
          <IconButton sx={{ marginY: 1 }}>
            <img src={fb} width="30px" alt="Facebook" />
          </IconButton>
          <IconButton sx={{ marginY: 1 }}>
            <img src={ig} width="30px" alt="Instagram" />
          </IconButton>
          <IconButton sx={{ marginY: 1 }}>
            <img src={twitter} width="30px" alt="Twitter" />
          </IconButton>
        </Box>
      </Row>
    );
  };

  const MobileView = () => {
    return (
      <Box sx={{ display: { xs: "block", sm: "none" } }}>
        <Typography
          sx={{
            marginY: 2,
            color: "#142E38",
            fontFamily: "Poppins",
            fontSize: "25px",
            fontWeight: 600,
            lineHeight: "40px",
            textAlign: "center",
          }}
        >
          Beautiful living greenery for Investment
        </Typography>
        <Centered>
          <RightBannerSection />
        </Centered>

        <Typography
          sx={{
            color: "#142E38",
            fontSize: "18px",
            textAlign: "center",
          }}
        >
          Invest in Sustainable Forestry with Timberland Plantation Investment
          Company Limited.
        </Typography>
        <Centered>
          <Button
            sx={{
              background: "#318161",
              paddingX: 2,
              fontSize: "21px",
              borderRadius: "10px",
              marginY: 3,
            }}
          >
            See More
          </Button>
        </Centered>
      </Box>
    );
  };

  return (
    <>
      <Box
        sx={{
          backgroundImage:
            "linear-gradient(to bottom,#D5EEC6 1%, #FFFFFF 70%,#D5EEC6, #FFFFFF 20%)",
          paddingY: { xs: 1, sm: 6 },
        }}
      >
        <Container>
          <Row sx={{ display: { xs: "none", sm: "flex" } }}>
            <LeftBannerSection />
            <RightBannerSection />
          </Row>
          <MobileView />
        </Container>
      </Box>
    </>
  );
};

export default Banner;
