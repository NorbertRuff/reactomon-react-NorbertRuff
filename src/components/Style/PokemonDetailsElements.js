import styled from "styled-components";

export const PokemonDetails = styled.div`
  grid-area: content;
  display: grid;
  grid-template-columns: 40% 60%;
  grid-template-rows: 10% 20% 30% 10% 10% 5%;
  gap: 10px;
  padding: 0 10px;
  justify-content: center;
  justify-items: center;
  align-items: center;
  grid-template-areas:
    "title title"
    "picture description"
    "picture stats"
    "picture type"
    "gallery ."
    "footer footer";
`;
export const Title = styled.h2`
  text-align: center;
  grid-area: title;
  font-size: 45px;
  background-color: ${(props) => props.theme.body};
  border-bottom: ${(props) => props.theme.border.borderBottom};
  border-radius: 0px 0px 30px 30px;
  width: 100%;
  color: white;
  z-index: 10;
  margin-bottom: 10px;
`;

export const Thumbnail = styled.img`
  width: 150px;
  height: 150px;
`;

export const Gallery = styled.div`
  display: flex;
  justify-content: space-between;
  grid-area: gallery;
`;

export const PokePicture = styled.div`
  grid-area: picture;
  color: ${(props) => props.theme.box};
  background-color: ${(props) => props.theme.box};
  box-shadow: rgba(0, 0, 0, 0.4) 0px 2px 4px,
    rgba(0, 0, 0, 0.3) 0px 7px 13px -3px, rgba(0, 0, 0, 0.2) 0px -3px 0px inset;
  border: 1px solid black;
  border-radius: 20px;
`;

export const Type = styled.div`
  font-size: 2rem;
  grid-area: type;
  width: 80%;
  display: flex;
  flex: 1;
  justify-content: space-evenly;
  gap: 10px;
  color: ${(props) => props.theme.fontColor};
  text-shadow: ${(props) => props.theme.textShadow};
  -webkit-text-stroke: ${(props) => props.theme.stroke};
`;
export const Description = styled.div`
  color: ${(props) => props.theme.body};
  text-shadow: ${(props) => props.theme.textShadow};
  -webkit-text-stroke: ${(props) => props.theme.stroke};
  grid-area: description;
  font-size: 4rem;
`;
export const Abilities = styled.div`
  font-size: 30px;
  color: lightblue;
  display: flex;
  gap: 20px;
  justify-content: space-around;
`;

export const Span = styled.span`
  color: ${(props) => props.theme.backgroundColor};
  text-shadow: ${(props) => props.theme.textShadow};
  -webkit-text-stroke: ${(props) => props.theme.stroke};
`;
