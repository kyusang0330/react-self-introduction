import styled from "styled-components";

const ProjectContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
`;

//ProjectSkill
const ProjectSkillContainer = styled.div`
  gap: 30px;
`;
const ProjectSkillItemContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 30px;
`;

const ProjectSkillItem = styled.div``;

const ProjectSkillImg = styled.img`
  width: 100px;
  height: 100px;
`;

const ProjectSkillTitle = styled.div``;

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
  ProjectSkillImg,
  ProjectSkillTitle,
  ProjectListContainer,
  ProjectListItem,
  ProjectListTitle,
};
