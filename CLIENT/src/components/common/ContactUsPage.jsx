import React, { useState } from "react";
import { motion } from "framer-motion";
import { Grid, Typography, TextField, Button, Snackbar } from "@mui/material";
import Banner from "./head1.png";
import { useSelector } from "react-redux";
import { themeModes } from "../../configs/theme.configs";
import Contact from "./contact.png";
import { useInView } from "react-intersection-observer";

const ContactUsPage = () => {
  const { themeMode } = useSelector((state) => state.themeMode);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    topic: "",
    question: "",
  });
  const [openPopup, setOpenPopup] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const handleClosePopup = () => {
    setOpenPopup(false);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const { firstName, lastName, email, topic, question } = formData;
    if (firstName && lastName && email && topic && question) {
      setOpenPopup(true);
      setErrorMessage("");
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        topic: "",
        question: "",
      });
      setTimeout(() => {
        setOpenPopup(false);
      }, 5000);
    } else {
      setErrorMessage("Please fill in all required fields.");
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  
    // Check if all required fields are filled
    const { firstName, lastName, email, topic, question } = formData;
    if (firstName && lastName && email && topic && question) {
      setErrorMessage("");
    } else {
      setErrorMessage("Please fill in all required fields.");
    }
  };
  
  const [formRef, inView] = useInView({
    triggerOnce: true,
    threshold: 0.5, // Adjust this threshold as needed
  });
  return (
    <div
      style={{
        paddingTop: "5rem",
        width: "80%",
        margin: "auto",
      }}
    >
      <Typography gutterBottom sx={{ textAlign: "center" }}>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
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
              <div
                style={{
                  pointerEvents: "none",
                  fontSize: "clamp(1rem, 6vw, 3rem)", // Responsive font size for large screens
                  fontWeight: 700,
                  fontFamily: '"DynaPuff", system-ui',
                  color: "whitesmoke",
                }}
              >
                Contact Us
              </div>
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
        </motion.div>
      </Typography>
      <div>
        <Grid
          container
          spacing={2}
          sx={{
            marginTop: "3rem",
            borderRadius: "10px", // Rounded corners
          }}
        >
          {/* Phone */}
          <Grid item xs={12} md={4}>
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              style={{
                textAlign: "center",
                backgroundColor:
                  themeMode === themeModes.dark ? "rgb(11,11,11)" : "#a8b7ba",
                display: "flex", // Flex container
                flexDirection: "column", // Stack items vertically
                alignItems: "center", // Center vertically
                justifyContent: "center", // Center horizontally
                padding: "10px",
              }}
            >
              <div
                style={{
                  backgroundColor: "rgba(255, 255, 255, 0.2)", // Circular background
                  borderRadius: "50%", // Circular shape
                  padding: "10px", // Increased padding
                }}
              >
                <span
                  class="material-symbols-outlined"
                  style={{
                    fontSize: "clamp(16px, 8vw, 32px)",
                    display: "flex",
                  }}
                >
                  phone_enabled
                </span>
                {/* Responsive font size */}
              </div>
              <div style={{ marginTop: "10px" }}>
                <Typography
                  variant="h6"
                  sx={{
                    marginBottom: 1,
                    fontWeight: "700",
                    fontSize: "clamp(32px, 8vw, 36px)",
                    fontFamily: '"Abel", sans-serif',
                  }}
                >
                  Call Us
                </Typography>
                <Typography
                  variant="body1"
                  sx={{
                    fontSize: "clamp(10px, 2vw, 15px)",
                    fontFamily: '"Libre Baskerville", serif',
                  }}
                >
                  +91-123-456-7890
                </Typography>
              </div>
            </motion.div>
          </Grid>

          {/* Email */}
          <Grid item xs={12} md={4}>
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              style={{
                textAlign: "center",
                backgroundColor:
                  themeMode === themeModes.dark ? "rgb(11,11,11)" : "#a8b7ba",
                display: "flex", // Flex container
                flexDirection: "column", // Stack items vertically
                alignItems: "center", // Center vertically
                justifyContent: "center", // Center horizontally
                padding: "10px",
              }}
            >
              <div
                style={{
                  backgroundColor: "rgba(255, 255, 255, 0.2)", // Circular background
                  borderRadius: "50%", // Circular shape
                  padding: "10px", // Increased padding
                }}
              >
                <span
                  class="material-symbols-outlined"
                  style={{
                    fontSize: "clamp(16px, 8vw, 32px)",
                    display: "flex",
                  }}
                >
                  mark_email_read
                </span>{" "}
                {/* Responsive font size */}
              </div>
              <div style={{ marginTop: "10px" }}>
                <Typography
                  variant="h6"
                  sx={{
                    marginBottom: 1,
                    fontWeight: "700",
                    fontSize: "clamp(32px, 8vw, 36px)",
                    fontFamily: '"Abel", sans-serif',
                  }}
                >
                  Email Us
                </Typography>
                <Typography
                  variant="body1"
                  sx={{
                    fontSize: "clamp(10px, 2vw, 15px)",
                    fontFamily: '"Libre Baskerville", serif',
                  }}
                >
                  contact@email.com
                </Typography>
              </div>
            </motion.div>
          </Grid>

          {/* Address */}
          <Grid item xs={12} md={4}>
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              style={{
                textAlign: "center",
                backgroundColor:
                  themeMode === themeModes.dark ? "rgb(11,11,11)" : "#a8b7ba",
                display: "flex", // Flex container
                flexDirection: "column", // Stack items vertically
                alignItems: "center", // Center vertically
                justifyContent: "center", // Center horizontally
                padding: "10px",
              }}
            >
              <div
                style={{
                  backgroundColor: "rgba(255, 255, 255, 0.2)", // Circular background
                  borderRadius: "50%", // Circular shape
                  padding: "10px", // Increased padding
                }}
              >
                <span
                  class="material-symbols-outlined"
                  style={{
                    fontSize: "clamp(16px, 8vw, 32px)",
                    display: "flex",
                  }}
                >
                  location_on
                </span>
              </div>
              <div style={{ marginTop: "10px" }}>
                <Typography
                  variant="h6"
                  sx={{
                    marginBottom: 1,
                    fontWeight: "700",
                    fontSize: "clamp(32px, 8vw, 36px)",
                    fontFamily: '"Abel", sans-serif',
                  }}
                >
                  Location
                </Typography>
                <Typography
                  variant="body1"
                  sx={{
                    fontSize: "clamp(10px, 2vw, 15px)",
                    fontFamily: '"Libre Baskerville", serif',
                  }}
                >
                  123 Street, City, Country
                </Typography>
              </div>
            </motion.div>
          </Grid>
        </Grid>
        <Typography
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            textAlign: "center",
            alignItems: {xs:"center", md:"flex-start"},
            fontSize: { sm: "1rem", md: "2rem", lg: "3rem" },
            width: { md: "100%" },
            lineHeight: { xs: "2rem", md: "3rem", lg: "4rem" },
            fontFamily: '"Noto Sans Hebrew", sans-serif',
          }}
          style={{ marginTop: "2rem" }}
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
          >
            <div>
              Interested in{" "}
              <span style={{ borderBottom: "3px solid " }}>
                Starting a project
              </span>
              ,
            </div>
            <div>
              <span style={{ borderBottom: "3px solid " }}>
                Joining the team
              </span>
              , or just saying Hi?
            </div>
            <div>We're excited to hear from you!</div>
          </motion.div>
        </Typography>
        <hr style={{ marginTop: "2rem" }} />
        <Grid
          container
          md={12}
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Grid
            item
            md={6}
            sx={{
              display: { xs: "none", md: "flex" },
            }}
            style={{
              justifyContent: "center",
              alignItems: "center",
              padding: "20px",
              marginTop: "2rem",
            }}
          >
            <motion.img
              ref={formRef}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              src={Contact}
              alt="Contact"
              style={{
                maxWidth: "100%",
                height: "auto",
                pointerEvents: "none",
              }}
            />{" "}
          </Grid>
          <Grid
            item
            xs={12}
            md={6}
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              padding: "20px",
              borderRadius: "20px",
              marginTop: "2rem",
            }}
          >
            <motion.form
              onSubmit={handleSubmit}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: 0.7 }}
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "flex-start",
              }}
            >
              {errorMessage && (
                <Typography
                  variant="body2"
                  color="error"
                  sx={{ mb: 1, fontFamily: '"Pacifico", cursive' }}
                >
                  {errorMessage}
                </Typography>
              )}
              <Typography
                style={{
                  fontFamily: '"Sulphur Point", sans-serif',
                }}
              >
                MESSAGE US
              </Typography>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  width: "100%",
                }}
              >
                <TextField
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                  placeholder="First Name"
                  variant="outlined"
                  required
                  style={{ width: "48%" }}
                  margin="normal"
                  sx={{
                    "& input": {
                      fontFamily: '"Anta", sans-serif',
                    },
                    "& input::placeholder": {
                      textTransform: "uppercase",
                      fontFamily: '"Economica", sans-serif',
                    },
                  }}
                />
                <TextField
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleChange}
                  placeholder="Last Name"
                  variant="outlined"
                  style={{ width: "48%" }}
                  required
                  margin="normal"
                  sx={{
                    "& input": {
                      fontFamily: '"Anta", sans-serif',
                    },
                    "& input::placeholder": {
                      textTransform: "uppercase",
                      fontFamily: '"Economica", sans-serif',
                    },
                  }}
                />
              </div>
              <TextField
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Organisation's Email"
                required
                variant="outlined"
                fullWidth
                margin="normal"
                sx={{
                  "& input": {
                    fontFamily: '"Anta", sans-serif',
                  },
                  "& input::placeholder": {
                    textTransform: "uppercase",
                    fontFamily: '"Economica", sans-serif',
                  },
                }}
              />
              <TextField
                name="topic"
                value={formData.topic}
                onChange={handleChange}
                placeholder="Topic"
                variant="outlined"
                required
                fullWidth
                margin="normal"
                sx={{
                  "& input": {
                    fontFamily: '"Anta", sans-serif',
                  },
                  "& input::placeholder": {
                    textTransform: "uppercase",
                    fontFamily: '"Economica", sans-serif',
                  },
                }}
              />
              <TextField
                name="question"
                value={formData.question}
                onChange={handleChange}
                placeholder="Question"
                variant="outlined"
                required
                multiline
                rows={4}
                fullWidth
                margin="normal"
                sx={{
                  "& textarea": {
                    // Target textarea instead of input
                    fontFamily: '"Anta", sans-serif',
                    resize: "both", // or 'horizontal', 'vertical', 'none'
                  },
                  "& textarea::placeholder": {
                    // Target textarea's placeholder
                    textTransform: "uppercase",
                    fontFamily: '"Economica", sans-serif',
                  },
                }}
              />

              <Button
                type="submit"
                variant="contained"
                color="primary"
                sx={{
                  mt: 1, // margin-top
                  borderRadius: 0, // remove border radius
                  padding: "10px 20px", // add padding
                  textTransform: "uppercase", // uppercase text
                  fontSize: "16px", // font size
                  fontFamily: '"Josefin Slab", serif',
                }}
              >
                Submit
              </Button>
            </motion.form>
          </Grid>
        </Grid>
      </div>
      <Snackbar
        open={openPopup}
        autoHideDuration={5000}
        onClose={handleClosePopup}
        message="Form submitted successfully!"
      />
    </div>
  );
};

export default ContactUsPage;
