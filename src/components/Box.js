import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
const Box = () => {
  return (
    <BoxContainer>
      <TestBox
        initial={{ scale: 0 }}
        animate={{ scale: 1, rotateZ: 360 }}
        transditon={{
          duration: 1,
          type: "spring",
          stiffness: 260,
          damping: 20,
        }}
      >
        <TestText>welcome!</TestText>
      </TestBox>
    </BoxContainer>
  );
};

export default Box;

const BoxContainer = styled.div`
  display: flex;
  height: 100vh;
  width: 100vw;
  justify-content: center;
  align-items: center;
  background: linear-gradient(135deg, #e09, #d0e);
`;

const TestBox = styled(motion.div)`
  display: grid;
  width: 200px;
  height: 200px;
  background-color: rgba(255, 255, 255, 1);
  border-radius: 25px;
  box-shadow: 0px 0px 15px 3px rgba(0, 0, 0, 0.2);
`;

const TestText = styled(motion.p)`
  place-self: center;
  color: blue;
`;

//motion.p랑 motion.img도 쓸 수 있는지 실험할 것
