import { Box, Typography } from "@mui/material";
import React from "react";

export default function NoData() {
  return (
    <Box
      sx={{
        width: "100%",
        height: "70vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Box sx={{ p: 4 }}>
        <img
          alt="green iguana"
          height="100%"
          style={{ objectFit: "contain" }}
          width={"100%"}
          src={
            "https://static-assets-web.flixcart.com/fk-p-linchpin-web/fk-cp-zion/img/error-no-search-results_2353c5.png"
          }
        />
        <Box>
          <Typography
            gutterBottom
            variant="overline"
            fontWeight={"bolder"}
            component="div"
          >
            Sorry, no results found!
          </Typography>
          <Typography variant="caption" color="text.secondary">
            Please check the spelling or try searching for something else ABOUT
          </Typography>
        </Box>
      </Box>
    </Box>
  );
}
