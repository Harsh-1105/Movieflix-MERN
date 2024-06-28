import React from "react";
import {
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Menu,
  Typography,
} from "@mui/material";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import menuConfigs from "../../configs/menu.configs";
import { setUser } from "../../redux/features/userSlice";
import UserAvatar from "./UserAvatar";

const UserMenu = () => {
  const { user } = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const [anchorEl, setAnchorEl] = useState(null);

  const toggleMenu = (e) => setAnchorEl(e.currentTarget);

  return (
    <>
      {user && (
        <>
          <Typography
            onClick={toggleMenu}
            sx={{ cursor: "pointer", userSelect: "none" }}
          >
            <UserAvatar name={user.displayName} />
          </Typography>
          <Menu
            open={Boolean(anchorEl)}
            anchorEl={anchorEl}
            onClose={() => setAnchorEl(null)}
            PaperProps={{ sx: { padding: "0px" } }}
          >
            <Typography
              variant="h6"
              style={{
                fontFamily: '"Maven Pro", sans-serif',
                letterSpacing: ".2rem",
              }}
              sx={{
                textAlign: "center",
                alignItems: "center",
                userSelect: "none",
                borderBottom: "1px solid gray",
                padding: "10px 0",
              }}
            >
              {user.displayName}
            </Typography>
            {menuConfigs.user.map((item, index) => (
              <ListItemButton
                component={Link}
                to={item.path}
                key={index}
                onClick={() => setAnchorEl(null)}
              >
                <ListItemIcon>{item.icon}</ListItemIcon>
                <ListItemText
                  disableTypography
                  primary={
                    <Typography
                      textTransform="uppercase"
                      style={{
                        fontFamily: '"Turret Road", sans-serif',
                        letterSpacing: ".1rem",
                      }}
                    >
                      {item.display}
                    </Typography>
                  }
                />
              </ListItemButton>
            ))}
            <ListItemButton
              sx={{ borderRadius: "10px" }}
              onClick={() => dispatch(setUser(null))}
            >
              <ListItemIcon>
                <span class="material-symbols-outlined">logout</span>{" "}
              </ListItemIcon>
              <ListItemText
                disableTypography
                primary={
                  <Typography
                    textTransform="uppercase"
                    style={{ fontFamily: '"Turret Road", sans-serif' }}
                  >
                    sign out
                  </Typography>
                }
              />
            </ListItemButton>
          </Menu>
        </>
      )}
    </>
  );
};

export default UserMenu;
