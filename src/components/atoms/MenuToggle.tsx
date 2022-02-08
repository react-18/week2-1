/* eslint react/prop-types: 0 */
/* eslint-disable no-use-before-define */
import React, { Dispatch, SetStateAction } from 'react';
import styled from 'styled-components';

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
      <Icon src="/images/hamburger.png" onClick={onClickButton} />
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
  background-color: blue;
`;

export default MenuToggle;
