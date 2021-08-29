import styled, { keyframes } from "styled-components";
import PokeLogo from "../../static/img/pokelogo.png";
import logo from "../../static/img/pokelogobig.png";

const Scale = keyframes`
0% {transform: rotate(0);}
100% {transform: rotate(360deg);}
`;

export const ThemeChangeButton = styled.button`
  display: flex;
  align-items: flex-end;
  justify-content: center;
  margin: auto;
  padding: 0.5rem;
  width: 9rem;
  height: 8rem;
  border-radius: 30%;
  color: black;
  font-size: 1.3rem;
  text-align: center;
  -webkit-text-stroke: 1px white;
  background-color: ${(props) => props.theme.body};
  background-image: url(${(props) => props.theme.icon});
  background-size: 70% 80%;
  background-position: center;
  background-repeat: no-repeat;
  cursor: pointer;
  :hover {
    animation: ${Scale} 0.6s ease-in-out both;
  }
`;

export const ThemeChangeDiv = styled.div`
  display: grid;
  justify-items: center;
`;

export const HeaderDiv = styled.div`
  color: ${(props) => props.theme.fontColor};
  background: ${(props) => props.theme.backgroundColor};
  display: grid;
  grid-template-areas: "logo navbar user";
  grid-template-columns: 25% 50% 25%;
  justify-items: center;
  grid-area: header;
  border-bottom: ${(props) => props.theme.border.borderBottom};
  border-right: ${(props) => props.theme.border.borderRight};
  border-left: ${(props) => props.theme.border.borderLeft};
  border-radius: 0px 0px 50px 50px;

  box-shadow: rgba(0, 0, 0, 0.4) 0px 2px 4px,
    rgba(0, 0, 0, 0.3) 0px 7px 13px -3px, rgba(0, 0, 0, 0.2) 0px -3px 0px inset;
`;
export const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  grid-area: content;
  justify-content: center;
  align-items: center;
`;

export const H1 = styled.h1`
  color: ${(props) => props.theme.fontColor};
  text-shadow: ${(props) => props.theme.textShadow};
  -webkit-text-stroke: ${(props) => props.theme.stroke};
  font-size: 5rem;
`;

export const LogoImage = styled.div`
  filter: drop-shadow(3px 3px 0.3rem rgba(0, 0, 0, 0.95));
  grid-area: logo;
  content: "";
  background-image: url(${PokeLogo});
  background-size: contain;
  background-repeat: no-repeat;
  width: 90%;
  height: 100%;
  z-index: 10;
  margin: 0;
`;

export const LogoContainer = styled.div`
  width: 40vw;
  height: 60vh;
  background-color: ${(props) => props.theme.backgroundColor};
  background-image: url(${logo});
  background-size: contain;
  background-position: center;
  background-repeat: no-repeat;
  box-shadow: ${(props) => props.theme.boxShadow};
  border: ${(props) => props.theme.border.borderBottom};
  border-radius: 6rem;
`;

export const PokeBar = styled.div`
  grid-area: navbar;
  z-index: 10;
  width: 40vw;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const scaleUp = keyframes`
    0% {background-size: 130%;}
  100% {background-size: 100%;}
`;

export const OverlayDiv = styled.div`
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
