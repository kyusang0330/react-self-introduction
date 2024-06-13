import styled from "styled-components";

const ProfileContainer = styled.div`
  width: 100%;
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

//Render Profile
const ProfileListContainer = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  height: 500px;
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
  MainProfile,
  ProfileMainImg,
  ProfileIntro,
  ProfileListContainer,
  ProfileListItem,
  ProfileListTitle,
  ProfileListDesc,
  ProfileListYear,
};
