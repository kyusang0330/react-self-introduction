import styled from "styled-components";

const ProfileContainer = styled.div`
  text-align: center;
`;

const MainProfile = styled.div`
  display: flex;
  justify-content: center;
`;

const ProfileMainImg = styled.img`
  width: 410px;
  height: 540px;
  padding: 0 10px 10px 10px;
`;

const ProfileIntro = styled.p``;

const ProfileListContainer = styled.div`
  display: flex;
  justify-content: center;
  height: 500px;
  border: 1px solid black;
`;

const ProfileListItem = styled.div`
  text-align: start;
  margin-left: 10px;
`;

const ProfileListYear = styled.div`
  display: flex;
  height: 150px;
  align-items: end;
`;

const ProfileListTitle = styled.div`
  width: 230px;
  height: 50px;
  font-size: 13px;
`;

const ProfileListDesc = styled.div`
  height: 350px;
  font-size: 13px;
`;

export {
  ProfileContainer,
  MainProfile,
  ProfileMainImg,
  ProfileIntro,
  ProfileListContainer,
  ProfileListItem,
  ProfileListTitle,
  ProfileListDesc,
  ProfileListYear,
};
