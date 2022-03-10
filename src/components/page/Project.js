import React from 'react';
import styled, { keyframes } from 'styled-components';

const ProjectOut = styled.div`
  width: 100%;
  height: 82vh;
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
}

`;
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
    opacity: 0.5;
  }
  @media screen and (max-width: 900px) {
    display: none;
  }
`;

const Grid2Ani = keyframes`
to{
  opacity:1;
  transform:scale(1);
}
`;

const Grid2 = styled.div`
  width: 100%;
  overflow: auto;
  opacity: 0;
  animation: ${Grid2Ani} 2s forwards;
  transform: scale(0.9);
  @media screen and (max-width: 1300px) {
    &::-webkit-scrollbar {
      display: none;
    }
  }
  &::-webkit-scrollbar {
    width: 4px;
  }
  &::-webkit-scrollbar-thumb {
    background-color: #ccc;
    border-radius: 4px;
  }
  & .contentLeft {
    margin: 0 auto;
    width: 100%;
    height: auto;
    padding: 5%;
    display: grid;
    grid-template-columns: 1fr 1fr;
    position: relative;
    @media screen and (max-width: 1300px) {
      display: flex;
      flex-direction: column;
      height: auto;
    }
    /* border: 1px solid pink; */
    &::after {
      content: '';
      position: absolute;
      width: 10%;
      height: 1px;
      background-color: #ccc;
      left: 50%;
      bottom: 0;
      transform: translateX(-50%);
    }
  }
  & .contentRight {
    margin: 0 auto;
    width: 100%;
    height: auto;
    padding: 5%;
    display: grid;
    grid-template-columns: 1fr 1fr;
    position: relative;
    /* border: 1px solid pink; */
    @media screen and (max-width: 1300px) {
      display: flex;
      flex-direction: column-reverse;
      height: auto;
    }
    &::after {
      content: '';
      position: absolute;
      width: 10%;
      height: 1px;
      background-color: #ccc;
      left: 50%;
      bottom: 0;
      transform: translateX(-50%);
    }
  }
  & > div:nth-child(3) {
    &::after {
      display: none;
    }
  }
`;

const Img = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  @media screen and (max-width: 1300px) {
    margin-top: 30px;
  }
  & video {
    width: 100%;
    transition: 0.3s all;
    box-shadow: rgba(136, 165, 191, 0.48) 6px 2px 16px 0px,
      rgba(255, 255, 255, 0.8) -6px -2px 16px 0px;
    &:hover {
      transform: translateY(-10px) scale(1.05);
    }
  }
`;

const Stack = styled.div`
  width: 100%;
  height: 10%;
  /* border: 1px solid red; */
  display: flex;
  align-items: center;
  justify-content: flex-start;
  color: #3e4349;
  font-size: 13px;
  & span {
    margin-right: 5px;
  }
`;
const Stack2 = styled.div`
  width: 100%;
  height: 10%;
  /* border: 1px solid red; */
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: #3e4349;
  font-size: 13px;
`;

const Logo = styled.div`
  width: 80%;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  & img {
    width: 25px;
    height: 25px;
    margin-right: 10px;
    transition: 0.3s all;
    &:hover {
      transform: scale(1.1);
    }
  }
`;
const Git = styled.div`
  /* width: 20%; */
  display: flex;
  align-items: center;
  justify-content: flex-end;
  & a {
    width: 30px;
    height: 30px;
    margin-left: 10px;
    & img {
      width: 30px;
      height: 30px;
      transition: 0.3s all;
      &:hover {
        transform: scale(1.1);
      }
    }
  }
`;

const Contents = styled.div`
  width: 100%;
  display: grid;
  /* border: 1px solid green; */
  grid-template-rows: 1fr 3fr;
  padding: 15% 5%;

  & div:nth-child(1) {
    display: flex;
    align-items: flex-end;
    justify-content: flex-end;
    color: #3e4349;
    position: relative;
    /* border: 1px solid blue; */
    &::after {
      content: '';
      position: absolute;
      width: 15%;
      height: 2px;
      background-color: #ccc;
      right: 0;
      bottom: 0;
    }
    & span:nth-child(1) {
      font-size: 2.5rem;
      font-weight: bold;
    }
    & span:nth-child(2) {
      font-size: 1.8rem;
      font-weight: bold;
    }
  }
  & div:nth-child(2) {
    padding-top: 30px;
    text-align: right;
    color: #3e4349;
    font-size: 13px;
    word-break: keep-all;
    line-height: 1.5rem;
    & > p {
      color: #999;
      &:hover {
        color: #ff5311;
      }
    }
  }
  @media screen and (max-width: 1300px) {
    height: auto;
    padding: 5% 5%;
    & div:nth-child(1) {
      justify-content: center;
      &::after {
        content: '';
        position: absolute;
        width: 15%;
        height: 2px;
        background-color: #ccc;
        right: 50%;
        transform: translateX(50%);
        bottom: -10px;
      }
    }
    & div:nth-child(2) {
      text-align: center;
    }
  }
  @media screen and (max-width: 1000px) {
    & div:nth-child(1) {
      & span:nth-child(1) {
        font-size: 2rem;
        font-weight: bold;
      }
    }
  }
`;

