import { Box, Stack, Typography } from '@mui/material';
import React from 'react';

const Container = ({ header, children }) => {
  return (
    <Box sx={{
      marginTop: "5rem",
      marginX: "auto",
      color: "text.primary"
    }}>
      <Stack spacing={4}>
        {header && (
          <Box sx={{
            position: "relative",
            paddingX: { xs: "20px", md: 0 },
            maxWidth: "1366px",
            marginX: "auto",
            width: "100%",
            "&::before": {
              content: '""',
              position: "absolute",
              left: { xs: "20px", md: "0" },
              top: "100%",
              height: "8px",
              borderBottom:"1px solid orange",
              width: "100px",
              borderRadius:"20px",
              transition:'width 0.3s ease-in-out',
              backgroundColor: "primary.main"
            },



          }}>
            <Typography variant="h5" fontWeight="700" textTransform="uppercase" style={{fontFamily:'"Zen Dots", sans-serif'}}>
              {header}
            </Typography>
          </Box>
        )}
        {children}
      </Stack>
    </Box>
  );
};

export default Container;