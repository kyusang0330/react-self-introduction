import React from 'react';
import '../CSS/Home.css'

const Home = () => {

    return (
        <div className="Home">
            <h1>Home</h1>
            <div className="Home-info">
                <img src="/images/test.jpg" className="img" alt="test"/>
                <div className="Home-hi">
                    <p>
                        안녕하세요. ------ 이규상입니다!
                    </p>
                </div>
            </div>

        </div>
    );
};

export default Home;