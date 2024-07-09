import styled from "styled-components";

const ProfileContainer = styled.div`
  width: 100%;
  text-align: center;
`;

//BasicProfile

const BasicProfileContainer = styled.div``;

const BasicProfileTopic = styled.h2`
  border: 1px solid red;
`;

const BasicProfileMain = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding-bottom: 10px;
  height: 600px;
`;

const BasicProfileImg = styled.img`
  width: 430px;
  height: 100%;
`;

const BasicProfileContentContainer = styled.div`
  border: 1px solid white;
  width: 420px;
  height: 100%;
  margin-left: 10px;
`;

const BasicProfileItem = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 80px;
  border: 1px solid purple;
`;

const BasicProfileQuestion = styled.div`
  width: 30%;
  border: 1px solid blue;
`;

const BasicProfileAnswer = styled.div`
  width: 70%;
  text-align: start;
  white-space: pre-line; // 줄바꿈 실행
  border: 1px solid red;
`;

//ProfileListArea

const ProfileListContainer = styled.div``;
const ProfileListTopic = styled.h2``;
const ProfileContentContainer = styled.div`
  display: flex;
  justify-content: center;
  height: 800px;
  border: 1px solid black;
`;

const ProfileListItem = styled.div`
  text-align: start;
`;

const ProfileListYear = styled.div`
  display: flex;
  height: 100px;
  align-items: end;
  border: 1px solid red;
`;

const ProfileListImg = styled.img`
  width: 230px;
  height: 290px;
`;

const ProfileListTitle = styled.div`
  width: 250px;
  height: 50px;
  font-size: 13px;
  border: 1px solid blue;
`;

const ProfileListDesc = styled.div`
  height: 350px;
  font-size: 13px;
  border: 1px solid blueviolet;
`;

export {
  ProfileContainer,
  BasicProfileContainer,
  BasicProfileTopic,
  BasicProfileMain,
  BasicProfileImg,
  BasicProfileContentContainer,
  BasicProfileItem,
  BasicProfileQuestion,
  BasicProfileAnswer,
  ProfileListContainer,
  ProfileListTopic,
  ProfileContentContainer,
  ProfileListItem,
  ProfileListTitle,
  ProfileListDesc,
  ProfileListYear,
  ProfileListImg,
};
