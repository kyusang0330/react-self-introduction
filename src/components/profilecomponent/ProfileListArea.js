import React, {useCallback, useRef, useState} from "react";
import {
  ProfileListContainer,
  ProfileListTopic,
  ProfileContentContainer,
  ProfileListDesc,
  ProfileListImg,
  ProfileListItem,
  ProfileListTitle,
  ProfileListYear,
} from "../../styles/profile_styled";

const ProfileListArea = () => {
  const ProfileContent = [
    {
      year: "2017",
      img: "../images/2017.jpg",
      title: "대전대학교 전자.정보통신공학과 입학",
      desc:
        "청주 봉명 고등학교 졸업 후, 설레는 마음으로 대전대학교 전자. 정보통신공학과에 입학했습니다.\n" +
        "다양한 지역에서 온 친구들을 많이 만났고, 두루두루 친하게 지냈습니다. 1년 동안 학업을 열심히 하고, 다양한 친구들과 친해진 후에 2018년 4월 2일에 입대했습니다.",
    },
    {
      year: "2019",
      img: "../images/2019.jpg",
      title: "육군병장만기전역",
      desc:
        "주특기 K-55a1 조종수. 606일간의 포병 군 생활을 잘 마무리하고 전역했습니다.\n" +
        "그 당시에는 매우 힘들고 지치고, 안 좋은 추억이 될 거라고 생각했지만, 지나고 보니 건강해지고 좋은 추억이었습니다.",
    },
    {
      year: "2020",
      img: "../images/2020.jpg",
      title: "대전대학교 전자.정보통신공학과 학생회 교육부장",
      desc:
        "군 전역하기 직전 학교 선배에게 복학하자마자 학과 학생회 임원 제안을 받았습니다. \n" +
        "복학 후 자유로운 느낌으로 학교를 다니고 싶다는 생각도 있었지만, 학생회 활동도 해보고 싶다는 생각에 학생회 임원을 하기로 결정하였습니다.",
    },
    {
      year: "2021",
      img: "../images/2021.jpg",
      title: "대전대학교 정보통신.전자공학과 학생회 학생회장",
      desc:
        "1년 동안의 학생회 활동이 끝나갈 때쯤, 학생회장 선배가 자신의 차기 학생회장 제안을 하였습니다.\n" +
        "1학년 시절부터 학생회장 선배가 멋있어 보였고, 어떠한 조직 내에서 리더를 해보고 싶다는 생각이 있어, 학생회장을 하고 싶다는 생각이 있었기 때문에, 제안을 받아들였습니다.\n" +
        "학과 학생회장은 학과 내에서 선거를 통해 당선이 되는 시스템이기 때문에 선거를 준비하고 12월 초 선거를 통해 당선이 되어 2022년 정보통신. 전자공학과 학생회장으로 활동하게 되었습니다.",
    },
    {
      year: "2022",
      img: "../images/2022.jpg",
      title: "대전대학교 공과대학 사무부장",
      desc:
        "학과 학생회장 임기가 끝나갈 무렵 토목공학과 학생회장 친구가 자신이 내년 공과대학 학생회장 선거에 출마할 건데 같이 공과대학 학생회를 하자고 제안하였습니다.\n" +
        "이제 4학년이기도 하고 학업에 조금 더 집중하고 싶어 거절하려고 했지만, 한 편으로 지금까지 학생회 생활을 계속하기도 하였고, 마지막 학교 학생회 생활이고 학생회 활동을 한다고 학업에 큰 영향을 줄 것 같지 않았습니다. 그리고 공과대학 학생회를 해보고 싶다는 생각이 조금 있었습니다." +
        "그래서 제안을 수락하고 선거 준비를 잘 마친 뒤, 당선되어 마지막 학교 학생회 생활을 잘 마무리하고 졸업하였습니다.",
    },
    {
      year: "2023",
      img: "../images/2023.jpg",
      title: "대전대학교 정보통신공학과 교육조교",
      desc:
        "졸업 전부터 꾸준히 조교 선배가 조교를 하라는 제안을 하였고, 저는 꾸준히 거절을 하였습니다. 왜냐하면 졸업하고 react 공부를 더 열심히 해보고 싶었고, 실무에 들어가 진짜 사회생활을 하여 저의 개발 능력을 향상시키고 싶었습니다.\n" +
        "졸업 후에도 조교 형의 계속된 제안이 있었고, 조교하면서도 공부할 수 있는 시간이 많다고 하여 결국엔 수락하고 제가 졸업한 학과인 정보통신공학과에서 교육조교를 시작하였습니다.\n" +
        "3월에 정식 임용이었는데 2월 중순에 풋살을 하다가 발목 인대 파열을 당했습니다. 수술을 할 뻔했지만, 수술을 면하고 한 달 정도 깁스를 하고, 3달 정도 발목 보호대를 하고 다녔습니다.",
    },
  ];

  const containerRef = useRef(null);

  const[isDragging, setIsDragging] = useState(false);

  const [startX, setStartX] = useState(0);

  const [totalX, setTotalX] = useState(0);

  const preventUnexpectedEffects = useCallback((e: MouseEvent) =>{
    e.preventDefault()
    e.stopPropagation()
  },[]);
  const onDragStart = (e: MouseEvent) => {
    preventUnexpectedEffects(e)
    setIsDragging(true);
    const x = e.clientX;
    setStartX(x);
    if(containerRef.current && 'scrollLeft' in containerRef.current){
      setTotalX(x + containerRef.current.scrollLeft);
    }
  };
  const onDragMove= (e: MouseEvent) => {
    preventUnexpectedEffects(e)
    if(!isDragging) return;

    const scrollLeft = totalX - e.clientX;

    if(containerRef.current && 'scrollLeft' in containerRef.current) {
      containerRef.current.scrollLeft = scrollLeft;
    }
  };
  const onDragEnd = (e: MouseEvent) => {
    if(!isDragging) return;
    if (!containerRef.current) return;

    setIsDragging(false);

    const endX = e.clientX;
    const childNodes = [...(containerRef.current?.childNodes ||[])];
    const dragDiff = Math.abs(startX - endX)
    if (dragDiff > 10) {
      childNodes.forEach((child) => {
        child.addEventListener('click', preventUnexpectedEffects);
      });
    } else {
      childNodes.forEach((child) => {
        child.removeEventListener('click', preventUnexpectedEffects);
      });
    }
  };
  return (
    <ProfileListContainer>
      <ProfileListTopic>대학 생활</ProfileListTopic>
      <ProfileContentContainer
          ref={containerRef}
          onMouseDown={onDragStart}
          onMouseMove={onDragMove}
          onMouseUp={onDragEnd}
          onMouseLeave={onDragEnd}
      >
        {ProfileContent.map((profilelist) => (
          <ProfileListItem>
            <ProfileListYear>{profilelist.year}</ProfileListYear>
            <ProfileListImg src={profilelist.img} alt={profilelist.year} />
            <ProfileListTitle>{profilelist.title}</ProfileListTitle>
            <ProfileListDesc>{profilelist.desc}</ProfileListDesc>
          </ProfileListItem>
        ))}
      </ProfileContentContainer>
    </ProfileListContainer>
  );
};

export default ProfileListArea;
