import React from "react";
import {
  BasicProfileContainer,
  BasicProfileTopic,
  BasicProfileMain,
  BasicProfileImg,
  BasicProfileContentContainer,
  BasicProfileItem,
  BasicProfileQuestion,
  BasicProfileAnswer,
} from "../../styles/profile_styled";

const BasicProfile = () => {
  const BasicProfileContent = [
    {
      question: "이름",
      answer: "이규상",
    },
    {
      question: "출생",
      answer: "1998년 3월 30일",
    },
    {
      question: "본관",
      answer: "전주 이씨",
    },
    {
      question: "신체",
      answer: "175cm / B형 / 270mm",
    },
    {
      question: "학력",
      answer:
        "청주 덕벌초등학교 / 청주 주성중학교 \n" +
        "청주 봉명고등학교 \n" +
        "대전대학교 정보통신.전자공학과",
    },
    {
      question: "MBTI",
      answer: "ESTP",
    },
    {
      question: "병역",
      answer: "30사단 포병여단 311포병대대 \n 1포대 조종수 만기 전역",
    },
  ];
  return (
    <BasicProfileContainer>
      <BasicProfileTopic>기본 프로필</BasicProfileTopic>
      <BasicProfileMain>
        <BasicProfileImg src="./images/Main.jpg" alt="Main" />
        <BasicProfileContentContainer>
          {BasicProfileContent.map((mainprofile) => (
            <BasicProfileItem>
              <BasicProfileQuestion>
                {mainprofile.question}
              </BasicProfileQuestion>
              <BasicProfileAnswer>{mainprofile.answer}</BasicProfileAnswer>
            </BasicProfileItem>
          ))}
        </BasicProfileContentContainer>
      </BasicProfileMain>
    </BasicProfileContainer>
  );
};

export default BasicProfile;
