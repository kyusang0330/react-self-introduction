import React from "react";
import {
  ProjectListContainer,
  ProjectListItem,
  ProjectListTitle,
} from "../../styles/project_styled";
const ProjectList = () => {
  const ProjectListContent = [
    {
      title: "Egoing_HTML",
    },
    {
      title: "Egoing_CSS",
    },
    {
      title: "SPSS",
    },
    {
      title: "nowmovie",
    },
  ];
  return (
    <ProjectListContainer>
      <div>
        <h2>Project</h2>
        <ProjectListItem>
          {ProjectListContent.map((git) => (
            <ProjectListTitle>{git.title}</ProjectListTitle>
          ))}
        </ProjectListItem>
      </div>
    </ProjectListContainer>
  );
};

export default ProjectList;
