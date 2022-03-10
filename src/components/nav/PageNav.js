import React from 'react';
import styled, { keyframes } from 'styled-components';
import { NavLink } from 'react-router-dom';

const PageNavAni = keyframes`
0%{
  bottom:-150px;
}
100%{
  bottom:0px;
}
`;

const PageNavOut = styled.div`
  height: 5vh;
  min-width: 300px;
  min-height: 30px;
  max-width: 1800px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  animation: ${PageNavAni} 1.2s;
  user-select: none;

  & ul {
    width: 300px;
    height: 100%;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    position: relative;
    /* border: 1px solid green; */

    & li {
      width: 10px;
      height: 10px;
      /* margin-right: 60px; */
      cursor: pointer;
      & a {
        width: 10px;
        height: 10px;
        display: block;
        border-radius: 50%;
        cursor: pointer;
        transition: all 0.3s;
        border: 1px solid #ccc;
        transition: all 0.3s;
      }
      & a:hover {
        transform: scale(1.5);
      }
      & a.active {
        background-color: #3e4349;
        border: none;
      }
    }
  }
`;

function PageNav() {
  return (
    <PageNavOut>
      <ul>
        <li>
          <NavLink exact to="/home"></NavLink>
        </li>

        <li>
          <NavLink exact to="/who"></NavLink>
        </li>

        <li>
          <NavLink exact to="/skill"></NavLink>
        </li>

        <li>
          <NavLink exact to="/project"></NavLink>
        </li>
        <li>
          <NavLink exact to="/contact"></NavLink>
        </li>
      </ul>
    </PageNavOut>
  );
}

export default PageNav;
