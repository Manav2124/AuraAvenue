// import * as React from "react";
// import AppBar from "@mui/material/AppBar";
// import Box from "@mui/material/Box";
// import Toolbar from "@mui/material/Toolbar";
// import IconButton from "@mui/material/IconButton";
// import Typography from "@mui/material/Typography";
// import Menu from "@mui/material/Menu";
// import MenuIcon from "@mui/icons-material/Menu";
// import Container from "@mui/material/Container";
// import Button from "@mui/material/Button";
// import MenuItem from "@mui/material/MenuItem";
// import { Link } from "react-router-dom";
// import logo from "../Assets/Images/black (2).png"
// import Stack from '@mui/material/Stack';
// import SvgIcon from '@mui/material/SvgIcon';



// const pages = [
//   { title: "Home", path: "/" },
//   { title: "About", path: "/about" },
//   { title: "Shop", path: "/shop" },
// ];



// function NavBar() {
//   const [anchorElNav, setAnchorElNav] = React.useState(null);

  

//   const handleOpenNavMenu = (event) => {
//     setAnchorElNav(event.currentTarget);
//   };

//   const handleCloseNavMenu = () => {
//     setAnchorElNav(null);
//   };

//   return (
//     <AppBar position="static" elevation={1} sx={{ backgroundColor: "white", p: 2 }}>
//       <Container maxWidth="xl">
//         <Toolbar disableGutters>
//           {/* Logo for larger screens */}
//           <Box sx={{ display: { xs: "none", md: "flex" }, mr: 1 }}>
//             <img
//               style={{ width: "200px" }}
//               src={logo}
//               alt="logo"
//             />
//           </Box>
//           {/* Logo for smaller screens */}
//           <Box sx={{ display: { xs: "flex", md: "none" }, mr: 1 }}>
//             <img
//               style={{ width: "200px" }}
//               src={logo}
//               alt="logo"
//             />
//           </Box>
//           <Box
//             sx={{
//               flexGrow: 1,
//               display: { xs: "flex", md: "none" },
//               justifyContent: "flex-end",
//             }}
//           >
//             <IconButton
//               size="medium"
//               aria-label="account of current user"
//               aria-controls="menu-appbar"
//               aria-haspopup="true"
//               onClick={handleOpenNavMenu}
//               sx={{ color: "black" }}
//             >
//               <MenuIcon />
//             </IconButton>
//             <Menu
//               id="menu-appbar"
//               anchorEl={anchorElNav}
//               anchorOrigin={{
//                 vertical: "bottom",
//                 horizontal: "left",
//               }}
//               keepMounted
//               transformOrigin={{
//                 vertical: "top",
//                 horizontal: "left",
//               }}
//               open={Boolean(anchorElNav)}
//               onClose={handleCloseNavMenu}
//               sx={{ display: { xs: "block", md: "none" } }}
//             >
//               {pages.map((page, index) => (
//                 <MenuItem
//                   component={Link}
//                   to={page.path}
//                   key={index}
//                   onClick={handleCloseNavMenu}
//                 >
//                   <Typography sx={{ textAlign: "center" }}>
//                     {page.title}
//                   </Typography>
//                 </MenuItem>
//               ))}
//             </Menu>
//           </Box>

//           <Box
//             sx={{
//               flexGrow: 2,
//               display: { xs: "none", md: "flex" },
//               justifyContent: "flex-end",
//               gap: 3,
//             }}
//           >
//             {pages.map((page, index) => (
//               <Button
//                 variant="outlined" href="#outlined-buttons"
//                 component={Link}
//                 to={page.path}
//                 key={index}
//                 onClick={handleCloseNavMenu}
//                 sx={{
//                   my: 2,
//                   color: "darkblue",
//                   display: "block",
//                   fontWeight: "600",
//                   fontSize: "16px",
//                 }}
//               >
//                 {page.title}
//               </Button>
//             ))}
//           </Box>
//         </Toolbar>
//       </Container>
//     </AppBar>
//   );
// }

// export default NavBar;



import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import MenuItem from "@mui/material/MenuItem";
import { Link } from "react-router-dom";
import logo from "../Assets/Images/black (2).png";

const pages = [
  { title: "Home", path: "/" },
  { title: "About", path: "/about" },
  { title: "Shop", path: "/shop" },
];

function NavBar() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <AppBar
      position="static"
      elevation={0}
      sx={{
        backgroundColor: "#F5F5DC", // Beige background
        borderBottom: "1px solid #D2691E", // Brown border
        p: 2,
      }}
    >
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          {/* Logo for larger screens */}
          <Box sx={{ display: { xs: "none", md: "flex" }, mr: 1 }}>
            <img
              style={{ width: "200px" }}
              src={logo}
              alt="logo"
            />
          </Box>
          {/* Logo for smaller screens */}
          <Box sx={{ display: { xs: "flex", md: "none" }, mr: 1 }}>
            <img
              style={{ width: "200px" }}
              src={logo}
              alt="logo"
            />
          </Box>
          <Box
            sx={{
              flexGrow: 1,
              display: { xs: "flex", md: "none" },
              justifyContent: "flex-end",
            }}
          >
            <IconButton
              size="medium"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              sx={{ color: "#D2691E" }}
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{ display: { xs: "block", md: "none" } }}
            >
              {pages.map((page, index) => (
                <MenuItem
                  component={Link}
                  to={page.path}
                  key={index}
                  onClick={handleCloseNavMenu}
                >
                  <Typography sx={{ textAlign: "center", color: "#8B4513" }}>
                    {page.title}
                  </Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>

          <Box
            sx={{
              flexGrow: 2,
              display: { xs: "none", md: "flex" },
              justifyContent: "flex-end",
              gap: 3,
            }}
          >
            {pages.map((page, index) => (
              <Button
                variant="text"
                component={Link}
                to={page.path}
                key={index}
                onClick={handleCloseNavMenu}
                sx={{
                  my: 2,
                  color: "#8B4513",
                  fontWeight: "bold",
                  fontSize: "16px",
                  textTransform: "uppercase",
                  borderBottom: "2px solid transparent",
                  transition: "border-color 0.3s, color 0.3s",
                  "&:hover": {
                    borderColor: "#D2691E",
                    color: "#D2691E",
                  },
                }}
              >
                {page.title}
              </Button>
            ))}
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default NavBar;
