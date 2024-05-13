import React from "react";
import styled from "styled-components";

const Home = () => {
  return (
    <HomeContainer>
      <HomeInfo>
        <MainImg src="/images/Main.jpg" alt="증명사진" />
        <HomeHi>
          <HomeHiFirst>Front-End Devloper Lee Kyu Sang</HomeHiFirst>
        </HomeHi>
      </HomeInfo>
    </HomeContainer>
  );
};

export default Home;

const HomeContainer = styled.div``;

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
