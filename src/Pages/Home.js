import React from "react";
import {
  HomeContainer,
  HomeInfo,
  MainImg,
  HomeIntro,
  HomeIntroText,
  HomeIntroText2,
} from "../styles/home_styled";
const Home = () => {
  return (
    <HomeContainer>
      <HomeInfo>
        <MainImg src="./images/Main.jpg" alt="Main" />
        <HomeIntro>
          <HomeIntroText>
            안녕하세요. 프론트엔드 개발자 이규상입니다.
            <br /> 신입으로 경력은 없지만 HTML5, CSS3, Java Script, React 등의
            기술 스택을 보유하고 있습니다.
            <br /> 전공은 정보통신.전자공학과로 대학에서 전공 지식을 쌓았습니다.
            <br />
            2021학년도 3학년 때, HTML과 CSS를 처음 접하여서 공부하기 시작하였고,
            <br />
            자연스럽게 Java Script를 공부하였습니다.
            <br /> 그 후, React를 접하여 현재 포트폴리오를 만들고 있습니다.
          </HomeIntroText>
          <HomeIntroText2>
            대학교 재학 중, 다양한 학과 학생회, 단과대학 학생회 등 다양한 학생회
            활동을 하였고,
            <br />
            막내부터 리더까지 다양한 역할을 해본 경험을 바탕으로 신속하고
            <br />
            열정적으로 업무에 임하며 항상 새로운 것을 배우려는 자세를 가지고
            있습니다.
            <br />
            이러한 것이 동료들과 협업을 하는 팀 프로젝트를 할 때 도움이 되는 큰
            경험이라고 생각합니다.
          </HomeIntroText2>
        </HomeIntro>
      </HomeInfo>
    </HomeContainer>
  );
};

export default Home;
