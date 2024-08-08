import { ProfileContainer } from "../styles/profile_styled";
import BasicProfile from "../components/profilecomponent/BasicProfile";
import ProfileListArea from "../components/profilecomponent/ProfileListArea";

function Profile() {
  return (
    <ProfileContainer>
      <BasicProfile />
      <ProfileListArea />
    </ProfileContainer>
  );
}

export default Profile;
