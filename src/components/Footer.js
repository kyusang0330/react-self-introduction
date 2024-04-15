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
                <p>Front-End-Developer : Lee Kyu Sang</p>
                <p>Phone : 010-4578-1305</p>
                <p>E-Mail : cholongs123@naver.com</p>
            </div>
        </div>
    );
};

export default Footer;