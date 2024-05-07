import React, { useState } from "react";
import Grid from "../components/Grid";
import styled from "styled-components";

const Hobby = () => {
  const hobbyList = ["Football", "Health", "Coffee", "Play Music"];

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
