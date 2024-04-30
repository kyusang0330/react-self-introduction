import React, { useState } from "react";
import Grid from "../components/Grid";
import styled from "styled-components";
import { useRecoilState } from "recoil";
import { textState } from "../store";

const Hobby = () => {
  const [test, setTest] = useRecoilState(textState);
  const hobbyList = ["Fooball", "Health", "Coffee", "Play Music"];

  const HobbyListComponent = () => {
    return (
      <HobbyListContainer>
        {hobbyList.map((hobby) => (
          <HobbyListItem>{hobby}</HobbyListItem>
        ))}
      </HobbyListContainer>
    );
  };

  return (
    <HobbyContainer>
      <h2>{test}</h2>
      <HobbyListComponent />
    </HobbyContainer>
  );
};

export default Hobby;

const HobbyContainer = styled.div`
  margin: 0 auto;
  width: 60%;
`;

const HobbyListContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 15px;
`;

const HobbyListItem = styled.div`
  box-sizing: border-box;
  display: inline-block;
  width: 250px;
  height: 250px;
  border-radius: 10px;
  border: 1px solid blue;
  text-align: center;
  align-items: center;
  line-height: 250px;
  color: black;
`;
