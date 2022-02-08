import React, { useEffect, useState } from 'react';
import { connect, useDispatch, useSelector } from 'react-redux';
import ToggleBtn from 'components/atoms/ToggleBtn';
import styled from 'styled-components';
import store from '../../../store/store';
import { fetchData, filterStatus } from '../../../store/request';

type RootState = ReturnType<typeof store.getState>;

function IsConsult() {
  const { isConsulting } = useSelector((state: RootState) => state.requests);
  const dispatch = useDispatch();
  const onChangeToggle = (): void => {
    dispatch(filterStatus());
  };

  return (
    <div>
      <IsConsultContainer>
        <div>
          <ToggleBtn
            size={1}
            isToggle={isConsulting}
            disabled={false}
            onChange={onChangeToggle}
          />
        </div>
        <IsConsultMention>
          <MentionText>상담 중인 요청만 보기</MentionText>
        </IsConsultMention>
      </IsConsultContainer>
    </div>
  );
}

const IsConsultContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 179px;
  height: 20px;
`;

const IsConsultMention = styled.div`
  display: flex;
  align-items: center;
  width: 126px;
  height: 20px;
`;

const MentionText = styled.span`
  font-size: ${({ theme }) => theme.fontSize.middle};
  font-weight: ${({ theme }) => theme.fontWeight.large};
  color: ${({ theme }) => theme.color.defaultGray};
`;

export default IsConsult;
