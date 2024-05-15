import Grid from "../components/Grid";
import {
  ProfileContainer,
  MainProfile,
  ProfileMainImg,
  MainProfileText,
  ContentText,
} from "../styles/profile_styled";

function Profile() {
  const ProfileContent = [
    { title: "2017 대전대학교 전자.정보통신공학과 입학." },
    { title: "2019 육군병장만기전역." },
    { title: "2020 대전대학교 전자.정보통신공학과 학생회 교육부장." },
    { title: "2021 대전대학교 정보통신.전자공학과 학생회 학생회장." },
    { title: "2022 대전대학교 공과대학 사무부장." },
    { title: "2023 대전대학교 정보통신공학과 교육조교." },
  ];

  const renderProfile = ProfileContent.map((profile) => {
    return (
      <ContentText className="ProfileContent">{profile.title}</ContentText>
    );
  });

  return (
    <ProfileContainer>
      <MainProfile>
        <ProfileMainImg src="/images/Main.jpg" alt="증명사진" />
      </MainProfile>
      <MainProfileText>{renderProfile}</MainProfileText>
      <Grid grid1="학생회장" grid2="교육조교" />
      <Grid grid1="교육부장" grid2="사무부장" />
    </ProfileContainer>
  );
}

export default Profile;
