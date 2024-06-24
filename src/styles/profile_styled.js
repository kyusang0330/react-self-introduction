import styled from "styled-components";

const ProfileContainer = styled.div`
  width: 100%;
  text-align: center;
`;

const MainProfile = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ProfileMainImg = styled.img`
  width: 410px;
  height: 540px;
  padding: 0 10px 10px 10px;
`;

const ProfileIntro1 = styled.p``;

const ProfileIntro2 = styled.div``;

//RenderProfile
const ProfileListContainer = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
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
  MainProfile,
  ProfileMainImg,
  ProfileIntro1,
  ProfileIntro2,
  ProfileListContainer,
  ProfileListItem,
  ProfileListTitle,
  ProfileListDesc,
  ProfileListYear,
  ProfileListImg,
};
