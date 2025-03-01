import { Box, Grid2, Typography } from "@mui/material";
import React from "react";
import about from "../Assets/Images/visuals-WTwcuYHPDEE-unsplash.jpg"
export default function AboutContent() {
  return (
    <Box sx={{ flexGrow: 1, p: 3 }}>
      <Grid2
        container
        // spacing={2}
        sx={{ backgroundColor: "#acab753b", borderRadius: "20px" }}
      >
        <Grid2 size={{ xs: 11, sm: 4 }}>
          <img
            src={about}
            alt="picture"
            style={{ width: "100%", borderRadius: "20px" }}
          />
        </Grid2>
        <Grid2
          size={{ xs: 12, sm: 6 }}
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Box
            sx={{
              p: 3,
              textAlign: "justify",
            }}
          >
            <Typography
              gutterBottom
              sx={{ fontWeight: "900", fontSize: "40px" }}
            >
              About <span style={{ color: "#5a0c4a" }}>Us</span>
            </Typography>
            <Typography
              variant="subtitle2"
              gutterBottom
              sx={{ fontWeight: "900" }}
            >
              "Your Style, Your Way!"
            </Typography>
            <Typography
              variant="body2"
              gutterBottom
              sx={{ textAlign: "justify" }}
            >
              Welcome to AuraAvenue!

              At AuraAvenue, we believe in the power of youthful expression and the joy of discovering unique styles. Our mission is to provide a vibrant and dynamic shopping experience tailored just for you.
              <br /><br /><br />
              Our Story

              Founded with a passion for fashion and a commitment to quality, AuraAvenue was born to inspire and empower young individuals to express themselves through trendy and affordable clothing. We curate collections that reflect the latest trends while ensuring comfort and durability.

              
              <br /> <br />
              Customer-Centric Approach: Your satisfaction is our priority. We strive to provide excellent customer service and a seamless shopping experience.
              Join the Movement


            </Typography>
            <Typography
              variant="body1"
              gutterBottom
              sx={{ textAlign: "justify" }}
            >
             
            </Typography>
          </Box>
        </Grid2>
      </Grid2>
    </Box>
  );
}
