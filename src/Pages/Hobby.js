import React, { useState } from "react";
import {
  HobbyListContainer,
  HobbyListItem,
  HobbyContainer,
} from "../styles/hobby_styled";

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
