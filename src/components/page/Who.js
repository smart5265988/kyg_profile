import React, { useEffect } from 'react';
import styled, { keyframes } from 'styled-components';
import { flexCenterAlign } from '../style/styleConstants';

const WhoOut = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  display: grid;
  grid-template-rows: 1fr 11fr;
  @media screen and (max-width: 900px) {
    grid-template-rows: 1fr;
  }
`;

const TitleAni = keyframes`
to{
  transform: translateX(0%);
  opacity:1;
}`;

const Title = styled.div`
  width: 100%;
  height: auto;
  font-size: 2.5rem;
  margin: 0 auto;
  position: relative;
  font-weight: bold;
  color: #3e4349;
  letter-spacing: 0.2rem;
  user-select: none;
  opacity: 0;
  transform: translateX(-5%);
  animation: ${TitleAni} 1s forwards;
  padding-left: 40px;

  &::before {
    content: '';
    position: absolute;
    width: 40px;
    height: 2px;
    background-color: #3e4349;
    /* bottom: 3px; */
    opacity: 0.5;
  }
  @media screen and (max-width: 900px) {
    display: none;
  }
`;

const WhoAni = keyframes`
to{
  opacity:1;
}
`;
const WhoAni2 = keyframes`

0% {
        transform: translateY(30px) translateZ(0) scaleY(1.1) skewY(2deg);
        transform-origin: 0 0;
        opacity: 0;
        transform-style: preserve-3d;
    }
    100% {
        transform: translateY(0) translateZ(0) scaleY(1) skewY(0);
        opacity: 1;
        transform-style: preserve-3d;
    }
`;

const WhoMain = styled.div`
  width: 100%;
  height: 100%;
  /* background-color: lightgray; */
  padding: 5%;
  display: grid;
  grid-template-columns: 1fr 4fr;
  grid-column-gap: 30px;
  color: #3e4349;
  opacity: 0;
  animation: ${WhoAni} 1s forwards;
  @media screen and (max-width: 1301px) {
    grid-template-columns: 1fr;
  }
  /* @media screen and (max-width: 1101px) {
    padding: 0%;
  } */
`;

const LeftCol = styled.div`
  user-select: none;

  width: 100%;
  height: 100%;
  color: #3e4349;
  /* padding-top: 3%; */
  /* border: 1px solid red; */
  & > div {
    /* border: 1px solid red; */
    transform: translateY(20%);
    opacity: 0;
    animation: ${WhoAni2} 0.8s forwards 0.6s;
  }
  & > div p {
    margin-bottom: 10px;
    font-size: 14.5px;
    font-weight: 300;
  }
  & > div h6 {
    /* border: 1px solid orange; */
    font-size: 20px;
    text-align: left;
    transform: translateY(20%);
    opacity: 0;
    animation: ${WhoAni2} 0.8s forwards 0.8s;
    margin-bottom: 5px;
  }
  @media screen and (max-width: 1520px) {
    & > div p {
      font-size: 12px;
    }
    & > div h6 {
      font-size: 15px;
    }
  }
  @media screen and (max-width: 1301px) {
    display: none;
  }
`;

const ProfileImg = styled.div`
  width: 250px;
  height: 250px;
  border-radius: 50%;
  margin: 0 auto;
  margin-bottom: 30px;
  transform: translateY(20%);
  opacity: 0;
  animation: ${WhoAni2} 0.8s forwards 0.8s;
  overflow: hidden;
`;

const RightCol = styled.div`
  user-select: none;
  width: 100%;
  height: 100%;
  color: #3e4349;
  display: grid;
  grid-template-rows: 1fr 4fr;
  @media screen and (max-width: 1101px) {
    grid-template-rows: 1fr 5fr;
  }
`;

const Text1 = styled.div`
  width: 100%;
  height: 100%;
  ${flexCenterAlign}
  font-size:2.5rem;
  font-weight: 700;
  transform: translateY(20%);
  opacity: 0;
  animation: ${WhoAni2} 0.8s forwards 0.6s;
  animation-timing-function: cubic-bezier(0.46, 0.03, 0.52, 0.96);
  word-break: keep-all;

  @media screen and (max-width: 1670px) {
    font-size: 2.2rem;
  }
  @media screen and (max-width: 1520px) {
    font-size: 1.8rem;
  }
  @media screen and (max-width: 900px) {
    font-size: 1.6rem;
  }
  @media screen and (max-width: 750px) {
    font-size: 1.4rem;
  }
  @media screen and (max-width: 650px) {
    font-size: 1.25rem;
  }
