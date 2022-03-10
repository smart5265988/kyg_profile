import React from 'react';
import styled from 'styled-components';
import { flexCenterAlign } from '../style/styleConstants';
const FooterOut = styled.div`
  height: 10vh;
  min-height: 20px;
  min-width: 300px;
  ${flexCenterAlign}
  max-width: 1800px;
  /* border-top: 1px solid #ccc; */
  user-select: none;
`;

const FooterText = styled.div`
  margin: 0 auto;
  width: 90%;
  height: 100%;
  text-align: center;
  ${flexCenterAlign}
  font-size: 0.6rem;
  color: #ccc;
`;

function Footer() {
  return (
    <FooterOut>
      <FooterText>© 2022 Kim Young Geun Profile</FooterText>
    </FooterOut>
  );
}

export default Footer;
