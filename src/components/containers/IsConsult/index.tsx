import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import ToggleBtn from 'components/atoms/ToggleBtn';
import styled from 'styled-components';
import store from '../../../store/store';
import { filterStatus } from '../../../store/request';

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
  font-size: ${({ theme }) => theme.fontSize.small};
  font-weight: 500;
  color: ${({ theme }) => theme.color.defaultGray};
`;

export default IsConsult;
