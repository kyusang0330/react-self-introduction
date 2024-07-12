import React from "react";
import {
  ProjectSkillContainer,
  ProjectSkillItem,
  ProjectSkillTopic,
  ProjectSkillMap,
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
      <ProjectSkillItem>
        <ProjectSkillTopic>Skill</ProjectSkillTopic>
        <ProjectSkillMap>
          {ProjectSkillContent.map((skill) => (
            <ProjectSkillTitle>{skill.title}</ProjectSkillTitle>
          ))}
        </ProjectSkillMap>
      </ProjectSkillItem>
    </ProjectSkillContainer>
  );
};

export default ProjectSkill;
