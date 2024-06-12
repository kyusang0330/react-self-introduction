import styled from "styled-components";

const HomeContainer = styled.div`
  border: 1px solid blue;
`;

const HomeInfo = styled.div`
  display: flex;
  justify-content: center;
  border: 1px solid red;
  height: 600px;
`;

const MainImg = styled.img`
  width: 450px;
  height: 550px;
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
