import React, { useState } from "react";
import { Typography, IconButton, Collapse, Paper } from "@mui/material";

const ExpandableQuestion = ({ question, children }) => {
  const [expanded, setExpanded] = useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <div style={{ textAlign: "center" }}>
      <Typography
        variant="h6"
        gutterBottom
        style={{ marginTop: "1rem" }}
      ></Typography>
      <Paper elevation={3} sx={{ p: 2 }}>
        <div style={{ display: "flex", alignItems: "center" }}>
          <Typography variant="body1" sx={{ flexGrow: 1 }}>
            <span
              style={{
                fontFamily: '"Space Mono", monospace',
                fontSize: "1rem",
              }}
            >
              {question}
            </span>
          </Typography>
          <IconButton
            aria-expanded={expanded}
            aria-label="show more"
            onClick={handleExpandClick}
          >
            <span class="material-symbols-outlined">add</span>{" "}
          </IconButton>
        </div>
        <Collapse in={expanded} timeout="auto" unmountOnExit>
          <Paper variant="outlined" sx={{ p: 2 }}>
            <Typography variant="body1" style={{fontFamily:'"Hedvig Letters Sans", sans-serif'}}>{children}</Typography>
          </Paper>
        </Collapse>
      </Paper>
    </div>
  );
};

export default ExpandableQuestion;
