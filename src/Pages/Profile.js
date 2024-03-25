import React from 'react';
import Grid from "../components/Grid";


const Profile = () => {

    return (
        <div className="Profile text-center">
            <h1>Profile</h1>
            <Grid grid1="학생회장" />
            <Grid grid2="교육조교" />
            <Grid grid1="교육부장" />
            <Grid grid2="사무부장" />
        </div>
    );
};

export default Profile;