`;

const Text2 = styled.div`
  width: 100%;
  height: 100%;
  padding: 5%;
  /* background-color: yellowgreen; */
  display: grid;
  grid-template-columns: 1fr 1fr;
  /* grid-column-gap: 30px; */
  grid-template-rows: 1fr 1fr;
  /* grid-row-gap: 30px; */
  @media screen and (max-width: 1101px) {
    grid-template-columns: 1fr;
    grid-template-rows: 1fr 1fr 1fr 1fr;
    padding: 0%;
  }
`;

const Text21 = styled.div`
  padding: 5%;
  transform: translateY(20%);
  opacity: 0;
  animation: ${WhoAni2} 0.8s forwards 1.1s;
  animation-timing-function: cubic-bezier(0.46, 0.03, 0.52, 0.96);
  transition: 0.3s all;
  & > h5 {
    font-size: 1.5rem;
    font-weight: bold;
    margin-bottom: 10px;
  }
  & > p {
    font-size: 16px;
    font-weight: 300;
    word-break: keep-all;
  }
  @media screen and (max-width: 1520px) {
    & > h5 {
      font-size: 1.3rem;
      margin-bottom: 5px;
    }
    & > p {
      font-size: 15px;
    }
  }
  @media screen and (max-width: 1101px) {
    padding: 0%;
  }
  @media screen and (max-width: 750px) {
    & > h5 {
      font-size: 1.2rem;
      margin-bottom: 5px;
    }
    & > p {
      font-size: 12px;
      margin-bottom: 10px;
    }
  }
`;
function Who() {
  useEffect(() => {
    console.log(
      '%c안녕하세요. 신입 프론트엔드 개발자 김영근입니다. 🧑‍💻',
      'color: #d7bca1; font-size:20px;',
    );
  }, []);
  return (
    <WhoOut>
      <Title>WHO</Title>
      <WhoMain>
        <LeftCol>
          <ProfileImg>
            <img src="./img/profile.jpg" alt="profile"></img>
          </ProfileImg>
          <div>
            <h6>Experience</h6>
            <p>LiteSeoul | Here&Hear | Minimal</p>
            <p>Exhibition 3D design</p>
          </div>
          <br></br>
          <div>
            <h6>Education</h6>
            <p>CodeStates 28</p>
            <p>GreenComputer Academy</p>
          </div>
        </LeftCol>
        <RightCol>
          <Text1>안녕하세요. 신입 프론트엔드 개발자 김영근입니다.</Text1>
          <Text2>
            <Text21>
              <h5>Who I am</h5>
              <p>
                발전하는 개발자가 되고 싶은 주니어 개발자 김영근입니다. 저는
                CodeStates에서 프로젝트와 페어프로그래밍을 통해 협업하는 방법을
                배우고, 2번의 협업 프로젝트로 커뮤니케이션, 개발과정에대해
                배우게 되었습니다.
              </p>
            </Text21>
            <Text21>
              <h5>Keep Learning</h5>
              <p>
                좋은 개발자가 되기위해 능동적으로 공부하는 능력이 중요하다고
                생각합니다. 아직은 많이 부족하지만, 끊임없이 배우는 자세를
                가지고 있다면 좋은 개발자로 성장 할수 있다고 생각합니다.
              </p>
            </Text21>
            <Text21>
              <h5>Like Design</h5>
              <p>
                개발과 디자인 기획은 동떨어져 있다고 생각하지 않습니다. 개발자의
                시선과 디자이너의 마인드를 모두 이해 할 수 있는 개발자가 되고
                싶습니다.
              </p>
            </Text21>
            <Text21>
              <h5>My Interest</h5>
              <p>
                개발공부를 하다보니 장비에대한 욕심이 생겨서 키보드, 모니터,
                컴퓨터, 의자 등에 관심을 많이 가지고 있습니다. 맛집, 커피, 카페
                등 예쁘고 새로운 장소를 좋아합니다.
              </p>
            </Text21>
          </Text2>
        </RightCol>
      </WhoMain>
    </WhoOut>
  );
}

export default Who;
