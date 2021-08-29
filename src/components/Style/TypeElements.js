import styled from "styled-components";

export const TypeCardContainer = styled.div`
  grid-area: maincontent;
  display: flex;
  flex: 1;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 10px;
  width: 90%;
  margin: auto;
`;

export const Badges = styled.div`
  background-repeat: no-repeat;
  background-position: center;
  background-size: contain;
  width: inherit;
  height: 70%;
  margin: auto;
`;

export const ItemContainer = styled.div`
  display: grid;
  grid-template-rows: 1fr 1fr;
  justify-content: center;
  align-items: center;
  box-shadow: rgba(0, 0, 0, 0.4) 0px 2px 4px,
    rgba(0, 0, 0, 0.3) 0px 7px 13px -3px, rgba(0, 0, 0, 0.2) 0px -3px 0px inset;
  text-align: center;
  color: black;
  font-size: 20px;
  background-color: rgba(0, 0, 0, 0.4);
  border: 1px solid black;
  border-radius: 20px;
  width: 15vw;
  height: 150px;
`;

export const ItemThumbnail = styled.div`
  background-image: url(${(props) => props.picture});
  background-position: center;
  background-size: contain;
  background-repeat: no-repeat;
  width: 100%;
  height: 100%;
`;

export const H4 = styled.div`
  color: ${(props) => props.theme.backgroundColor};
  text-shadow: ${(props) => props.theme.textShadow};
  -webkit-text-stroke: ${(props) => props.theme.stroke};
  box-shadow: rgba(0, 0, 0, 0.4) 0px 2px 4px,
    rgba(0, 0, 0, 0.3) 0px 7px 13px -3px, rgba(0, 0, 0, 0.2) 0px -3px 0px inset;
  text-align: center;
  padding: 0 10px;
  margin: auto;
  text-transform: capitalize;
  font-size: 26px;
`;

export const PokeTypeCard = styled.div`
  box-shadow: rgba(0, 0, 0, 0.4) 0px 2px 4px,
    rgba(0, 0, 0, 0.3) 0px 7px 13px -3px, rgba(0, 0, 0, 0.2) 0px -3px 0px inset;
  text-align: center;
  justify-content: center;
  margin: auto;
  color: black;
  font-size: 20px;
  background-color: rgba(0, 0, 0, 0.4);
  border: 1px solid black;
  border-radius: 20px;
  width: 150px;
  height: 150px;
`;
