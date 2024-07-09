import React from "react";
import ProjectSkill from "../components/projectcomponent/ProjectSkill";
import ProjectList from "../components/projectcomponent/ProjectList";
import { ProjectContainer } from "../styles/project_styled";
import { SectionsContainer, Section } from "react-fullpage";

const Project = () => {
  const options = {
    anchors: ["section1", "section2"],
  };
  return (
    <ProjectContainer>
      <SectionsContainer {...options}>
        <Section>
          <ProjectSkill />
        </Section>
        <Section>
          <ProjectList />
        </Section>
      </SectionsContainer>
    </ProjectContainer>
  );
};

export default Project;

//풀페이지 찾아보기
