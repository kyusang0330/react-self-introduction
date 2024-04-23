import React from 'react';
import '../CSS/Home.css'

const Home = () => {

    return (
        <div className="Home">
            <h1>Home</h1>
            <div className="Home-info">
                <img src="/images/Main.jpg" className="img" alt="증명사진"/>
                <div className="Home-hi">
                    <p>안녕하세요. ------ 이규상입니다!</p>
                    <p>안녕하세요. ------ 이규상입니다!</p>
                </div>
            </div>
        </div>
    );
};

export default Home;