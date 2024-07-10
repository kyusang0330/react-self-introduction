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
const ProjectSkillItemContainer = styled.div`
  display: block;
  gap: 40px;
`;

const ProjectSkillItem = styled.div`
  display: flex;
  margin-top: 30px;
`;

const ProjectSkillTitle = styled.div`
  font-size: 35px;
`;

//ProjectList

const ProjectListContainer = styled.div``;

const ProjectListItem = styled.div`
  display: flex;
  justify-content: center;
`;

const ProjectListTitle = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 150px;
  height: 80px;
`;

export {
  ProjectContainer,
  ProjectSkillContainer,
  ProjectSkillItemContainer,
  ProjectSkillItem,
  ProjectSkillTitle,
  ProjectListContainer,
  ProjectListItem,
  ProjectListTitle,
};
