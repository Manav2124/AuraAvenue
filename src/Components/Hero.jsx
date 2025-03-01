// import { Box, Typography, Button, Container } from "@mui/material";
// import React from "react";
// import heroBg from "../Assets/Images/black-friday-elements-assortment.jpg";


// export default function Hero() {
//   return (
//     <Box
//       sx={{
//         width: "903",
//         height: "903px",
//         objectFit:"cover",
//         ObjectPosition:" 50% 50%",
//         backgroundPosition: "right center",
//         backgroundSize: "cover",
//         backgroundImage: `url(${heroBg})`,
//         display: "flex",
//         flexDirection: "column",
//         justifyContent: "center",
//         alignItems: "flex-start",
//         textAlign: "left",
//         color: "sienna ",
//         padding: "20px 50px",

        
//       }}
//     >
//       <Container maxWidth="md">
//         <Typography
      
          
//           sx={{
//             fontWeight: "bold",
//             fontSize: { xs: "2rem", sm: "3rem" },
//             textTransform: "uppercase",
//             color: "white",
//             marginBottom: "1rem",
//           }}
//           gutterBottom
//         >
//           Welcome To AuraAvenue
//         </Typography>
        
//         <Typography
//           sx={{
//             fontWeight: "bold",
//             fontSize: { xs: "4rem", sm: "6rem" },
//             color: "linen ",
//             marginBottom: "1rem",
//             lineHeight: 1,
//           }}
//           gutterBottom
//         >
//           "Your Style, Your Way!"
//         </Typography>
//         <Typography
//           sx={{
//             fontSize: { xs: "1rem", sm: "1.2rem" },
//             color: "black",
//             marginBottom: "2rem",
//           }}
//           gutterBottom
//         >
          
//         </Typography>
//         {/* <Button
//           variant="contained"
//           color="secondary"
//           sx={{
//             fontSize: "1rem",
//             padding: "10px 20px",
//             borderRadius: "25px",
//             boxShadow: "2px 2px 4px rgba(0, 0, 0, 0.3)",
//             backgroundColor: "#fff",
//             color: "#000",
//             "&:hover": {
//               backgroundColor: "#e0e0e0",
//             },
//           }}
//         >
          
//         </Button> */}
//       </Container>
//     </Box>
//   );
// }



import { Box, Typography, Button, Container } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import heroBg from "../Assets/Images/black-friday-elements-assortment.jpg";

export default function Hero() {
  return (
    <Box
      sx={{
        width: "100%",
        height: "90vh",
        backgroundImage: `url(${heroBg})`,
        backgroundPosition: "center",
        backgroundSize: "cover",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center",
        color: "sienna",
        padding: "20px 50px",
      }}
    >
      <Container maxWidth="md">
        <Typography
          sx={{
            fontWeight: "bold",
            fontSize: { xs: "2rem", sm: "3rem" },
            textTransform: "uppercase",
            color: "white",
            marginBottom: "1rem",
          }}
          gutterBottom
        >
          Welcome To AuraAvenue
        </Typography>

        <Typography
          sx={{
            fontWeight: "bold",
            fontSize: { xs: "4rem", sm: "6rem" },
            color: "linen",
            marginBottom: "1rem",
            lineHeight: 1,
          }}
          gutterBottom
        >
          "Your Style, Your Way!"
        </Typography>

        <Typography
          sx={{
            fontSize: { xs: "1rem", sm: "1.2rem" },
            color: "black",
            marginBottom: "2rem",
          }}
          gutterBottom
        >
          {/* Additional text can go here */}
        </Typography>

        <Button
          component={Link}
          to="/shop"
          variant="contained"
          color="secondary"
          sx={{
            fontSize: "1rem",
            padding: "10px 20px",
            borderRadius: "25px",
            boxShadow: "2px 2px 4px rgba(0, 0, 0, 0.3)",
            backgroundColor: "#fff",
            color: "#000",
            "&:hover": {
              backgroundColor: "#e0e0e0",
            },
            marginTop: "20px", // Add some space above the button
          }}
        >
          Shop Now
        </Button>
      </Container>
    </Box>
  );
}

