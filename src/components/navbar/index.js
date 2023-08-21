import * as React from "react";
import PropTypes from "prop-types";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Button from "@mui/material/Button";
import { Link, useNavigate } from "react-router-dom";
import { Container, Typography } from "@mui/material";
import Row from "../common/Row";

import logo from "../../assets/logo.png";
import search from "../../assets/navbar/search.png";
import profile from "../../assets/navbar/Profile.png";
import menu from "../../assets/navbar/Menu.png";

const drawerWidth = 240;

function NavBar(props) {
  const leftNavItems = ["About Us", "Our Products", "Contact Us"];

  const leftNavRoutes = ["about", "products", "contact"];

  const { windowObj } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const navigate = useNavigate();
  const navbuttonSize = "17px";

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const redirect = (link) => {
    window.location.href = link;
  };

  const LstItem = ({ onClick, item }) => {
    return (
      <>
        <ListItem disablePadding>
          <ListItemButton sx={{ textAlign: "center" }} onClick={onClick}>
            <ListItemText primary={item} />
          </ListItemButton>
        </ListItem>
      </>
    );
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
      <Divider />
      <List>
        {leftNavItems.map((item, index) => (
          <LstItem
            item={item}
            onClick={() => {
              navigate(`/${leftNavRoutes[index]}`);
            }}
          />
        ))}
        <LstItem
          item="Marketplace"
          onClick={() => {
            redirect("https://fonts.google.com/specimen/Playfair+Display");
          }}
        />
        <LstItem
          item="Metaverse"
          onClick={() => {
            redirect("https://fonts.google.com/specimen/Playfair+Display");
          }}
        />
      </List>
    </Box>
  );

  const container =
    windowObj !== undefined ? () => windowObj().document.body : undefined;

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar
        component="nav"
        sx={{
          // background: "linear-gradient(to bottom, #ffff,#ffff, rgba(255, 255, 255, 0))",
          background: "#ffffff80",
          backdropFilter: "blur(10px)",
          position: "fixed",
          top: 0,
          // zIndex: 1,
          width: "100%",
          boxShadow: "none",
        }}
      >
        <Toolbar sx={{ width: { xs: "200%", md: "100%" } }}>
          {/* <Box sx={{background:"green", width:"100%"}}>sdf</Box> */}

          <Box
            sx={{
              mr: 2,
              display: { xs: "flex", sm: "flex", md: "none" },
              alignItems: "center",
              justifyContent: "space-between",
              width: "100%",
            }}
          >
            {/* <GradientText text="NFJ LABS" /> */}
            <Typography>TIMBERLAND</Typography>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="start"
              onClick={handleDrawerToggle}
            >
              <MenuIcon />
            </IconButton>
          </Box>

          <Container>
            <Box
              sx={{
                display: { xs: "none", sm: "none", md: "flex" },
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "space-between",
                width: "100%",
              }}
            >
              <Row>
                <img src={logo} width="50px" />
                <Typography sx={{ fontWeight: 600, color: "#318161" }}>
                  Timberland
                </Typography>
              </Row>

              {/*NAV BUTTONS  */}
              <Box display="flex">
                {leftNavItems.map((item, index) => (
                  <Button
                    key={item}
                    sx={{
                      color: "black",
                      marginX: "5px",
                      fontSize: navbuttonSize,
                      fontWeight: "400",
                    }}
                    onClick={() => {
                      navigate(`/${leftNavRoutes[index]}`);
                    }}
                  >
                    {item}
                  </Button>
                ))}
              </Box>

              {/* RIGHT NAV BUTTONS  */}
              <Row
                sx={{
                  justifyContent: "center",
                  background: "#142E38",
                  padding: "13px",
                  paddingX: "30px",
                  borderBottomLeftRadius: "10px",
                }}
              >
                <IconButton>
                  <img src={search} width="20px" />
                </IconButton>
                <IconButton>
                  <img src={profile} width="20px" />
                </IconButton>
                <IconButton>
                  <img src={menu} width="20px" />
                </IconButton>
              </Row>
            </Box>
          </Container>
        </Toolbar>
      </AppBar>
      <Box component="nav">
        <Drawer
          anchor="right"
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: "block", sm: "block", md: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
              background: "#ffff",
            },
          }}
        >
          {drawer}
        </Drawer>
      </Box>
    </Box>
  );
}

NavBar.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

export default NavBar;
