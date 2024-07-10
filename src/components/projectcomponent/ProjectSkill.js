import React from "react";
import {
  ProjectSkillContainer,
  ProjectSkillItemContainer,
  ProjectSkillItem,
  ProjectSkillTitle,
} from "../../styles/project_styled";
const ProjectSkill = () => {
  const ProjectSkillContent = [
    {
      title: "HTML5 /",
    },
    {
      title: "CSS3 /",
    },
    {
      title: "Java Script /",
    },
    {
      title: "React",
    },
  ];
  return (
    <ProjectSkillContainer>
      <ProjectSkillItemContainer>
        <h2>Skill</h2>
        <ProjectSkillItem>
          {ProjectSkillContent.map((skill) => (
            <ProjectSkillTitle>{skill.title}</ProjectSkillTitle>
          ))}
        </ProjectSkillItem>
      </ProjectSkillItemContainer>
    </ProjectSkillContainer>
  );
};

export default ProjectSkill;
