import styled from "styled-components";

export const H4 = styled.h4`
  text-align: Left;

  font-size: 2rem;
  color: white;
  text-shadow: ${(props) => props.theme.textShadow};
  -webkit-text-stroke: ${(props) => props.theme.stroke};
  z-index: 10;
`;

export const H3 = styled.h4`
  text-align: Left;
  font-size: 1.5rem;
  color: white;
  z-index: 10;
`;
export const Stats = styled.div`
  display: grid;
  grid-area: stats;
  align-items: center;
  grid-template-columns: 1fr 1fr;
  width: 100%;
  background-color: ${(props) => props.theme.box};
  box-shadow: rgba(0, 0, 0, 0.4) 0px 2px 4px,
    rgba(0, 0, 0, 0.3) 0px 7px 13px -3px, rgba(0, 0, 0, 0.2) 0px -3px 0px inset;
  border: 1px solid black;
  border-radius: 20px;
  font-size: 2rem;
  padding: 20px;
  margin: 10px;
  justify-content: space-around;
`;

export const Span = styled.span`
  color: ${(props) => props.theme.statsColor};
  text-shadow: ${(props) => props.theme.textShadow};
  -webkit-text-stroke: ${(props) => props.theme.stroke};
`;
