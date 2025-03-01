import { Box, Typography, Button, Container } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import heroBg from "../Assets/Images/black-friday-elements-assortment.jpg"// Update the image path

export default function Hero() {
  return (
    <Box
      sx={{
        width: "100%",
        height: "90vh",
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${heroBg})`,
        backgroundPosition: "center",
        backgroundSize: "cover",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center",
        color: "white",
        padding: "20px 50px",
      }}
    >
      <Container maxWidth="md">
        <Typography
          sx={{
            fontFamily: "'Playfair Display', serif", // Change font family
            fontWeight: "bold",
            fontSize: { xs: "2.5rem", sm: "4rem" },
            textTransform: "uppercase",
            color: "white",
            marginBottom: "1rem",
            letterSpacing: "2px",
          }}
          gutterBottom
        >
          Welcome To AuraAvenue
        </Typography>

        <Typography
          sx={{
            fontFamily: "'Dancing Script', cursive", // Change font family
            fontWeight: "bold",
            fontSize: { xs: "3rem", sm: "5rem" },
            color: "lightgoldenrodyellow",
            marginBottom: "1rem",
            lineHeight: 1,
          }}
          gutterBottom
        >
          "Your Style, Your Way!"
        </Typography>

        <Typography
          sx={{
            fontSize: { xs: "1.2rem", sm: "1.5rem" },
            color: "lightgray",
            marginBottom: "2rem",
          }}
          gutterBottom
        >
          Discover the latest trends and express your unique style.
        </Typography>

        <Button
          component={Link}
          to="/shop"
          variant="contained"
          sx={{
            fontSize: "1.2rem",
            padding: "15px 30px",
            borderRadius: "30px",
            boxShadow: "4px 4px 8px rgba(0, 0, 0, 0.4)",
            backgroundColor: "gold",
            color: "black",
            "&:hover": {
              backgroundColor: "darkgoldenrod",
              boxShadow: "6px 6px 12px rgba(0, 0, 0, 0.5)",
            },
            marginTop: "20px",
          }}
        >
          Shop Now
        </Button>
      </Container>
    </Box>
  );
}
