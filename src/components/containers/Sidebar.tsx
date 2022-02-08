/* eslint-disable no-use-before-define */
import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';
import { TSideBar } from './MenuToggle';

function Sidebar({ isSideBarOpened, setIsSideBarOpened }: TSideBar) {
  const sideBarRef = useRef<HTMLInputElement>(null);
  const handleClickOutside = (e: MouseEvent): void => {
    const target = e.target as HTMLElement;

    if (
      !target.classList.contains('toggleButton') &&
      target.tagName !== 'ASIDE'
    )
      setIsSideBarOpened(false);
  };

  useEffect(() => {
    window.addEventListener('click', handleClickOutside);
    return () => {
      window.removeEventListener('click', handleClickOutside);
    };
  }, []);

  useEffect(() => {
    if (sideBarRef.current) {
      if (isSideBarOpened) {
        sideBarRef.current.style.transform = 'translateX(0)';
      } else {
        sideBarRef.current.style.transform = 'translateX(-100%)';
      }
    }
  }, [isSideBarOpened]);
  return (
    <Wrapper ref={sideBarRef}>
      <Header>
        <LogoImg src="images/logo-blue.png" />
      </Header>
      <Container>
        <ul>
          <Menu>
            <MenuImg src="images/building-gray.png" />
            <Text>파트너정밀가공</Text>
          </Menu>
        </ul>
        <Logout>로그아웃</Logout>
      </Container>
    </Wrapper>
  );
}

const Wrapper = styled.aside`
  position: absolute;
  width: 280px;
  height: 730px;
  background-color: ${({ theme }) => theme.color.defaultWhite};
  box-shadow: 0px 0px 2px rgba(0, 0, 0, 0.12), 0px 2px 2px rgba(0, 0, 0, 0.24);
  transform: translateX(-100%);
  transition: all 0.2s ease-in;
`;

const Header = styled.header`
  display: flex;
  padding: 20px;
  border-bottom: 1px solid ${({ theme }) => theme.color.backgroundGray};
`;

const LogoImg = styled.img`
  width: 91.52px;
  height: 12px;
`;

const Container = styled.div`
  padding: 30px 0 0 30px;
`;

const Menu = styled.li`
  display: flex;
  align-items: center;
`;

const MenuImg = styled.img`
  width: 15px;
  height: 15px;
`;

const Text = styled.p`
  padding-left: 8px;
  height: 20px;
  font-size: ${({ theme }) => theme.fontSize.middle};
  line-height: calc(${({ theme }) => theme.fontSize.middle} * 2);
`;

const Logout = styled.button`
  margin-top: 15px;
  padding: 0;
  font-size: ${({ theme }) => theme.fontSize.middle};
  font-weight: ${({ theme }) => theme.fontWeight.large};
  line-height: calc(${({ theme }) => theme.fontSize.middle} * 2);
`;

export default Sidebar;
