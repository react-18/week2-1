/* eslint-disable no-use-before-define */
import React, { useEffect, useState } from 'react';
import ToggleBtn from 'components/atoms/ToggleBtn';
import styled from 'styled-components';
import { API_URL } from '../../../constants';

interface Idata {
  id: number;
  title: string;
  client: string;
  due: string;
  count: number;
  amount: number;
  method: string[];
  material: string[];
  status: string;
}

function IsConsult() {
  const [dataStore, setDataStore] = useState<Idata[]>([]);
  const [filteredData, setFilteredData] = useState<Idata[]>([]);

  const [toggle, setToggle] = useState<boolean>(false);

  const onChangeToggle = (): void => {
    setToggle((state) => !state);
    if (!toggle) {
      const filtered: Array<Idata> = dataStore.filter(
        (item: Idata): boolean => item.status === '상담중',
      );
      setFilteredData([...filtered]);
    } else {
      setFilteredData([...dataStore]);
    }
  };

  const getData = async () => {
    const data = await fetch(API_URL)
      .then((res) => res.json())
      .then((json) => json.requests);
    setDataStore(data);
    setFilteredData(data);
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      <IsConsultContainer>
        <div>
          <ToggleBtn
            size={1}
            isToggle={toggle}
            disabled={false}
            onChange={onChangeToggle}
          />
        </div>
        <IsConsultMention>
          <MentionText>상담 중인 요청만 보기</MentionText>
        </IsConsultMention>
      </IsConsultContainer>
      {filteredData?.map((item) => (
        <div key={item.id}>{item.title}</div>
      ))}
    </>
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
