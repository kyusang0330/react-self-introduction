import React from "react";
import {
  ProjectSkillContainer,
  ProjectSkillItemContainer,
  ProjectSkillItem,
  ProjectSkillImg,
  ProjectSkillTitle,
} from "../../styles/project_styled";
const ProjectSkill = () => {
  const ProjectSkillContent = [
    {
      img: "../images/2023.jpg",
      title: "HTML5",
    },
    {
      img: "../images/2023.jpg",
      title: "CSS3",
    },
    {
      img: "../images/2023.jpg",
      title: "Java Script",
    },
    {
      img: "../images/2023.jpg",
      title: "React",
    },
  ];
  return (
    <ProjectSkillContainer>
      <h2>Skill</h2>
      <ProjectSkillItemContainer>
        {ProjectSkillContent.map((skill) => (
          <ProjectSkillItem>
            <ProjectSkillImg src={skill.img} />
            <ProjectSkillTitle>{skill.title}</ProjectSkillTitle>
          </ProjectSkillItem>
        ))}
      </ProjectSkillItemContainer>
    </ProjectSkillContainer>
  );
};

export default ProjectSkill;
