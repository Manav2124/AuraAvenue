// import React from "react";
// import { Box, Typography, Grid, Paper } from "@mui/material";
// import { Link } from "react-router-dom";
// import footer from "../Assets/Images/black (2).png"
// const Footer = () => {
//   return (
//     <Paper
//       elevation={10}
//       sx={{
//         color: "#353543",
//         py: 4,
//         px: 2,
//         textAlign: { xs: "center", md: "left" },
//       }}
//     >
//       <Grid container spacing={2} justifyContent="center">
//         {/* Website Title and Tagline */}
//         <Grid item xs={12} md={6}>
//           <img style={{ width: "200px", color: "black" }} src={footer} alt="logo" />
//           <Typography variant="body1" sx={{ mt: 1 }}>
//           "Your Style, Your Way!"
//           </Typography>
//         </Grid>

//         {/* Quick Links */}
//         <Grid
//           item
//           xs={12}
//           md={6}
//           sx={{ textAlign: { xs: "center", md: "right" } }}
//         >
//           <Typography variant="h6" fontWeight="bold">
//             Quick Links
//           </Typography>
//           <Box sx={{ mt: 1, display: "flex", flexDirection: "column" }}>
//             <Link
//               to="/"
//               style={{
//                 display: "block",
//                 mb: 1,
//                 textDecoration: "none",
//                 fontWeight: "600",
//                 fontSize: "18px",
//               }}
//             >
//               Home
//             </Link>
//             <Link
//               to="/about"
//               style={{
//                 display: "block",
//                 mb: 1,
//                 textDecoration: "none",
//                 fontWeight: "600",
//                 fontSize: "18px",
//               }}
//             >
//               About
//             </Link>
//             <Link
//               to="/shop"
//               style={{
//                 display: "block",
//                 mb: 1,
//                 textDecoration: "none",
//                 fontWeight: "600",
//                 fontSize: "18px",
//               }}
//             >
//               Shop
//             </Link>
//           </Box>
//         </Grid>
//       </Grid>

//       <Typography
//         variant="body2"
//         sx={{ mt: 4, textAlign: "center", color: "#aaa" }}
//       >
//         &copy; {new Date().getFullYear()} title. All Rights Reserved.
//       </Typography>
//     </Paper>
//   );
// };

// export default Footer;




import React from "react";
import { Box, Typography, Grid, Paper, IconButton } from "@mui/material";
import { Link } from "react-router-dom";
import footer from "../Assets/Images/black (2).png";
import {
  Facebook,
  Twitter,
  Instagram,
  Email as EmailIcon,
  Phone as PhoneIcon
} from "@mui/icons-material";

const Footer = () => {
  return (
    <Paper
      elevation={10}
      sx={{
        color: "#353543",
        py: 4,
        px: 2,
        textAlign: { xs: "center", md: "left" },
      }}
    >
      <Grid container spacing={2} justifyContent="center">
        {/* Website Title and Tagline */}
        <Grid item xs={12} md={4}>
          <img style={{ width: "200px" }} src={footer} alt="logo" />
          <Typography variant="body1" sx={{ mt: 1 }}>
            "Your Style, Your Way!"
          </Typography>
        </Grid>

        {/* Quick Links */}
        <Grid
          item
          xs={12}
          md={4}
          sx={{ textAlign: { xs: "center", md: "left" } }}
        >
          <Typography variant="h6" fontWeight="bold">
            Quick Links
          </Typography>
          <Box sx={{ mt: 1, display: "flex", flexDirection: "column" }}>
            <Link
              to="/"
              style={{
                display: "block",
                mb: 1,
                textDecoration: "none",
                fontWeight: "600",
                fontSize: "18px",
              }}
            >
              Home
            </Link>
            <Link
              to="/about"
              style={{
                display: "block",
                mb: 1,
                textDecoration: "none",
                fontWeight: "600",
                fontSize: "18px",
              }}
            >
              About
            </Link>
            <Link
              to="/shop"
              style={{
                display: "block",
                mb: 1,
                textDecoration: "none",
                fontWeight: "600",
                fontSize: "18px",
              }}
            >
              Shop
            </Link>
            <Link
              to="/contact"
              style={{
                display: "block",
                mb: 1,
                textDecoration: "none",
                fontWeight: "600",
                fontSize: "18px",
              }}
            >
              
            </Link>
          </Box>
        </Grid>

        {/* Contact and Social Media */}
        <Grid
          item
          xs={12}
          md={4}
          sx={{ textAlign: { xs: "center", md: "right" } }}
        >
          <Typography sx={{ display: "flex",display: "flex", alignItems: "center" }} variant="h6" fontWeight="bold">
            
            Contact Us
            
          </Typography>
          <Box sx={{ mt: 1, display: "flex", flexDirection: "column" }}>
            <Box sx={{ display: "flex", alignItems: "center" }}>
              <EmailIcon sx={{ mr: 1 }} />
              <Typography variant="body1">support@AuraAvenue.com</Typography>
            </Box>
            <Box sx={{ display: "flex", alignItems: "center", mb: 1 }}>
              <PhoneIcon sx={{ mr: 1 }} />
              <Typography variant="body1">+123 456 7890</Typography>
            </Box>
            <Box sx={{ display: "flex", justifyContent: "center" }}>
              <IconButton
                component="a"
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Facebook />
              </IconButton>
              <IconButton
                component="a"
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Twitter />
              </IconButton>
              <IconButton
                component="a"
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Instagram />
              </IconButton>
            </Box>
          </Box>
        </Grid>
      </Grid>

      <Typography
        variant="body2"
        sx={{ mt: 4, textAlign: "center", color: "#aaa" }}
      >
        &copy; {new Date().getFullYear()} Your Company. All Rights Reserved.
      </Typography>
    </Paper>
  );
};

export default Footer;
