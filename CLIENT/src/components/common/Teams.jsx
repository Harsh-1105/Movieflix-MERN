import React from "react";
import {
  Grid,
  Typography,
  Avatar,
  Paper,
  Stack,
  useTheme,
} from "@mui/material";
import FAQPage from "./FAQPage";
import Container from "./Container";
import Group from "./group_leader.webp";
import Banner from "./head.png";
import { motion } from "framer-motion";

const handleClick = (e) => {
  e.preventDefault();
};
function stringToColor(string) {
  let hash = 0;
  let i;

  /* eslint-disable no-bitwise */
  for (i = 0; i < string.length; i += 1) {
    hash = string.charCodeAt(i) + ((hash << 5) - hash);
  }

  let color = "#";

  for (i = 0; i < 3; i += 1) {
    const value = (hash >> (i * 8)) & 0xff;
    color += `00${value.toString(16)}`.slice(-2);
  }
  /* eslint-enable no-bitwise */

  return color;
}

function stringAvatar(name) {
  return {
    sx: {
      bgcolor: stringToColor(name),
    },
    children: `${name.split(" ")[0][0]}${name.split(" ")[1][0]}`,
  };
}

const Teams = () => {
  const theme = useTheme();

  return (
    <div
      style={{
        textAlign: "center",
        paddingTop: "5rem",
        width: "90%",
        margin: "0 auto",
      }}
    >
      <Typography gutterBottom sx={{ textAlign: "center" }}>
        <div onClick={handleClick} style={{ position: "relative" }}>
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
                color: "#f5a073",
                fontFamily: '"DynaPuff", system-ui',
              }}
            >
              Movie
              <span style={{ color: theme.palette.primary.main }}>Flix</span>
            </div>
            <div
              style={{
                fontFamily: '"Reem Kufi Fun", sans-serif',
                borderRadius: "10px",
                fontSize: "clamp(.5rem, 2vw, 1rem)", // Responsive font size for large screens
                width: "100%",
                color: "white",
                padding: { xs: 0, md: "20px" }, // Responsive padding
              }}
            >
              "Unleash the Magic of Cinema, Anytime, Anywhere!"
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
      </Typography>
      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
      >
        <Stack spacing={4} alignItems="center">
          <Grid container spacing={2} justifyContent="center">
            <Grid
              item
              xs={12}
              md={6}
              lg={4}
              style={{
                position: "relative",
              }}
            >
              <img
                src={Group}
                alt="Group"
                style={{
                  position: "absolute",
                  top: "10px",
                  right: "0px",
                  margin: "10px",
                  width: "50px",
                  height: "50px",
                  borderRadius: "50%",
                  pointerEvents: "none",
                }}
              />
              <Paper elevation={3} sx={{ p: 1 }}>
                {/* Grid content for team member 1 */}
                <Avatar
                  {...stringAvatar("Saksham Sharma")}
                  style={{
                    fontFamily: '"Anta", sans-serif',
                  }}
                />
                <div
                  style={{
                    display: "flex",
                    alignContent: "center",
                    alignItems: "center",
                    justifyContent: "center",
                    textAlign: "center",
                    gap: "10px",
                  }}
                >
                  <span class="material-symbols-outlined">id_card</span>
                  <Typography
                    variant="h5"
                    style={{
                      fontFamily: '"Delius Swash Caps", cursive',
                    }}
                  >
                    Saksham Sharma
                  </Typography>
                </div>

                <Typography
                  variant="body1"
                  sx={{ p: 2 }}
                  style={{
                    fontSize: "1.5rem",
                    fontFamily: '"Nerko One", cursive',
                  }}
                >
                  Role: Frontend
                </Typography>
                {/* Add more info about team member 1 */}
                <Grid
                  container
                  sx={{ p: 2 }}
                  style={{
                    fontFamily: '"Aldrich", sans-serif',
                  }}
                >
                  {/* Additional items for team member 1 */}
                  <div
                    style={{
                      display: "flex",
                      width: "100%",
                      justifyContent: "space-between",
                      gap: "10px",
                    }}
                  >
                    <div
                      style={{
                        padding: "10px",
                        backgroundColor: "rgba(192, 192, 192, 0.2)",
                        textAlign: "center",
                        flex: 1,
                        borderRadius: "10px",
                        display: "flex",
                        alignContent: "center",
                        alignItems: "center",
                        justifyContent: "center",
                        gap: "5px",
                      }}
                    >
                      <span class="material-symbols-outlined">
                        alternate_email
                      </span>{" "}
                      2010992072
                    </div>
                    <div
                      style={{
                        padding: "10px",
                        backgroundColor: "rgba(192, 192, 192, 0.2)",
                        textAlign: "center",
                        flex: 1,
                        borderRadius: "10px",
                        display: "flex",
                        alignContent: "center",
                        alignItems: "center",
                        justifyContent: "center",
                        gap: "5px",
                      }}
                    >
                      <span class="material-symbols-outlined">tag</span>
                      BE-CSE
                    </div>
                  </div>
                </Grid>
                <Grid
                  style={{
                    fontFamily: '"Aldrich", sans-serif',
                    textAlign: "center",
                    overflow: "hidden", // Adjust overflow property
                  }}
                >
                  <div
                    style={{
                      padding: "8px",
                      backgroundColor: "rgba(192, 192, 192, 0.2)",
                      borderRadius: "10px",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      gap: "5px",
                      fontSize: `clamp(14px, 2vw, 18px)`,
                      maxWidth: "100%", // Adjust max-width if necessary
                    }}
                  >
                    <span class="material-symbols-outlined">mail</span>
                    <div>saksham2072.be20@chitkara.edu.in</div>
                  </div>
                </Grid>
              </Paper>
            </Grid>
            <Grid item xs={12} md={6} lg={4} style={{
              backgroundImage:'url'
            }}>
              <Paper elevation={3} sx={{ p: 1 }}>
                {/* Grid content for team member 2 */}
                <Avatar
                  {...stringAvatar("Harsh Kumar Sharma")}
                  style={{
                    fontFamily: '"Anta", sans-serif',
                  }}
                />
                <div
                  style={{
                    display: "flex",
                    alignContent: "center",
                    alignItems: "center",
                    justifyContent: "center",
                    textAlign: "center",
                    gap: "10px",
                  }}
                >
                  <span class="material-symbols-outlined">id_card</span>
                  <Typography
                    variant="h5"
                    style={{
                      fontFamily: '"Delius Swash Caps", cursive',
                    }}
                  >
                    Harsh Kumar Sharma
                  </Typography>
                </div>

                <Typography
                  variant="body1"
                  sx={{ p: 2 }}
                  style={{
                    fontSize: "1.5rem",
                    fontFamily: '"Nerko One", cursive',
                  }}
                >
                  Role: Frontend
                </Typography>
                {/* Add more info about team member 2 */}
                <Grid
                  container
                  sx={{ p: 2 }}
                  style={{
                    fontFamily: '"Aldrich", sans-serif',
                  }}
                >
                  {/* Additional items for team member 1 */}
                  <div
                    style={{
                      display: "flex",
                      width: "100%",
                      justifyContent: "space-between",
                      gap: "10px",
                    }}
                  >
                    <div
                      style={{
                        padding: "10px",
                        backgroundColor: "rgba(192, 192, 192, 0.2)",
                        textAlign: "center",
                        flex: 1,
                        borderRadius: "10px",
                        display: "flex",
                        alignContent: "center",
                        alignItems: "center",
                        justifyContent: "center",
                        gap: "5px",
                      }}
                    >
                      <span class="material-symbols-outlined">
                        alternate_email
                      </span>
                      2010991879
                    </div>
                    <div
                      style={{
                        padding: "10px",
                        backgroundColor: "rgba(192, 192, 192, 0.2)",
                        textAlign: "center",
                        flex: 1,
                        borderRadius: "10px",
                        display: "flex",
                        alignContent: "center",
                        alignItems: "center",
                        justifyContent: "center",
                        gap: "5px",
                      }}
                    >
                      <span class="material-symbols-outlined">tag</span>
                      BE-CSE
                    </div>
                  </div>
                </Grid>
                <Grid
                  style={{
                    fontFamily: '"Aldrich", sans-serif',
                    textAlign: "center",
                    overflow: "hidden", // Adjust overflow property
                  }}
                >
                  <div
                    style={{
                      padding: "8px",
                      backgroundColor: "rgba(192, 192, 192, 0.2)",
                      borderRadius: "10px",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      gap: "5px",
                      fontSize: `clamp(14px, 2vw, 18px)`,
                      maxWidth: "100%", // Adjust max-width if necessary
                    }}
                  >
                    <span class="material-symbols-outlined">mail</span>
                    <div>harsh1879.be20@chitkara.edu.in</div>
                  </div>
                </Grid>
              </Paper>
            </Grid>
            <Grid item xs={12} md={6} lg={4}>
              <Paper elevation={3} sx={{ p: 1 }}>
                <Avatar
                  {...stringAvatar("Akarsh Gupta")}
                  style={{
                    fontFamily: '"Anta", sans-serif',
                  }}
                />
                <div
                  style={{
                    display: "flex",
                    alignContent: "center",
                    alignItems: "center",
                    justifyContent: "center",
                    textAlign: "center",
                    gap: "10px",
                  }}
                >
                  <span class="material-symbols-outlined">id_card</span>
                  <Typography
                    variant="h5"
                    style={{
                      fontFamily: '"Delius Swash Caps", cursive',
                    }}
                  >
                    Akarsh Gupta
                  </Typography>
                </div>
                <Typography
                  variant="body1"
                  sx={{ p: 2 }}
                  style={{
                    fontSize: "1.5rem",
                    fontFamily: '"Nerko One", cursive',
                  }}
                >
                  Role: Backend
                </Typography>
                <Grid
                  container
                  sx={{ p: 2 }}
                  style={{
                    fontFamily: '"Aldrich", sans-serif',
                  }}
                >
                  {/* Additional items for team member 1 */}
                  <div
                    style={{
                      display: "flex",
                      width: "100%",
                      justifyContent: "space-between",
                      gap: "10px",
                    }}
                  >
                    <div
                      style={{
                        padding: "10px",
                        backgroundColor: "rgba(192, 192, 192, 0.2)",
                        textAlign: "center",
                        flex: 1,
                        borderRadius: "10px",
                        display: "flex",
                        alignContent: "center",
                        alignItems: "center",
                        justifyContent: "center",
                        gap: "5px",
                      }}
                    >
                      <span class="material-symbols-outlined">
                        alternate_email
                      </span>
                      2010991803
                    </div>
                    <div
                      style={{
                        padding: "10px",
                        backgroundColor: "rgba(192, 192, 192, 0.2)",
                        textAlign: "center",
                        flex: 1,
                        borderRadius: "10px",
                        display: "flex",
                        alignContent: "center",
                        alignItems: "center",
                        justifyContent: "center",
                        gap: "5px",
                      }}
                    >
                      <span class="material-symbols-outlined">tag</span>
                      BE-CSE
                    </div>
                  </div>
                </Grid>
                <Grid
                  style={{
                    fontFamily: '"Aldrich", sans-serif',
                    textAlign: "center",
                    overflow: "hidden", // Adjust overflow property
                  }}
                >
                  <div
                    style={{
                      padding: "8px",
                      backgroundColor: "rgba(192, 192, 192, 0.2)",
                      borderRadius: "10px",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      gap: "5px",
                      fontSize: `clamp(14px, 2vw, 18px)`,
                      maxWidth: "100%", // Adjust max-width if necessary
                    }}
                  >
                    <span class="material-symbols-outlined">mail</span>
                    <div>akarsh1803.be20@chitkara.edu.in</div>
                  </div>
                </Grid>
              </Paper>
            </Grid>
          </Grid>
        </Stack>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 1 }}
      >
        <Container>
          <FAQPage />
        </Container>
      </motion.div>
    </div>
  );
};

export default Teams;
