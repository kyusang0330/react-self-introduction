import React from "react";
import ProjectSkill from "../components/ProjectSkill";
import ProjectList from "../components/ProjectList";
import { ProjectContainer } from "../styles/project_styled";

const Project = () => {
  return (
    <ProjectContainer>
      <ProjectSkill />
      <ProjectList />
    </ProjectContainer>
  );
};

export default Project;
