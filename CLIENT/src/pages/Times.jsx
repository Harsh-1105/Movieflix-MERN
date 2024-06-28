import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { themeModes } from "../../src/configs/theme.configs";
const DateTimeDisplay = () => {
  const [dateTime, setDateTime] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setDateTime(new Date());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const formatDate = (date) => {
    const options = {
      weekday: "short",
      day: "2-digit",
      month: "short",
      year: "numeric",
    };
    return new Intl.DateTimeFormat("en-US", options)
      .format(date)
      .replace(/,/g, ""); // Remove commas
  };

  const formatTime = (date) => {
    const options = {
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
      hour12: false, // 24-hour format
    };
    return new Intl.DateTimeFormat("en-US", options).format(date);
  };
  const { themeMode } = useSelector((state) => state.themeMode);

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        fontFamily: '"Lexend Giga", sans-serif',
        padding: "10px",
        textShadow:
          themeMode === themeModes.dark
            ? "0 0 10px #00ffff"
            : "0 0 10px #b5f7f7",
      }}
    >
      <div style={{ textAlign: "center" }}>
        <div>
          <div style={{ fontSize: `clamp(1rem, 3vw, 1rem)` }}>
            {formatDate(dateTime)}
          </div>
        </div>
        <div style={{ fontSize: `clamp(2rem, 6vw, 3rem)`,letterSpacing:'.5rem' }}>
          {formatTime(dateTime)}
        </div>
      </div>
    </div>
  );
};

export default DateTimeDisplay;
