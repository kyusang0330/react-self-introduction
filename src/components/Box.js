import React, { useState, useEffect } from "react";

import {
  BoxContainer,
  BoxMain,
  TestText,
  TestText2,
} from "../styles/box_styled";

const Box = () => {
  /* const [showAnimation, setShowAnimation] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowAnimation(false);
    }, 3000);

    return () => clearTimeout(timer);
  });
*/
  const boxVariants = {
    out: { y: 600 },
    in: {
      y: 0,
      transition: {
        duration: 0.5,
        delayChildren: 1,
        staggerChildren: 0.5,
      },
    },
  };

  const iconVariants = {
    out: { x: -600, scale: 0 },
    in: { x: 0, scale: 1 },
  };
  return (
    <BoxContainer>
      <BoxMain variants={boxVariants} initial="out" animate="in">
        <TestText variants={iconVariants}>Frond-End Developer</TestText>
        <TestText2 variants={iconVariants}>Lee Kyu Sang</TestText2>
      </BoxMain>
    </BoxContainer>
  );
};

//     {showAnimation && (
//         <BoxMain variants={boxVariants} initial="out" animate="in">
//           <TestText variants={iconVariants}>Frond end</TestText>
//           <TestText2 variants={iconVariants}>Developer</TestText2>
//           <TestText3 variants={iconVariants}>Lee Kyu Sang</TestText3>
//         </BoxMain>
//       )}

export default Box;
