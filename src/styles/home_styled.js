import styled from "styled-components";

const HomeContainer = styled.div`
  border: 2px solid blue;
  background-color: black;
`;

const HomeInfo = styled.div`
  display: flex;
  justify-content: center;
`;

const MainImg = styled.img`
  width: 450px;
  padding-left: 30px;
  padding-right: 15px;
`;

const HomeHi = styled.div`
  align-items: center;
`;

const HomeHiFirst = styled.p`
  font-size: 20px;
`;

export { HomeContainer, HomeInfo, MainImg, HomeHi, HomeHiFirst };
