import styled from "styled-components";

const ProfileContainer = styled.div`
  width: 100%;
  text-align: center;
`;

//BasicProfile

const BasicProfileContainer = styled.div``;

const BasicProfileTopic = styled.h2``;

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
`;

const BasicProfileQuestion = styled.div`
  width: 30%;
  font-weight: bolder;
  font-size: 17px;
`;

const BasicProfileAnswer = styled.div`
  width: 70%;
  text-align: start;
  white-space: pre-line; // 줄바꿈 실행
`;

//ProfileListArea

const ProfileListContainer = styled.div``;
const ProfileListTopic = styled.h2``;
const ProfileContentContainer = styled.div`
  display: flex;
  overflow-x: scroll;
  &::-webkit-scrollbar {
    display: none;
  }
  gap: 10px;
  border: 1px solid white;
`;

const ProfileListItem = styled.div`
  display: inline-flex;
  flex-direction: column;
  align-items: center;
  border: 1px solid white;
`;

const ProfileListYear = styled.div`
  display: flex;
  width: 100%;
  height: 100px;
  justify-content: center;
  align-items: end;
  font-weight: bolder;
  font-size: 30px;
  border-bottom: 1px solid white;
`;

const ProfileListImg = styled.img`
  width: 250px;
  height: 290px;
  margin: 10px;
`;

const ProfileListTitle = styled.div`
  width: 250px;
  height: 50px;
  font-size: 13px;
  text-align: center;
`;

const ProfileListDesc = styled.div`
  width: 350px;
  height: 350px;
  font-size: 13px;
  border-top: 1px solid white;
  white-space: pre-line;
  text-align: start;
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
