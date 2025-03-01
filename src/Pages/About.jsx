import { Box } from "@mui/material";
import React from "react";
import AboutContent from "../Components/AboutContent";
import Banner from "../Components/Banner";

export default function About() {
  return (
    <Box>
      <Box>
        <AboutContent />
      </Box>
      <Box>
        <Banner />
      </Box>
    </Box>
  );
}
