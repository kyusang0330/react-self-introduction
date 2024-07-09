import Grid from "../components/Grid";
import { ProfileContainer } from "../styles/profile_styled";
import BasicProfile from "../components/profilecomponent/BasicProfile";
import ProfileListArea from "../components/profilecomponent/ProfileListArea";

function Profile() {
  return (
    <ProfileContainer>
      <BasicProfile />
      <ProfileListArea />
      <Grid grid1="학생회장" grid2="교육조교" />
      <Grid grid1="교육부장" grid2="사무부장" />
    </ProfileContainer>
  );
}

export default Profile;
