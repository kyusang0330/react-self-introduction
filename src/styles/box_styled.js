import styled from "styled-components";
import { motion } from "framer-motion";

const BoxContainer = styled.div`
  color: blue;
  text-align: center;
`;

const BoxMain = styled(motion.div)`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  height: 100vh;
  width: 100vw;
  background: linear-gradient(135deg, #e09, #d0e);
`;
/*
const TestBox = styled(motion.div)`
  display: grid;
  width: 200px;
  height: 200px;
  background-color: rgba(255, 255, 255, 1);
  border-radius: 25px;
  box-shadow: 0px 0px 15px 3px rgba(0, 0, 0, 0.2);
`;
*/
const TestText = styled(motion.div)``;

const TestText2 = styled(motion.div)``;

export { BoxContainer, BoxMain, TestText, TestText2 };
