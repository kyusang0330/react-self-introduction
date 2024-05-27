import styled from "styled-components";

const HobbyContainer = styled.div`
  margin: 0 0 0 15px;
  width: 80%;
`;

const HobbyListContainer = styled.div`
  display: block;
  flex-direction: row;
`;

const HobbyListItem = styled.div`
  display: flex;
  border: 1px solid black;
  box-sizing: border-box;
  border-radius: 10px;
  text-align: center;
  align-items: center;
  gap: 15px;
`;

const HobbyListImg = styled.img`
  width: 40%;
  height: 250px;
  border-radius: 10px;
  border-right: 1px solid black;
`;

const HobbyListContent = styled.div`
  width: 100%;
`;

const HobbyListTitle = styled.div`
  color: black;
  text-align: start;
`;

const HobbyListDesc = styled.div``;

export {
  HobbyContainer,
  HobbyListContainer,
  HobbyListItem,
  HobbyListTitle,
  HobbyListDesc,
  HobbyListImg,
  HobbyListContent,
};
