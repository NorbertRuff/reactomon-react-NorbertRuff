import React from "react";
import Background from "../static/img/mainlogo.png";

const Logo = ({ alt }) => {
  return (
    <div className="logoContainer">
      <div id="pokelogo" style={logoStyle} alt={alt}></div>
    </div>
  );
};

Logo.defaultProps = {
  alt: "Pokemon logo",
};

const logoStyle = {
  marginTop: "50px",
  backgroundImage: `url(${Background})`,
  width: "60vw",
  height: "30vh",
  backgroundSize: "contain",
  backgroundRepeat: "no-repeat",
  backgroundPosition: "center",
};

export default Logo;
