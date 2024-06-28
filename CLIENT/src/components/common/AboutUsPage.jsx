import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Grid, Typography, useTheme } from "@mui/material";
import Image from "./movie_about.jpg"; // Import your image
import Banner from "./head1.png";

const AboutUsPage = () => {
  const theme = useTheme();
  const [scrollY, setScrollY] = useState(0);

  const handleScroll = () => {
    setScrollY(window.scrollY);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      style={{
        paddingTop: "5rem",
        width: "80%",
        margin: "auto",
      }}
    >
      <Typography gutterBottom sx={{ textAlign: "center" }}>
        <div style={{ position: "relative" }}>
          <div
            style={{
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              textAlign: "center",
            }}
          >
            <motion.div
              style={{
                pointerEvents: "none",
                fontSize: "clamp(1rem, 6vw, 3rem)",
                fontWeight: 700,
                fontFamily: '"DynaPuff", system-ui',
                opacity: scrollY > 100 ? 0 : 1,
              }}
            >
              <span style={{ color: "whitesmoke" }}>About Us</span>
            </motion.div>
          </div>
          <img
            src={Banner}
            alt=""
            style={{
              width: "100%",
              borderRadius: "10px",
              pointerEvents: "none",
            }}
          />
        </div>
      </Typography>

      <Grid
        container
        gutterBottom
        sx={{
          margin: "auto",
        }}
      >
        <Grid
          item
          xs={12}
          md={6}
          sx={{
            display: "flex",
            flexDirection: "column",
            padding: "20px",
            justifyContent: "center",
            alignItems: { xs: "center", md: "flex-start" },
          }}
        >
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <Typography
              variant="h4"
              gutterBottom
              sx={{
                fontWeight: "700",
                fontFamily: '"Tilt Neon", sans-serif',
                fontSize: "clamp(2rem, 6vw, 2rem)",
              }}
            >
              Welcome To MovieFlix
            </Typography>
            <Typography
              variant="body1"
              paragraph
              sx={{
                color: "Gray",
                fontSize: "clamp(0.8rem, 3vw, 1rem)",
                fontFamily: '"Jura", sans-serif',
                mt: 2,
              }}
            >
              Movie Flix is a pioneering force in the realm of streaming
              services, dedicated to delivering unparalleled entertainment to
              audiences worldwide. With an expansive library encompassing a
              rich tapestry of cinematic treasures, from beloved classics to
              cutting-edge releases, we curate an experience that caters to
              every taste and preference. Our unwavering mission is to empower
              entertainment enthusiasts with seamless access to their favorite
              movies and TV shows, fostering moments of joy and excitement
              anytime, anywhere.
            </Typography>
            <div
              style={{
                justifyContent: "left",
                display: "flex",
                flexDirection: "row",
                gap: "10px",
                padding: { xs: 0, md: "20px" }, // Add padding
                width: "100%",
              }}
            >
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                style={{
                  padding: "20px",
                  borderRadius: "10px",
                  backgroundColor: "rgb(11,15,41,.8)",
                }}
              >
                <Typography
                  variant="body1"
                  sx={{
                    marginBottom: 1,
                    fontWeight: "700",
                    fontFamily: '"Audiowide", serif',
                    fontSize: "clamp(1.6rem, 6vw, 2rem)",
                  }}
                >
                  10K
                </Typography>
                <Typography
                  variant="body2"
                  sx={{
                    color: "text.secondary",
                    fontSize: "clamp(1rem, 4vw, 1.2rem)",
                    fontFamily: '"Tilt Neon", sans-serif',
                  }}
                >
                  Listed Movies
                </Typography>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                style={{
                  padding: "20px",
                  borderRadius: "10px",
                  backgroundColor: "rgb(11,15,41,.8)",
                }}
              >
                <Typography
                  variant="body1"
                  sx={{
                    marginBottom: 1,
                    fontWeight: "700",
                    fontFamily: '"Audiowide", serif',
                    fontSize: "clamp(1.6rem, 6vw, 2rem)",
                  }}
                >
                  8K
                </Typography>
                <Typography
                  variant="body2"
                  sx={{
                    color: "text.secondary",
                    fontSize: "clamp(1rem, 4vw, 1.2rem)",
                    fontFamily: '"Tilt Neon", sans-serif',
                  }}
                >
                  Active Users
                </Typography>
              </motion.div>
            </div>
          </motion.div>
        </Grid>

        {/* Right Grid - Image */}
        <Grid
          item
          xs={12}
          md={6}
          sx={{
            display: { xs: "none", md: "flex" }, // Hide on small screens
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <motion.img
            src={Image}
            alt="Movie Flix"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            style={{
              width: "100%",
              maxWidth: "100%",
              padding: "20px",
              borderRadius: "30px",
              objectFit: "cover",
              pointerEvents: "none",
            }}
          />
        </Grid>
      </Grid>
    </div>
  );
};

export default AboutUsPage;
