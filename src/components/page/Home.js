import React, { useEffect } from 'react';
import styled from 'styled-components';
import { flexCenterAlign } from '../style/styleConstants';
import Logo from '../SVG/Logo';

const HomeOut = styled.div`
  width: 100%;
  height: 82vh;
  position: absolute;
  ${flexCenterAlign};
  /* background-color: red; */
  padding: 15px;
`;
const SvgOut = styled.div`
  width: 60%;
  @media screen and (max-width: 1390px) {
    width: 65%;
  }
  @media screen and (max-width: 1100px) {
    width: 80%;
  }
  @media screen and (max-width: 850px) {
    width: 90%;
  }
  @media screen and (max-width: 700px) {
    width: 100%;
  }
`;

function Home() {
  useEffect(() => {
    console.log(
      '%c방문해주셔서 감사합니다! 😃',
      'color: #d7bca1; font-size:20px;',
    );
  }, []);

  return (
    <HomeOut>
      <SvgOut>
        <Logo />
      </SvgOut>
    </HomeOut>
  );
}

export default Home;
