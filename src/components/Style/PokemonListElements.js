import styled from "styled-components";

export const PageNav = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const NavButton = styled.button`
  background-image: url(${(props) => props.backgroundImage}),
    linear-gradient(#63b8ee, #468ccf);
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
  width: 100px;
  height: 100px;
  border: 2px solid #3866a3;
  color: #14396a;
  border-radius: 20px;
  box-shadow: inset 0px 1px 0px 0px #bee2f9;
  text-shadow: inset 0px 1px 0px #7cacde;
  :hover {
    background-image: url(${(props) => props.backgroundImage}),
      linear-gradient(#468ccf, #63b8ee);
  }
`;

export const MainContainer = styled.div`
  display: grid;
  grid-template-columns: 5% 90% 5%;
  grid-area: content;
  justify-content: center;
`;

export const CardContainer = styled.div`
  display: flex;
  flex: 1;
  gap: 5px;
  justify-content: space-around;
  flex-wrap: wrap;
`;
