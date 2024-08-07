import styled from "styled-components";

const ProjectContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
`;

//ProjectSkill
const ProjectSkillContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 650px;
`;
const ProjectSkillItem = styled.div``;
const ProjectSkillTopic = styled.h2`
  font-weight: bolder;
`;
const ProjectSkillMap = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 100px;
`;

const ProjectSkillTitle = styled.div`
  width: 200px;
  height: 80px;
  font-size: 35px;
`;

//ProjectList

const ProjectListContainer = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  height: 650px;
`;

const ProjectListItem = styled.div``;
const ProjectListTopic = styled.h2`
  font-weight: bolder;
`;
const ProjectListMap = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 100px;
`;

const ProjectListTitle = styled.div`
  width: 250px;
  height: 80px;
  font-size: 35px;
`;

export {
  ProjectContainer,
  ProjectSkillContainer,
  ProjectSkillItem,
  ProjectSkillTopic,
  ProjectSkillMap,
  ProjectSkillTitle,
  ProjectListContainer,
  ProjectListItem,
  ProjectListTopic,
  ProjectListMap,
  ProjectListTitle,
};
