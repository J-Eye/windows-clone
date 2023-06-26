import React from "react";
import Dropdown from "./Dropdown";
import {
  AppBar,
  Button,
  Grid,
  Typography,
  Box,
  TextField,
} from "@mui/material";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
const Navbar = () => {
  return (
    <AppBar
      sx={{
        background: "white",
        boxShadow: "none",
        padding: "10px",
        alignItems: "center",
        height: "54px",
      }}
    >
      <Grid container>
        <Box
          sx={{
            alignItems: "center",
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-evenly",
          }}
        >
          <img
            src="src\assets\logo.png"
            height="50%"
            style={{ borderRight: "2px solid black", paddingRight: "10px" }}
          />
          <Typography color="black" sx={{ fontSize: "1rem" }}>
            Windows
          </Typography>
          <Dropdown
            name="About Windows"
            content={[
              "Meet Windows 11",
              "Compare Windows 10 & 11",
              "Windows 11 security",
              "Photo & moive editing",
              "Apps",
              "PC gaming",
              "Sync smartphones to computer",
              "Windows accessibility features",
              "Tips & tricks",
            ]}
          />
          <Dropdown name="Get Windows" content={["1"]} />
          <Dropdown name="Shop PCs" content={["1"]} />
          <Dropdown name="Get help" content={["1"]} />
          <Button>
            <Typography color="black" sx={{ fontSize: "0.6rem" }}>
              For business
            </Typography>
          </Button>
        </Box>
        <Box
          sx={{
            marginLeft: '20%',
            alignItems: "center",
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-evenly",
          }}
        >
          <Dropdown name="All Microsoft" content={["1"]} />
          <Button sx={{color:'black'}}
            endIcon={<SearchOutlinedIcon sx={{ transform: "scaleX(-1)" }} />}
          >
            Search
          </Button>
          <Button sx={{color:'black'}} endIcon={<AccountCircleOutlinedIcon  />}>Sign In</Button>
        </Box>
      </Grid>
    </AppBar>
  );
};

export default Navbar;
