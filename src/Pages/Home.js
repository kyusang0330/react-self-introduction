import React from "react";
import {
  HomeContainer,
  HomeInfo,
  MainImg,
  HomeIntro,
  HomeIntroText,
} from "../styles/home_styled";
const Home = () => {
  return (
    <HomeContainer>
      <HomeInfo>
        <MainImg src="/images/Main.jpg" alt="증명사진" />
        <HomeIntro>
          <HomeIntroText>
            안녕하세요. 프론트엔드 개발자 이규상입니다.
            <br /> 신입으로 경력은 없지만 HTML5, CSS3, Java Script, React 등의
            기술 스택을 보유하고 있습니다.
            <br /> 전공은 정보통신.전자공학과로 대학에서 전공 지식을 쌓았습니다.
            <br />
            2021학년도 3학년 때, HTML과 CSS를 처음 접하여서 공부하기 시작하였고,
            자연스럽게 Java Script를 공부하였습니다.
            <br /> 그 후, React를 접하여 현재 포트폴리오를 만들고 있습니다.
          </HomeIntroText>
        </HomeIntro>
      </HomeInfo>
    </HomeContainer>
  );
};

export default Home;
