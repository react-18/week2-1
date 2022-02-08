import React from 'react';
import refresh from 'assets/img/refresh.png';
import styled from 'styled-components';
import { filterMethod, filterMaterial } from 'store/request';
import { useDispatch } from 'react-redux';

function ResetButton() {
  const dispatch = useDispatch();

  const handleReset = () => {
    dispatch(filterMethod([]));
    dispatch(filterMaterial([]));
  };

  return (
    <Button type="button" onClick={handleReset}>
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
