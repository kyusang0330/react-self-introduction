import React from "react";
import styled from "styled-components";

const Home = () => {
  return (
    <HomeContainer>
      <HomeInfo>
        <MainImg src="/images/Main.jpg" alt="증명사진" />
        <HomeHi>
          <HomeHiFirst>안녕하세요. ------ 이규상입니다!</HomeHiFirst>
        </HomeHi>
      </HomeInfo>
    </HomeContainer>
  );
};

export default Home;

const HomeContainer = styled.div``;

const HomeInfo = styled.div`
  display: flex;
  padding-bottom: 10px;
`;

const MainImg = styled.img`
  width: 300px;
  padding-left: 30px;
  padding-right: 15px;
`;

const HomeHi = styled.div`
  align-items: center;
`;

const HomeHiFirst = styled.p`
  font-size: 20px;
`;
