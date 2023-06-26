import {
  AppBar,
  Box,
  Grid,
  Menu,
  Paper,
  Switch,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import Navbar from "../components/Navbar/Navbar";

const Main = () => {
  const [toggleAnimation, setToggleAnimation] = useState(true);
  const blueGradientStlye ={
    background: "#6db3f2",
              background:
                "-moz-linear-gradient(left, #6db3f2 0%, #54a3ee 37%, #54a3ee 37%, #3690f0 43%, #3690f0 43%, #1e69de 54%, #1e69de 54%, #1e69de 79%)",
              background:
                "-webkit-linear-gradient(left, #6db3f2 0%,#54a3ee 37%,#54a3ee 37%,#3690f0 43%,#3690f0 43%,#1e69de 54%,#1e69de 54%,#1e69de 79%)",
              background:
                "linear-gradient(to right, #6db3f2 0%,#54a3ee 37%,#54a3ee 37%,#3690f0 43%,#3690f0 43%,#1e69de 54%,#1e69de 54%,#1e69de 79%)",
              filter:
                "progid:DXImageTransform.Microsoft.gradient( startColorstr='#6db3f2', endColorstr='#1e69de',GradientType=1 )",
  }
  return (
    <Grid container direction="column">
      <Navbar />
      <Box
        sx={{
          backgroundColor: "#E3E3E3",
          width: "100vw",
          height: "50px",
          alignItems: "center",
          marginTop: "60px",
        }}
      >
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            position: "relative",
            left: "86%",
          }}
        >
          <Typography>Animation</Typography>
          <div
            style={{
              borderLeft: "2px solid black",
              position: "relative",
              left: "5px",
              height: "15px",
            }}
          />

          <Switch />
          <Typography>{toggleAnimation ? "on" : "off"}</Typography>
        </Box>
      </Box>
      <Box sx={{ width: "80vw", margin: "50px auto", display: "flex" }}>
        <Grid sx={{ width: "620px", marginRight: "40px", marginTop: "150px" }}>
          <div
            style={{
                ...blueGradientStlye,
                width: "60px",
                height: "4px",
                marginBottom: '20px'
            }}
          ></div>
          <Typography sx={{ fontSize: "62px" }}>
            Make the everyday easier
          </Typography>
          <Typography sx={{ fontSize: "20px" }}>
            Whether you're gaming, studying, running a business, or running a
            household, Windows 11 helps you git it done. Discover streamlined
            new features for every way you work, learn, and play.
          </Typography>
        </Grid>
        <img
          src="src/assets/4people.png"
          style={{ width: "40vw", float: "right" }}
        />
      </Box>
    </Grid>
  );
};

export default Main;
