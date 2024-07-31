import React from "react";
import {
  HobbyListContainer,
  HobbyListItem,
  HobbyContainer,
  HobbyListTitle,
  HobbyListDesc,
  HobbyListImg,
  HobbyListContent,
} from "../styles/hobby_styled";

const Hobby = () => {
  const hobbyList = [
    {
      img: "././images/sports.jpg",
      title: "Sports",
      desc:
        "고등학생 때부터 주말마다 풋살을 하였습니다. " +
        "대학교 입학 후에 학과 내에 있는 축구 동아리에 들어가서 일주일에 1~2회씩 매주 풋살을 했습니다.\n" +
        "볼링도 즐겨하는데, High는 196점이고, average는 120~130점 정도 나옵니다.",
      name: "sports",
    },
    {
      img: "../images/health.jpg",
      title: "Health Training",
      desc:
        "고등학교 때 다이어트를 위해 헬스장에 처음 입문하여 방학 때마다 헬스장을 다녔습니다. " +
        "웨이트 운동은 하지 않다가 군 입대 후, 군대 동기가 헬스 트레이너여서 웨이트 운동을 처음으로 시작하였고, " +
        "현재는 웨이트와 유산소 모두 다 즐겨하고 있습니다.",
      name: "muscle",
    },
    {
      img: "../images/coffee.jpg",
      title: "Coffee",
      desc:
        "20살 때, 처음 카페를 가보았고, 아아라는 줄임말이 유행하여 아이스 아메리카노를 처음 마셔보고 왜 마시나 싶었지만," +
        "그때 당시 용돈을 받고 생활하여서 가장 싼 아이스 아메리카노를 마시다가, 현재는 점심 심사 후에는 무조건 아이스 아메리카노만 마시게 되었습니다. ",
      name: "coffee",
    },
    {
      img: "../images/music.jpg",
      title: "Play Music",
      desc:
        "대중교통을 이용하거나 차를 운전하고, 운동할 때 노래를 즐겨 듣습니다. " +
        "가장 좋아하는 장르는 힙합, 싱잉랩이지만 발라드, R&B 등등 가리지 않고 노래를 즐겨 듣습니다.\n",
      name: "music",
    },
  ];

  const HobbyListComponent = () => {
    return (
      <HobbyListContainer>
        {hobbyList.map((hobby) => (
          <HobbyListItem>
            <HobbyListImg src={hobby.img} alt={hobby.name} />
            <HobbyListContent>
              <HobbyListTitle>{hobby.title}</HobbyListTitle>
              <HobbyListDesc>{hobby.desc}</HobbyListDesc>
            </HobbyListContent>
          </HobbyListItem>
        ))}
      </HobbyListContainer>
    );
  };

  return (
    <HobbyContainer>
      <HobbyListComponent />
    </HobbyContainer>
  );
};

export default Hobby;
