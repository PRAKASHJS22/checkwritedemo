import { useEffect, useState } from "react";
// import moment from "moment";

import { styles } from "./styles";
const Headers = () => {
  const [date, setDate] = useState(new Date());
  //   let date = moment().subtract(10, "days").calendar();

  //   let time = moment().format("H:mm:ss");

  useEffect(() => {
    let timer = setInterval(() => setDate(new Date()), 1000);
    return () => {
      clearInterval(timer);
    };
  }, []);

  return (
    <div className="container-fluid" style={styles.container}>
      <div>
        <img
          src="src/assets/ElevanceHealthLogo.png"
          className="img-fluid"
          style={{ width: "6vw", height: "6vh" }}
        />
      </div>
      <h1 style={styles.calpersTitle} className="text-center">
        Calpers
      </h1>
      <div
        style={{
          flexDirection: "column",
          display: "flex",
          marginTop: "4%",
          marginBottom: "4%",
        }}
      >
        <span style={styles.dateandtime}>
          Date: {date.toLocaleDateString()}
        </span>
        <span style={styles.dateandtime}>
          Time: {date.toLocaleTimeString()}
        </span>
      </div>
    </div>
  );
};

export default Headers;
