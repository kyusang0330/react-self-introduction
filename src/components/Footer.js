import React, {useState} from 'react'
import '../CSS/Footer.css'

const Footer = () => {

    const [Kyu, setKyu] = useState('Kyu')

    return (

        <div className="footer">
            <div className="footer-logo">
                {Kyu}
            </div>
            <div className="footer-info">
                <em>Front-End-Developer : Lee Kyu Sang</em>
                <p>Phone : 010-4578-1305</p>
                <em>E-Mail : cholongs123@naver.com</em>
            </div>
        </div>
    );
};

export default Footer;