// import React from "react";
// import { Box, Typography, Button, Grid } from "@mui/material";
// import pic from "../Assets/Images/single-image1.png";
// const Banner = () => {
//   return (
//     <Box
//       sx={{
//         bgcolor: "#cfcfcfba",
//         overflow: "hidden",
//         mt: 5,
//         px: 4,
//         py: 6,
//         backgroundPosition: "right",
//         backgroundRepeat: "no-repeat",
//         backgroundSize: "contain",
//       }}
//     >
//       <Grid container alignItems="center" spacing={2}>
//         {/* Left Content */}
//         <Grid item xs={12} md={6}>
//           <Box sx={{ textAlign: { xs: "center", md: "left" }, px: { md: 4 } }}>
//             <Typography variant="h3" sx={{ fontWeight: "bold" }}>
//             {/* AuraAvenue */}
//             </Typography>
//             <Typography
//               variant="h2"
//               sx={{
//                 textTransform: "uppercase",
//                 color: { xs: "white", sm: "#212121" },
//                 fontWeight: "bold",
//                 pb: 3,
//               }}
//             >
//               "Your Style, Your Way!"
//             </Typography>
//           </Box>
//         </Grid>

//         {/* Right Content (Empty for Now) */}
//         <Grid item xs={12} md={6}></Grid>
//       </Grid>
//     </Box>
//   );
// };

// export default Banner;




import React from "react";
import { Box, Typography, Button, Grid } from "@mui/material";
import pic from "../Assets/Images/about-1.jpg";

const Banner = () => {
  return (
    <Box
      sx={{
        bgcolor: "#cfcfcfba",
        // overflow: "hidden",
        mt: 5,
        px: 4,
        py: 6,
        // backgroundImage: `url(${pic})`,
        backgroundPosition: "right",
        backgroundRepeat: "no-repeat",
        // backgroundSize: "contain",
      }}
    >
      <Grid container alignItems="center" spacing={2}>
        {/* Left Content */}
        <Grid item xs={12} md={6}>
          <Box sx={{ textAlign: { xs: "center", md: "left" }, px: { md: 5 } }}>
            <Typography variant="h3" sx={{ fontWeight: "bold", color: "#333" }}>
              AuraAvenue
            </Typography>
            <Typography
              variant="h4"
              sx={{
                textTransform: "uppercase",
                color: { xs: "white", sm: "#212121" },
                fontWeight: "bold",
                pb: 3,
              }}
            >
              "Your Style, Your Way!"
            </Typography>
            <Typography variant="body1" sx={{ pb: 3, color: "#555" }}>
              Discover the latest trends and express your unique style with our exclusive collections.
            </Typography>
            
          </Box>
        </Grid>

        {/* Right Content (Image) */}
        <Grid item xs={12} md={6}>
          <Box
            component="img"
            src={pic}
            alt="Banner Image"
            sx={{
              width: "100%",
              height: "auto",
              display: { xs: "none", md: "block" },
            }}
          />
        </Grid>
      </Grid>
    </Box>
  );
};

export default Banner;
