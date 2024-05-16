import styled from "styled-components";

const HobbyContainer = styled.div`
  margin: 0 auto;
  width: 60%;
`;

const HobbyListContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 15px;
`;

const HobbyListItem = styled.div``;

const HobbyListTitle = styled.div`
  box-sizing: border-box;
  display: inline-block;
  width: 250px;
  height: 250px;
  border-radius: 10px;
  border: 1px solid blue;
  text-align: center;
  align-items: center;
  line-height: 250px;
  color: black;
`;

const HobbyListDesc = styled.div``;

export {
  HobbyContainer,
  HobbyListContainer,
  HobbyListItem,
  HobbyListTitle,
  HobbyListDesc,
};
