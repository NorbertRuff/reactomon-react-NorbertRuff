import styled, { keyframes } from "styled-components";

export const PokeThumbnail = styled.div`
  background-image: url(${(props) => props.backgroundImage});
  background-size: contain;
  background-repeat: no-repeat;
  background-position: left;
  width: 14vw;
  height: 17vh;
`;

const Scale = keyframes`
0% {
  transform: rotateY(0);
}
50% {
  transform: rotateY(-180deg);
}
50% {
  transform: rotateY(-180deg);
}
}
`;

export const PokeCardDiv = styled.div`
  box-shadow: rgba(0, 0, 0, 0.4) 0px 2px 4px,
    rgba(0, 0, 0, 0.3) 0px 7px 13px -3px, rgba(0, 0, 0, 0.2) 0px -3px 0px inset;
  border: 10px;
  position: relative;
  :hover {
    animation: ${Scale} 0.6s ease-in-out both;
  }
`;

export const H4 = styled.h4`
  text-align: center;
  padding: 10px;
  text-transform: capitalize;
  font-size: 26px;
  color: ${(props) => props.theme.fontColor};
  text-shadow: ${(props) => props.theme.textShadow};
  -webkit-text-stroke: ${(props) => props.theme.stroke};
`;
export const PokeStyles = styled.div`
  text-align: right;
  text-transform: capitalize;
  position: absolute;
  width: 5rem;
  top: 0;
  left: 76%;
  font-size: 20px;
`;
