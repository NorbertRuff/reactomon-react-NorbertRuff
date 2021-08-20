import React from "react";
import Background from "../static/img/mainlogo.png";

const Logo = () => {
  return (
    <div className="logoContainer">
      <img
        src={Background}
        size="100px"
        id="pokelogo"
        style={logoStyle}
        alt="pokelogo"
      ></img>
    </div>
  );
};

Logo.defaultProps = {
  alt: "Pokemon logo",
};

const logoStyle = {
  zIndex: 10,
  width: "40vw",
  height: "30vh",
  margin: "auto",
};

export default Logo;
