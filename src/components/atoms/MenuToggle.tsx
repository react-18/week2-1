/* eslint react/prop-types: 0 */
/* eslint-disable no-use-before-define */
import React, { Dispatch, SetStateAction } from 'react';
import styled from 'styled-components';
import hamburger from 'assets/img/hamburger.png';

export type TSideBar = {
  isSideBarOpened: boolean;
  setIsSideBarOpened: Dispatch<SetStateAction<boolean>>;
};

function MenuToggle({ isSideBarOpened, setIsSideBarOpened }: TSideBar) {
  const onClickButton = () => {
    setIsSideBarOpened(!isSideBarOpened);
  };

  return (
    <ToggleButton>
      <Icon src={hamburger} onClick={onClickButton} alt="hamburger" />
    </ToggleButton>
  );
}

const Icon = styled.img.attrs({
  className: 'toggleButton',
})`
  width: 18px;
  cursor: pointer;
`;
const ToggleButton = styled.button`
  display: none;

  @media only screen and (max-width: 360px) {
    display: flex;
    margin-right: 20px;
  }
`;

export default MenuToggle;
