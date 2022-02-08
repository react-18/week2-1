/* eslint-disable no-use-before-define */
import React from 'react';
import refresh from 'assets/img/refresh.png';
import styled from 'styled-components';

function ResetButton() {
  return (
    <Button type="button">
      <img src={refresh} alt="reset" />
      <span>필터링 리셋</span>
    </Button>
  );
}

export default ResetButton;

const Button = styled.button`
  color: ${({ theme }) => theme.color.accentPrimaryBlue};
  display: flex;
  align-items: center;

  img {
    width: 16px;
    height: 16px;
    margin-right: 12px;
  }

  span {
    font-size: ${({ theme }) => theme.fontSize.small};
    line-height: 1.25rem;
  }
`;
