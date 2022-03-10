import React from 'react';
import styled, { keyframes } from 'styled-components';

const SkillOut = styled.div`
  width: 100%;
  height: 82vh;
  position: absolute;
  display: grid;
  grid-template-rows: 1fr 11fr;
  @media screen and (max-width: 900px) {
    grid-template-rows: 1fr;
  }
`;

const SkillAni = keyframes`

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
    width: 30px;
    height: 2px;
    background-color: #3e4349;
    /* bottom: 3px; */
    opacity: 0.5;
  }
  @media screen and (max-width: 900px) {
    display: none;
  }
`;
const SkillContents = styled.div`
  width: 100%;
  height: 100%;
  padding: 3% 5%;
  display: grid;
  grid-template-columns: 3fr 1fr;
  @media screen and (max-width: 1501px) {
    grid-template-columns: 1fr;
  }
`;

const First = styled.div`
  width: 100%;
  height: 100%;
  padding: 5%;
`;
const Text = styled.div`
  width: 100%;
  height: 100%;
  padding-bottom: 30%;
  /* background-color: lightgrey; */
  color: #3e4349;
  font-weight: 300;
  word-break: keep-all;
  line-height: 2rem;
  opacity: 0;
  animation: ${SkillAni} 1s forwards 1s;
  display: flex;
  align-items: flex-end;
  @media screen and (max-width: 1501px) {
    padding-bottom: 0;
    align-items: center;
  }
  @media screen and (max-width: 1001px) {
    font-size: 1rem;
  }
  @media screen and (max-width: 500px) {
    font-size: 0.8rem;
    height: 50%;
  }
`;

const Icon = styled.div`
  width: 100%;
  height: 100%;
  /* border: 1px solid red; */
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: repeat(2) 1fr;
  grid-row-gap: 20px;
  grid-column-gap: 20px;
  & div {
    /* border: 1px solid blue; */
    display: flex;
    align-items: center;
    justify-content: center;
    opacity: 0;
    & > img {
      width: 120px;
    }
  }
  & div:nth-child(1) {
    animation: ${SkillAni} 1s forwards;
  }
  & div:nth-child(2) {
    animation: ${SkillAni} 1s forwards 0.2s;
  }
  & div:nth-child(3) {
    animation: ${SkillAni} 1s forwards 0.4s;
  }
  & div:nth-child(4) {
    animation: ${SkillAni} 1s forwards 0.6s;
  }
  & div:nth-child(5) {
    animation: ${SkillAni} 1s forwards 0.8s;
  }
  & div:nth-child(6) {
    animation: ${SkillAni} 1s forwards 1s;
  }
  @media screen and (max-width: 600px) {
    & div {
      & > img {
        width: 90px;
      }
    }
  }
  @media screen and (max-width: 490px) {
    & div {
      & > img {
        width: 70px;
      }
    }
  }
`;

function Skill() {
  return (
    <SkillOut>
      <Title>SKILL</Title>
      <SkillContents>
        <First>
          <Icon>
            <div>
              <img src="./icon/react.svg" alt="react"></img>
            </div>

            <div>
              <img src="./icon/js.svg" alt="JavaScript"></img>
            </div>

            <div>
              <img src="./icon/ts.svg" alt="TypeScript"></img>
            </div>

            <div>
              <img src="./icon/html.svg" alt="Html"></img>
            </div>

            <div>
              <img src="./icon/css.svg" alt="css"></img>
            </div>

            <div>
              <img
                src="./icon/styled-components.svg"
                alt="styled-components"
              ></img>
            </div>
          </Icon>
        </First>
        <Text>
          React, Javascript 기반의 전반적인 프론트엔드 개발 능력과 Typescript를
          이용한 에러방지, CSS를 활용하여 반응협 웹과 사용자 경험을 중점으로
          UI를 디자인한 경험이 있습니다.
        </Text>
      </SkillContents>
    </SkillOut>
  );
}

export default Skill;
