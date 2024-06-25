import React, { useState, useEffect } from "react";

import {
  BoxContainer,
  BoxMain,
  TestBox,
  TestText,
  TestText2,
  TestText3,
} from "../styles/box_styled";

const Box = () => {
  const [showAnimation, setShowAnimation] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowAnimation(false);
    }, 3000);

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
              duration: 3,
              type: "spring",
              stiffness: 260,
              damping: 20,
            }}
          >
            <TestText>Frond end</TestText>
            <TestText2>Developer</TestText2>
            <TestText3>Lee Kyu Sang</TestText3>
          </TestBox>
        </BoxMain>
      )}
    </BoxContainer>
  );
};

export default Box;
