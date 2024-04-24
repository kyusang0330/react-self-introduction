import React from 'react';
import Grid from "../components/Grid";
import "../CSS/Profile.css";

function Profile() {

    const ProfileContent = [
        {title: '2017 대전대학교 전자.정보통신공학과 입학'},
        {title: '2019 육군병장만기전역'},
        {title: '2020 대전대학교 전자.정보통신공학과 학생회 교육부장'},
        {title: '2021 대전대학교 정보통신.전자공학과 학생회 학생회장'},
        {title: '2022 대전대학교 공과대학 사무부장'},
        {title: '2023 대전대학교 정보통신공학과 교육조교'}
    ];

    const renderProfile = ProfileContent.map(profile => {
        return (
            <div className="ProfileContent">
                {profile.title}
            </div>
        )
    });

    return (
        <div className="Profile">
            <h1>Profile Keyword</h1>
            <Grid grid1="학생회장" grid2="교육조교"/>
            <Grid grid1="교육부장" grid2="사무부장"/>
            <div className="MainProfile">
                <img src="/images/Main.jpg" className="mainImg" alt="증명사진"/>
                <div>{renderProfile}</div>
            </div>
        </div>
    );
}

export default Profile;