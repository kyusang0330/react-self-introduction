import React from 'react';
import Grid from "../components/Grid";
import "../index.css";

const Profile = () => {

    return (
        <div className="Profile">
            <h1>Profile Keyword</h1>
            <Grid grid1="학생회장" grid2="교육조교"/>
            <Grid grid1="교육부장" grid2="사무부장"/>
        </div>
    );
};

export default Profile;