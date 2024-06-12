import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
const Box = () => {
  const [showAnimation, setShowAnimation] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowAnimation(false);
    }, 1000);

    return () => clearTimeout(timer);
  });
  return (
    <BoxContainer>
      {showAnimation && (
        <BoxMain>
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
        </BoxMain>
      )}
    </BoxContainer>
  );
};

export default Box;

const BoxContainer = styled.div``;

const BoxMain = styled.div`
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
