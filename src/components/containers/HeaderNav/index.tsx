/* eslint-disable no-use-before-define */
import React from 'react';
import styled from 'styled-components';
import logo from '../../../assets/img/logo.png';
import building from '../../../assets/img/building.png';

function HeaderNav() {
  return (
    <HeaderContainer>
      <div>
        <LogoImg src={logo} alt="logo" />
      </div>
      <NavContainer>
        <NavImgBox>
          <NavImg src={building} alt="buliding" />
        </NavImgBox>
        <NavCompanyBox>
          <NavText>A 가공업체</NavText>
        </NavCompanyBox>
        <NavBarBox />
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
`;

const LogoImg = styled.img`
  width: 153px;
  height: 20px;
  margin-right: 10px;
`;

const NavContainer = styled.div`
  height: 50px;
  display: flex;
  align-items: flex-start;
`;

const NavBox = styled.div`
  margin-left: 32px;
  margin-top: 2px;
`;

const NavBarBox = styled.div`
  width: 1px;
  height: 16px;
  background-color: ${({ theme }) => theme.color.defaultWhite};
  margin-left: 32px;
  margin-top: 2px;
`;

const NavImgBox = styled.div`
  margin-bottom: px;
`;

const NavCompanyBox = styled.div`
  margin-left: 8px;
  margin-top: 2px;
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
