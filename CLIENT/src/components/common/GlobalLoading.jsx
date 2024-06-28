import { useSelector } from "react-redux";
import { Paper, Box, LinearProgress, Toolbar } from "@mui/material";
import { useEffect, useState } from "react";
import * as React from "react";
import LoadingLogo from "./LoadingLogo";

const GlobalLoading = () => {
  const { globalLoading } = useSelector((state) => state.globalLoading);

  const [isLoading, setIsLoading] = useState(false);
  const [progress, setProgress] = React.useState(0);
  const [buffer, setBuffer] = React.useState(10);
  const progressRef = React.useRef(() => {});

  useEffect(() => {
    if (globalLoading) {
      setIsLoading(true);
      const diff = Math.random() * 10;
      setProgress(diff)
      setBuffer(diff+10);
    } else {
      setTimeout(() => {
        setIsLoading(false);
      }, 500);
    }
  }, [globalLoading]);

  React.useEffect(() => {
    progressRef.current = () => {
      if (progress > 100) {
        setProgress(0);
        setBuffer(10);
      } else {
        const diff = Math.random() * 10;
        const diff2 = Math.random() * 10;
        setProgress(progress + diff);
        setBuffer(progress + diff + diff2);
      }
    };
  });

  React.useEffect(() => {
    const timer = setInterval(() => {
      progressRef.current();
    }, 500);

    return () => {
      clearInterval(timer);
    };
  }, []);
  return (
    <>
      <Paper
        sx={{
          opacity: isLoading ? 1 : 0,
          pointerEvents: "none",
          transition: "all .3s ease",
          position: "fixed",
          width: "100vw",
          height: "120vh",
          zIndex: 999,
        }}
      >
        <Toolbar />
        <LinearProgress
          variant="buffer"
          value={progress}
          valueBuffer={buffer}
          style={{ marginTop: '2rem' }}
        />

        <Box
          sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
          }}
        >
          <LoadingLogo />
        </Box>
      </Paper>
    </>
  );
};

export default GlobalLoading;
