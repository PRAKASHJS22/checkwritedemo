const Footer = () => {
  return (
    <div>
      <footer
        style={{
          backgroundColor: "tomato",
          position: "absolute",
          width: "100%",
          bottom: 0,
          height: "50px",
          textAlign: "center",
          color: "white",
        }}
      >
        <span
          style={{
            textAlign: "center",
            paddingTop: "10px",
            fontSize: "30px",
            marginTop: "10px",
          }}
        >
          All rights reserved 2023
        </span>
      </footer>
    </div>
  );
};

export default Footer;
