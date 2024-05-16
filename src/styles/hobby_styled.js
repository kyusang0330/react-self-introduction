import styled from "styled-components";

const HobbyContainer = styled.div`
  margin: 0 auto;
  width: 80%;
`;

const HobbyListContainer = styled.div`
  display: block;
  flex-direction: row;
  gap: 15px;
`;

const HobbyListItem = styled.div`
  display: flex;
  border: 1px solid blue;
  box-sizing: border-box;
  border-radius: 10px;
  text-align: center;
  align-items: center;
`;

const HobbyListImg = styled.img`
  width: 40%;
  height: 250px;
`;

const HobbyListContent = styled.div`
  width: 100%;
`;

const HobbyListTitle = styled.div`
  color: black;
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