const Contents2 = styled.div`
  width: 100%;
  display: grid;
  grid-template-rows: 1fr 3fr;
  padding: 15% 5%;
  @media screen and (max-width: 1300px) {
    height: auto;
    padding: 5% 5%;
  }
  & div:nth-child(1) {
    display: flex;
    align-items: flex-start;
    justify-content: flex-start;
    color: #3e4349;
    position: relative;
    &::after {
      content: '';
      position: absolute;
      width: 15%;
      height: 2px;
      background-color: #ccc;
      left: 0;
      bottom: 0;
    }
    & span:nth-child(1) {
      font-size: 2.5rem;
      font-weight: bold;
    }
    & span:nth-child(2) {
      font-size: 1.8rem;
    }
  }
  & div:nth-child(2) {
    padding-top: 30px;
    text-align: left;
    color: #3e4349;
    font-size: 13px;
    word-break: keep-all;
    line-height: 1.5rem;
    & > p {
      color: #999;
      &:hover {
        color: #ff5311;
      }
    }
  }
  @media screen and (max-width: 1300px) {
    height: auto;
    padding: 5% 5%;
    & div:nth-child(1) {
      justify-content: center;
      &::after {
        content: '';
        position: absolute;
        width: 15%;
        height: 2px;
        background-color: #ccc;
        left: 50%;
        transform: translateX(-50%);
        bottom: -10px;
      }
    }
    & div:nth-child(2) {
      text-align: center;
    }
  }
  @media screen and (max-width: 1000px) {
    & div:nth-child(1) {
      & span:nth-child(1) {
        font-size: 2rem;
        font-weight: bold;
      }
    }
  }
`;

function Project() {
  const handleVideo = (e) => {
    e.target.play();
  };
  const handleVideo2 = (e) => {
    e.target.pause();
  };

  return (
    <ProjectOut>
      <Title>PROJECT</Title>
      <Grid2>
        <div className="contentRight">
          <Contents2>
            <div>
              <span>Here&Hear</span>
            </div>
            <div>
              코로나 언택트 시대에 여행을 가지 못하는 많은 사람들을 위해 바로
              지금, 여기에서 여행을 간 것처럼 느낄 수 있게 해주는 간접체험 asmr
              서비스입니다.
              <p>
                #React #React-Router-Dom #Redux #Firebase #Axios #TypeScript
                #CSS
              </p>
            </div>
          </Contents2>
          <Img>
            <a href="https://hereandhear.kr/" target="blank">
              <video
                src="./video/here.mov"
                alt="Here&Hear"
                onMouseOver={handleVideo}
                onMouseOut={handleVideo2}
                muted
                loop
              ></video>
            </a>
            <Stack2>
              <Git>
                <a
                  href="https://github.com/codestates/HereandHear-client"
                  target="blank"
                >
                  <img src="./icon/github.svg" alt="github"></img>
                </a>
                <a
                  href="https://codestates.notion.site/4-HellCoders-LiteSeoul-e9ff4c7c6fce42f8a745e55af754b821"
                  target="blank"
                >
                  <img src="./img/logo1.png" alt="here & hear"></img>
                </a>
              </Git>
            </Stack2>
          </Img>
        </div>
        {/* 프로젝트 1  */}
        <div className="contentLeft">
          <Img>
            <a href="http://liteseoul.com" target="blank">
              <video
                src="./video/liteseoul.mov"
                alt="LiteSeoul"
                muted
                loop
                onMouseOver={handleVideo}
                onMouseOut={handleVideo2}
              ></video>
            </a>
            <Stack>
              {/* <Logo>
                <img src="./icon/react.svg" alt="react"></img>
                <img
                  src="./icon/react-router-dom.svg"
                  alt="react-router-dom"
                ></img>
                <img src="./icon/axios.svg" alt="axios"></img>
                <img src="./icon/ts.svg" alt="typescript"></img>
                <img
                  src="./icon/styled-components.png"
                  alt="styled-components"
                ></img>
              </Logo> */}
              <Git>
                <a
                  href="https://github.com/codestates/LiteSeoul-client"
                  target="blank"
                >
                  <img src="./icon/github.svg" alt="github"></img>
                </a>
                <a
                  href="https://codestates.notion.site/4-HellCoders-LiteSeoul-e9ff4c7c6fce42f8a745e55af754b821"
                  target="blank"
                >
                  <img src="./icon/notion.svg" alt="notion"></img>
                </a>
              </Git>
            </Stack>
          </Img>
          <Contents>
            <div>
              <span>LiteSeoul</span>
            </div>
            <div>
              "당신의 서울, 서울을 깨끗하게"<br></br>
              LiteSeoul은 서울의 '제로 웨이스트 샵'을 추천, 찾아주는 서비스의 웹
              어플리케이션입니다. React를 기반으로 제작된 웹 어플리케이션이며,
              전체적 웹디자인과 퍼블리싱 작업, 반응형, Kakao Map API를
              커스터마이징 하여, 웹페이지의 주된 컨텐츠를 제작하였습니다.
              4주간의 Front-end, Back-end 개발자의 협업으로 작업이
              진행되었습니다.
              <p>
                #React #React-Router-Dom #Axios #TypeScript #Styled-Components{' '}
              </p>
            </div>
          </Contents>
        </div>
        {/* 프로젝트 2  */}
      </Grid2>
    </ProjectOut>
  );
}

export default Project;
