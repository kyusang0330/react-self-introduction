import styled from "styled-components";

const ProfileContainer = styled.div`
  text-align: center;
`;

const MainProfile = styled.div`
  display: flex;
  justify-content: center;
`;

const ProfileMainImg = styled.img`
  width: 300px;
  padding: 0 10px 10px 10px;
`;

const ProfileIntro = styled.p``;

const ProfileListContainer = styled.div`
  display: flex;
`;

const ProfileListItem = styled.div`
  text-align: start;
  margin-left: 10px;
`;

const ProfileListYear = styled.div``;

const ProfileListTitle = styled.div`
  font-size: 13px;
`;

const ProfileListDesc = styled.div``;

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
