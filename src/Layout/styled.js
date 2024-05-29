import styled from "styled-components";
import { motion } from "framer-motion";

const LayoutContainer = styled.div`
  color: white;
  margin-bottom: 120px; //useEffect 사용해보기
  background-color: black;
`;

const Box = styled(motion.div)`
  width: 200px;
  height: 200px;
  background-color: rgba(255, 255, 255, 1);
  border-radius: 25px;
  box-shadow: 0px 0px 15px 3px rgba(0, 0, 0, 0.2);
`;

export { LayoutContainer, Box };
