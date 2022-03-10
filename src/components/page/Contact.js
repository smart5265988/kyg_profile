import React, { useEffect } from 'react';
import styled, { keyframes } from 'styled-components';

const ContactOut = styled.div`
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
}`;

const Title = styled.div`
  width: 100%;
  height: auto;
  font-size: 2.5rem;
  position: relative;
  font-weight: bold;
  color: #3e4349;
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

const ContactLiAni = keyframes`
to{
  transform: translateY(0%);
  opacity:1;
}
`;

const ContactUl = styled.ul`
  margin: 0 auto;
  margin-top: 30px;
  width: 90%;
  height: 90%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  color: #3e4349;
  /* border: 1px solid red; */
  & > li {
    width: 100%;
    /* border: 1px solid red; */
    text-align: center;
    flex-grow: 1;
    display: flex;
    flex-direction: column;
    justify-content: center;
    position: relative;
    & div a {
      color: #3e4349;
    }
    & div:nth-child(1) {
      margin-bottom: 20px;
      font-size: 1rem;
      font-weight: bolder;
    }
    & div:nth-child(2) {
      font-size: 1rem;
      cursor: pointer;
      letter-spacing: 1.2px;
      transition: 0.3s all;
      &:hover {
        transform: translateY(-20%);
      }
    }
  }
  & > li:nth-child(1) {
    opacity: 0;
    transform: translateY(20%);
    animation: ${ContactLiAni} 1s forwards;
  }
  & > li:nth-child(2) {
    opacity: 0;
    transform: translateY(20%);
    animation: ${ContactLiAni} 1s forwards 0.3s;
  }
  & > li:nth-child(3) {
    opacity: 0;
    transform: translateY(20%);
    animation: ${ContactLiAni} 1s forwards 0.6s;
  }
  @media screen and (max-width: 600px) {
    & > li {
      & div:nth-child(1) {
        font-size: 1.2rem;
      }
      & div:nth-child(2) {
        font-size: 0.8rem;
      }
    }
  }
`;
const UnderLine = styled.div`
  position: absolute;
  left: 50%;
  margin-left: -40px;
  bottom: 0;
  width: 80px;
  border-top: 1px solid #3e4349;
`;
function Contact() {
  useEffect(() => {
    console.log(
      '%c연락을 기다리고 있습니다 🙏🏻',
      'color: #d7bca1; font-size:20px;',
    );
  }, []);
  return (
    <ContactOut>
      <Title>CONTACT</Title>

      <ContactUl>
        <li>
          <div>Email</div>
          <div>smart52988@gmail.com</div>
          <UnderLine></UnderLine>
        </li>

        <li>
          <div>Github</div>
          <div>
            <a href="https://github.com/smart5265988" target="blank">
              github.com/smart5265988
            </a>
          </div>
          <UnderLine></UnderLine>
        </li>

        <li>
          <div>Blog</div>
          <div>
            <a href="https://velog.io/@smart5265988" target="blank">
              velog.io/@smart5265988
            </a>
          </div>
        </li>
      </ContactUl>
    </ContactOut>
  );
}

export default Contact;
