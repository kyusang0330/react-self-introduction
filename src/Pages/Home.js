import React from "react";
import {
  HomeContainer,
  HomeInfo,
  MainImg,
  HomeHi,
  HomeHiFirst,
} from "../styles/home_styled";
import { motion } from "framer-motion";

const Home = () => {
  return (
    <HomeContainer>
      <HomeInfo>
        <MainImg src="/images/Main.jpg" alt="증명사진" />
        <HomeHi>
          <HomeHiFirst>Front-End Devloper Lee Kyu Sang</HomeHiFirst>
        </HomeHi>
      </HomeInfo>
    </HomeContainer>
  );
};

export default Home;
