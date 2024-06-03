import styled from "styled-components";

const FooterMyName = styled.p``;

const FooterNumber = styled.p`
  font-size: 10px;
`;

const FooterEmail = styled.p``;

const FooterContainer = styled.div`
  background-color: black;
  color: white;
  display: flex;
  align-items: center;
  text-align: center;
  position: fixed;
  width: 100vw;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
`;

const FooterLogo = styled.div`
  width: 10%;
  font-size: 30px;
`;

const FooterInfo = styled.div`
  width: 80vw;
  font-size: 13px;
`;

export {
  FooterLogo,
  FooterInfo,
  FooterEmail,
  FooterContainer,
  FooterMyName,
  FooterNumber,
};
