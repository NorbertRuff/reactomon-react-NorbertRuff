import React from "react";
import styled, { keyframes } from "styled-components";
import shade from "../static/img/shade3.png";

const Overlay = () => {
  return <OverlayDiv />;
};

const scaleUp = keyframes`
    0% {background-size: 130%;}
  100% {background-size: 100%;}
`;

const OverlayDiv = styled.div`
  background-image: url(${shade});
  background-repeat: no-repeat;
  background-size: 100vw 100vh;
  background-position: center;
  pointer-events: none;
  position: absolute;
  width: 100%;
  height: 100%;
  opacity: 0.45;
  z-index: 10;
  animation: ${scaleUp} 20s alternate ease-in-out infinite;
`;

export default Overlay;
