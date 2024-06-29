import Grid from "../components/Grid";
import {
  ProfileContainer,
  MainProfile,
  ProfileMainImg,
} from "../styles/profile_styled";
import BasicProfile from "../components/BasicProfile";
import ProfileListArea from "../components/ProfileListArea";

function Profile() {
  return (
    <ProfileContainer>
      <MainProfile>
        <ProfileMainImg src="/images/Main.jpg" alt="증명사진" />
        <BasicProfile />
      </MainProfile>
      <ProfileListArea />
      <Grid grid1="학생회장" grid2="교육조교" />
      <Grid grid1="교육부장" grid2="사무부장" />
    </ProfileContainer>
  );
}

export default Profile;
