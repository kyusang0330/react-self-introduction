import Grid from "../components/Grid";
import {
  ProfileContainer,
  MainProfile,
  ProfileMainImg,
  ProfileIntro,
  ProfileListContainer,
  ProfileListItem,
  ProfileListTitle,
  ProfileListDesc,
  ProfileListYear,
} from "../styles/profile_styled";

function Profile() {
  const ProfileContent = [
    {
      year: "2017",
      img: "",
      title: "대전대학교 전자.정보통신공학과 입학.",
      desc: "desc",
    },
    {
      year: "2019",
      img: "",
      title: "육군병장만기전역.",
      desc: "desc",
    },
    {
      year: "2020",
      img: "",
      title: "대전대학교 전자.정보통신공학과 학생회 교육부장.",
      desc: "desc",
    },
    {
      year: "2021",
      img: "",
      title: "대전대학교 정보통신.전자공학과 학생회 학생회장.",
      desc: "desc",
    },
    {
      year: "2022",
      img: "",
      title: "대전대학교 공과대학 사무부장.",
      desc: "desc",
    },
    {
      year: "2023",
      img: "",
      title: "대전대학교 정보통신공학과 교육조교.",
      desc: "desc",
    },
  ];

  const RenderProfile = () => {
    return (
      <ProfileListContainer>
        {ProfileContent.map((profile) => (
          <ProfileListItem>
            <ProfileListYear>{profile.year}</ProfileListYear>
            <ProfileListTitle>{profile.title}</ProfileListTitle>
            <ProfileListDesc>{profile.desc}</ProfileListDesc>
          </ProfileListItem>
        ))}
      </ProfileListContainer>
    );
  };

  return (
    <ProfileContainer>
      <MainProfile>
        <ProfileMainImg src="/images/Main.jpg" alt="증명사진" />
        <ProfileIntro>안녕하세요 ! ------ 이규상입니다.</ProfileIntro>
      </MainProfile>
      <RenderProfile />
      <Grid grid1="학생회장" grid2="교육조교" />
      <Grid grid1="교육부장" grid2="사무부장" />
    </ProfileContainer>
  );
}

export default Profile;
