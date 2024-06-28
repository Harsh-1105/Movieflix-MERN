import React from "react";
import { Avatar, Typography } from "@mui/material";

const UserAvatar = ({ name }) => {
  // Extract the first letter of the name
  const firstLetter = name ? name.substring(0,2).toUpperCase() : "";

  return (
    <div style={{ display: "flex"}}>
      <Avatar sx={{ bgcolor: "primary.main", width: 40, height: 40, marginLeft:1 }}>
        <Typography variant="body1" sx={{ color: "text.primary",fontFamily:'"Arvo", serif',fontSize:'1rem'}}>
          {firstLetter}
        </Typography>
      </Avatar>

    </div>
  );
};

export default UserAvatar;
