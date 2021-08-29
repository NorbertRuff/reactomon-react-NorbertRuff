import styled from "styled-components";

export const AbilityCardContainer = styled.div`
  grid-area: content;
  display: flex;
  flex: 1;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 5px;
  width: 90%;
  margin: auto;
`;

export const H4 = styled.div`
  color: ${(props) => props.theme.fontColor};
  text-align: center;
  margin: auto;
  text-transform: capitalize;
  font-size: 26px;
`;

export const H3 = styled.div`
  text-align: center;
  padding: 0 10px;
  margin: auto;
  text-transform: capitalize;
  font-size: 20px;
  color: ${(props) => props.theme.box};
  text-shadow: none;
  -webkit-text-stroke: none;
`;

export const PokeAbilityCard = styled.div`
  display: flex;
  justify-content: center;
  align-items: start;
  flex-direction: column;

  background-color: ${(props) => props.theme.textColor};

  box-shadow: rgba(0, 0, 0, 0.4) 0px 2px 4px,
    rgba(0, 0, 0, 0.3) 0px 7px 13px -3px, rgba(0, 0, 0, 0.2) 0px -3px 0px inset;
  border: 1px solid black;
  text-align: center;
  margin: auto;
  color: ${(props) => props.theme.box};

  border-radius: 20px;
  width: 290px;
  height: 240px;
  overflow: hidden;
`;
