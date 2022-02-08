/* eslint-disable no-use-before-define */
import React from 'react';
import styled from 'styled-components';

function NoRequest() {
  return (
    <Wrapper>
      <Text>조건에 맞는 견적 요청이 없습니다.</Text>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 1130px;
  height: 100px;
  border: 1px solid ${({ theme }) => theme.color.darkGray};
  border-radius: ${({ theme }) => theme.border.radius};
`;

const Text = styled.div`
  font-size: ${({ theme }) => theme.fontSize.middle};
  color: ${({ theme }) => theme.color.subGray};
`;

export default NoRequest;
