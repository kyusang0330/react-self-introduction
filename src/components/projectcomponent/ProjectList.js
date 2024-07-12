import React from "react";
import {
  ProjectListContainer,
  ProjectListItem,
  ProjectListTopic,
  ProjectListMap,
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
      <ProjectListItem>
        <ProjectListTopic>Project</ProjectListTopic>
        <ProjectListMap>
          {ProjectListContent.map((git) => (
            <ProjectListTitle>{git.title}</ProjectListTitle>
          ))}
        </ProjectListMap>
      </ProjectListItem>
    </ProjectListContainer>
  );
};

export default ProjectList;
