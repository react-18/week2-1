/* eslint-disable no-use-before-define */
import React, { useState } from 'react';
import styled from 'styled-components';
import MenuToggle from 'components/atoms/MenuToggle';
import logo from '../../../assets/img/logo.png';
import building from '../../../assets/img/building.png';

function HeaderNav() {
  const [isSideBarOpened, setIsSideBarOpened] = useState(false);

  return (
    <HeaderContainer>
      <MenuToggle
        isSideBarOpened={isSideBarOpened}
        setIsSideBarOpened={setIsSideBarOpened}
      />
      <div>
        <LogoImg src={logo} alt="logo" />
      </div>
      <NavContainer>
        <NavImg src={building} alt="buliding" />
        <NavBox>
          <NavText>A 가공업체</NavText>
        </NavBox>
        <NavBox>
          <NavText>|</NavText>
        </NavBox>
        <NavBox>
          <NavText>로그아웃</NavText>
        </NavBox>
      </NavContainer>
    </HeaderContainer>
  );
}

const HeaderContainer = styled.div`
  width: 100%;
  height: 70px;
  background-color: ${({ theme }) => theme.color.primaryBlue};
  display: flex;
  justify-content: space-between;
  padding: 25px 40px 25px 40px;

  @media only screen and (max-width: 360px) {
    justify-content: flex-start;
    align-items: center;
    padding: 25px 23px;
  }
`;

const LogoImg = styled.img`
  width: 153px;
  height: 20px;
  margin-right: 10px;
`;

const NavContainer = styled.div`
  display: flex;

  @media only screen and (max-width: 360px) {
    display: none;
  }
`;

const NavBox = styled.div`
  margin-left: 32px;
`;

const NavImg = styled.img`
  width: 16.67px;
  height: 15px;
`;

const NavText = styled.span`
  color: ${({ theme }) => theme.color.defaultWhite};
  font-size: ${({ theme }) => theme.fontSize.middle};
`;

export default HeaderNav;
