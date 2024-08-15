import React from "react";
import Main from "../assets/images/Main.jpg";
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
        <MainImg src={Main} alt="Main" />
        <HomeIntro>
          <HomeIntroText>
            안녕하세요. 프론트엔드 개발자 이규상입니다.
            <br /> 신입으로 경력은 없지만 HTML5, CSS3, Java Script, React 등의
            기술 스택을 보유하고 있습니다.
            <br /> 전공은 정보통신.전자공학과로 대학에서 전공 지식을 쌓았습니다.
            <br />
            2021학년도 3학년 때, HTML과 CSS를 처음 접하여서 공부하기 시작하였고,
            <br />
            어떤 영상을 보면서 공부할지 검색하던 중, ‘생활코딩’이라는 사이트를
            발견하였고,
            <br />
            이곳에 있는 HTML과 CSS 영상으로 기초를 다졌습니다.
            <br />
            이후 JavaScript 공부도 시작하여 ‘백준’ 사이트에 있는 문제를 풀면서
            공부했습니다.
            <br />
            이것을 바탕으로 4학년 졸업작품을 동기 2명과 같은 조를 하여
            ‘SPSS(Shoes Price Sale Site)’ 웹 사이트를 제작하였는데,
            <br />
            저는 HTML과 CSS 부분을 맡아 졸업작품을 완성했습니다.
            <br />
            <br />
            졸업 후, React에 대해 알게 되었고 유튜브 영상을 통해 React 기초를
            공부했습니다.
            <br />
            useState, useEffect와 같은 기본적인 훅들과 react router를
            공부했습니다.
            <br />
            이러한 것들을 바탕으로 2024년 3월부터 자기소개 포트폴리오를 만들기
            시작했고,
            <br />
            Framer-motion과 같은 애니메이션, fullpage, CSS를 대신하여
            style-compoent를 활용하고,
            <br />
            useState, useEffect, useRef와 같은 훅을 사용하여 페이지를
            완성하였습니다.
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
