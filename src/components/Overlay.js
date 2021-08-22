import React from "react";
import styled, { keyframes } from "styled-components";

const Overlay = () => {
  return <OverlayDiv />;
};

const scaleUp = keyframes`
    0% {background-size: 130%;}
  100% {background-size: 100%;}
`;

const OverlayDiv = styled.div`
  background-image: url(${(props) => props.theme.shade});
  background-repeat: no-repeat;
  background-size: 100vw 100vh;
  background-position: center;
  pointer-events: none;
  position: absolute;
  width: 100vw;
  height: 100vh;
  opacity: 0.8;
  z-index: -1;
  animation: ${scaleUp} 20s alternate ease-in-out infinite; ;
`;

export default Overlay;
