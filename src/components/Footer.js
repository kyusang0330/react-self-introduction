import React from "react";
import {
  FooterContainer,
  FooterEmail,
  FooterInfo,
  FooterLogo,
  FooterMyName,
  FooterNumber,
} from "../styles/footer_styled";

const Footer = () => {
  return (
    <FooterContainer>
      <FooterLogo>Kyu</FooterLogo>
      <FooterInfo>
        <FooterMyName>Front-End-Developer : Lee Kyu Sang</FooterMyName>
        <FooterNumber>Phone : 010-4578-1305</FooterNumber>
        <FooterEmail>E-Mail : cholongs123@naver.com</FooterEmail>
      </FooterInfo>
    </FooterContainer>
  );
};

export default Footer;
