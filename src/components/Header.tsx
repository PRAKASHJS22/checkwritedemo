import React, { useEffect, useState } from "react";
import moment from "moment";
import { colors } from "../constants/colors";

function getWindowDimensions() {
  const { innerWidth: width, innerHeight: height } = window;
  return {
    width,
    height,
  };
}
function useWindowDimensions() {
  const [windowDimensions, setWindowDimensions] = useState(
    getWindowDimensions()
  );

  useEffect(() => {
    function handleResize() {
      setWindowDimensions(getWindowDimensions());
    }

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return windowDimensions;
}

const Header = () => {
  const date = moment().subtract(10, "days").calendar();
  const time = moment().format(" hh:mm:ss a");
  return (
    <div
      style={{
        backgroundColor: colors.primary,
        display: "flex",
        justifyContent: "space-between",
        // width:'100%',
        // height:'40'
      }}
      // className="container-fluid"
    >
      {/* <nav style={{ backgroundColor: colors.primary }} className="navbar-nav"> */}

      <img src="/src/assets/logo .png" alt="Logo" width="10%" height="60vh" />

      <div
        style={{
          alignContent: "center",
          alignItems: "center",
          justifyContent: "center",
          alignSelf: "center",
        }}
      >
        <span
          style={{
            color: colors.white,
            position: "relative",
            left: "5vw",

            // top: "1vh",
            fontFamily: "sans-serif",
            fontWeight: "600",
            fontSize: "2vh",
          }}
        >
          CALPERS
        </span>
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          gap: 11,
          marginBottom: 10,
        }}
      >
        <span
          className="date-time"
          style={{
            color: "#fff",
            position: "relative",
            // top: "0vh",
       

            fontFamily: "sans-serif",
            fontWeight: "500",
            fontSize: "1rem",
          }}
        >
          Date: {date}
        </span>

        <span
          // className="date-time"
          style={{
            alignItems: "center",
            // right: "10vw",
            color: "#fff",
            position: "relative",
            top: "2vh",
            right: "7.5vw",
            fontFamily: "sans-serif",
            fontWeight: "500",
            fontSize: "1rem",
          }}
        >
          Time: {time}
        </span>
      </div>
    </div>
  );
};

export default Header;
