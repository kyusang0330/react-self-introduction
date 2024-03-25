import React from 'react';
import Grid from "../components/Grid";


const Hobby = () => {

    return (
        <div className="Hobby text-center">
            <h1>Hobby</h1>
            <Grid grid1="Fooball"/>
            <Grid grid2="Health"/>
            <Grid grid1="Coffee"/>
            <Grid grid2="Paly Music"/>
        </div>
    );
};

export default Hobby;