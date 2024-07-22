import styled from "styled-components";

const HobbyContainer = styled.div`
  margin: 0 0 0 15px;
  width: 80%;
`;

const HobbyListContainer = styled.div``;

const HobbyListItem = styled.div`
  display: flex;
  border: 1px solid white;
  box-sizing: border-box;
  border-radius: 10px;
  text-align: center;
  align-items: center;
  gap: 20px;
`;

const HobbyListImg = styled.img`
  width: 40%;
  height: 250px;
  border-radius: 10px;
  border-right: 2px solid white;
`;

const HobbyListContent = styled.div`
  width: 100%;
  height: 100%;
`;

const HobbyListTitle = styled.div`
  border: 1px solid red;
  text-align: start;
  font-weight: bolder;
  font-size: 30px;
`;

const HobbyListDesc = styled.div`
  border: 1px solid blue;
`;

export {
  HobbyContainer,
  HobbyListContainer,
  HobbyListItem,
  HobbyListTitle,
  HobbyListDesc,
  HobbyListImg,
  HobbyListContent,
};
