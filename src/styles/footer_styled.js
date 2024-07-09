import styled from "styled-components";

const FooterContainer = styled.div`
  background-color: black;
  color: white;
  display: flex;
  align-items: center;
  text-align: center;
  position: relative;
  width: 100%;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
`;

const FooterLogo = styled.div`
  width: 10%;
  font-size: 30px;
`;

const FooterInfo = styled.div`
  width: 80%;
  font-size: 13px;
`;

const FooterMyName = styled.p``;

const FooterNumber = styled.p``;

const FooterEmail = styled.p``;

export {
  FooterLogo,
  FooterInfo,
  FooterEmail,
  FooterContainer,
  FooterMyName,
  FooterNumber,
};
