import styled from "styled-components";

const HobbyContainer = styled.div`
  margin: 0 0 0 15px;
  width: 80%;
`;

const HobbyListContainer = styled.div``;

const HobbyListItem = styled.div`
  display: flex;
  height: 250px;
  border: 1px solid white;
  box-sizing: border-box;
  border-radius: 10px;
  text-align: center;
  align-items: center;
  gap: 20px;
  margin-bottom: 20px;
`;

const HobbyListImg = styled.img`
  width: 40%;
  height: 100%;
  border-radius: 10px;
  border-right: 2px solid white;
`;

const HobbyListContent = styled.div`
  display: inline-flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  height: 100%;
  gap: 10px;
`;

const HobbyListTitle = styled.div`
  text-align: start;
  font-weight: bolder;
  font-size: 30px;
`;

const HobbyListDesc = styled.div`
  text-align: start;
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
