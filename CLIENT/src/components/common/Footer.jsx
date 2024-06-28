import { Paper, Stack, Box, Typography, Link } from "@mui/material";
import React from "react";
import Container from "./Container";
import { useSelector} from "react-redux";
import { themeModes } from "../../configs/theme.configs";
import Logo from "./Logo";

const Footer = () => {
  const { themeMode } = useSelector((state) => state.themeMode);

  

  return (
    <Container>
      <Paper square={true}
      sx={{ backgroundImage: "unset", paddingTop: "1rem",width:'100%' }}
      >
        <Stack
          alignItems="center"
          justifyContent="center" // Aligning everything vertically centered
          direction="column" // Making it a vertical stack
          fontFamily='"Pixelify Sans", sans-serif'
          sx={{ height: "100%", gap: "1rem" }} // Adding gap between elements
        >
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <Logo />
          </Box>
          <Box sx={{ display: "flex", color: "grey" }}>
            <Link
              href="/aboutUs"
              sx={{
                fontSize: "small",
                textDecoration: "none",
                color: "gray",
                padding: "0 .5rem",
                borderRight: "1px solid gray",
                "&:hover": { textDecoration: "underline", color: "#ff6303" },
              }}
            >
              About Us
            </Link>
            <Link
              href="/contactUs"
              sx={{
                fontSize: "small",
                textDecoration: "none",
                color: "gray",
                padding: "0 .5rem",
                "&:hover": { textDecoration: "underline", color: "#ff6303" },
              }}
            >
              Contact Us
            </Link>
            <Link
              href="/privacyPolicy"
              sx={{
                fontSize: "small",
                textDecoration: "none",
                color: "gray",
                padding: "0 .5rem",

                borderLeft: "1px solid gray",
                "&:hover": { textDecoration: "underline", color: "#ff6303" },
              }}
            >
              Privacy Policy
            </Link>
          </Box>
          <Typography
            variant="body2"
            sx={{
              textAlign: "center",
              fontSize: "small",
              fontFamily: '"Rajdhani", sans-serif',
              padding:'0 5px',
              borderRadius:'5px',
              backgroundColor: themeMode === themeModes.dark ? "black" : "white", // Fix backgroundColor here
              color: "gray",
            }}
          >
            © {new Date().getFullYear()} MovieFlix All rights reserved.
          </Typography>
        </Stack>
      </Paper>
    </Container>
  );
};

export default Footer;
