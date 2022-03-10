import React from 'react';
import styled, { keyframes } from 'styled-components';
import { NavLink } from 'react-router-dom';
import { flexCenterAlign } from '../style/styleConstants';

const NavAni = keyframes`
0%{
  top:-60px;
}
100%{
  top:0px;
}
`;
const NavOut = styled.div`
  width: 100%;
  min-width: 300px;
  height: 8vh;
  min-height: 60px;
  position: relative;
  /* background-color: red; */
  animation: ${NavAni} 1.2s;
  user-select: none;
  @media screen and (max-width: 1000px) {
    animation: none;
  }
`;
const NavMenu = styled.div`
  /* background-color: gray; */
  width: 80%;
  height: 100%;
  min-height: 60px;
  min-width: 300px;
  margin: 0 auto;
`;

const TopMenuBtns = styled.ul`
  /* border: 1px solid white; */
  height: 100%;
  display: flex;
  ${flexCenterAlign};
  @media screen and (max-width: 1000px) {
    display: none;
  }
  & > li {
    /* border: 1px solid green; */
    width: 120px;
    height: 100%;
    margin-right: 20px;
    ${flexCenterAlign};
    font-size: 1.3rem;
    font-weight: 400;
  }
  & > li a {
    transition: all 0.1s;
    cursor: pointer;
    color: #3e4349;
    font-size: 0.8rem;
    letter-spacing: 3px;
    position: relative;
    &::after {
      transition: 0.3s all;
      content: '';
      position: absolute;
      bottom: -10px;
      width: 0%;
      height: 2px;
      background-color: #d7bca1;
      left: 50%;
      transform: translateX(-50%);
    }
  }
  & > li:hover a {
    color: #000;
    &::after {
      content: '';
      position: absolute;
      bottom: -10px;
      width: 100%;
      height: 2px;
      background-color: #d7bca1;
      left: 50%;
      transform: translateX(-50%);
    }
  }
  & > li a.active::after {
    content: '';
    position: absolute;
    bottom: -10px;
    width: 100%;
    height: 2px;
    background-color: #d7bca1;
    left: 50%;
    transform: translateX(-50%);
  }
  & > li a.active {
    color: #d7bca1;
    font-weight: bold;
  }
`;

const TopMenuBtns2 = styled.ul`
  @media screen and (max-width: 1001px) {
    display: flex;
    &.NavHidden {
      right: 0;
    }
  }
  transition: 0.3s all;
  width: 100%;
  height: 100vh;
  display: none;
  background-color: #fff;
  position: absolute;
  right: -100%;
  z-index: 900;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  /* right: -100%; */

  & > li {
    /* border: 1px solid green; */
    width: 100%;
    height: 50px;
    ${flexCenterAlign};
  }
  & > li a {
    transition: all 0.1s;
    cursor: pointer;
    color: #3e4349;
    font-size: 1.2rem;
    letter-spacing: 3px;
    position: relative;
    width: 100%;
    height: 100%;
    ${flexCenterAlign};
    transition: 1s all;
  }
  & > li a.active {
    background-color: #d7bca1;
    color: #fff;
  }
`;

const Menu = styled.div`
  @media screen and (max-width: 1001px) {
    display: block;
    &.NavBtn {
      background-image: url('/icon/close_white.svg');
    }
  }
  cursor: pointer;
  display: none;
  width: 30px;
  height: 30px;
  position: absolute;
  right: 5%;
  top: 50%;
  transform: translateY(-50%);
  z-index: 999;
  background-image: url('/icon/menu_white.svg');
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
`;

function Nav() {
  const handelNav = () => {
    document.getElementById('NavHidden')?.classList.toggle('NavHidden');
    document.getElementById('NavMenu')?.classList.toggle('NavBtn');
  };

  const handelNav2 = () => {
    document.getElementById('NavHidden')?.classList.remove('NavHidden');
    document.getElementById('NavMenu')?.classList.remove('NavBtn');
  };

  return (
    <NavOut>
      <NavMenu>
        <Menu id="NavMenu" onClick={handelNav}></Menu>
        <TopMenuBtns>
          <li>
            <NavLink exact to="/home">
              HOME
            </NavLink>
          </li>
          <li>
            <NavLink exact to="/who">
              WHO
            </NavLink>
          </li>
          <li>
            <NavLink exact to="/skill">
              SKILL
            </NavLink>
          </li>
          <li>
            <NavLink exact to="/project">
              PROJECT
            </NavLink>
          </li>
          <li>
            <NavLink exact to="/contact">
              CONTACT
            </NavLink>
          </li>
        </TopMenuBtns>

        {/* 반응형 */}
        <TopMenuBtns2 id="NavHidden">
          <li onClick={handelNav2}>
            <NavLink exact to="/home">
              HOME
            </NavLink>
          </li>
          <li onClick={handelNav2}>
            <NavLink exact to="/who">
              WHO
            </NavLink>
          </li>
          <li onClick={handelNav2}>
            <NavLink exact to="/skill">
              SKILL
            </NavLink>
          </li>
          <li onClick={handelNav2}>
            <NavLink exact to="/project">
              PROJECT
            </NavLink>
          </li>
          <li onClick={handelNav2}>
            <NavLink exact to="/contact">
              CONTACT
            </NavLink>
          </li>
        </TopMenuBtns2>
      </NavMenu>
    </NavOut>
  );
}

export default Nav;
