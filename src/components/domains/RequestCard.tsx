import React from 'react';
import styled, { css } from 'styled-components';
import Button from '../atoms/Button';
import DetailText from '../atoms/DetailText';

// enum Method {
//     milling= '밀링',
//     lathe= '선반'
// }
// enum Material {
//     aluminum= '알루미늄',
//     carbonSteel= '탄소강',
//     carbonSteel= '탄소강',
//     copper= '구리',
//     alloySteel= '합금강',
//     steel= '강철',
// }

type RequestInfo = {
  id: number;
  title: string;
  client: string;
  due: string;
  count: number;
  amount: number;
  method: string[];
  material: string[];
  status: string;
};

interface Props {
  initialState: RequestInfo;
}

interface TextProps {
  fontSize?: number;
  lineHeight?: number;
  isBold?: boolean;
  isSubGray?: boolean;
  marginTop?: number;
}

interface WrapperProps {
  isRow?: boolean;
  marginTop?: number;
}

function RequestCard({ initialState }: Props) {
  const { title, client, due, count, amount, method, material, status } =
    initialState;

  return (
    <StyledRequestCard>
      <StyledWrapper>
        {status === '대기중' ? (
          <StyledText isBold fontSize={16} lineHeight={24}>
            {title}
          </StyledText>
        ) : (
          <CounselWrapper>
            <StyledText isBold fontSize={16} lineHeight={24}>
              {title}
            </StyledText>
            <CounselText>{status}</CounselText>
          </CounselWrapper>
        )}
        <StyledText marginTop={4}>{client}</StyledText>
        <StyledText isSubGray marginTop={24}>
          {due}까지 납기
        </StyledText>
      </StyledWrapper>
      <Horizon />
      <StyledWrapper marginTop={32}>
        <DetailText title="도면개수" content={count} />
        <DetailText title="총 수량" content={amount} />
        <DetailText title="가공방식" content={arrayToString(method)} />
        <DetailText
          title="재료"
          content={arrayToString(material)}
          marginBottom={6}
        />
      </StyledWrapper>
      <StyledWrapper isRow marginTop={32}>
        <Button
          width={108}
          height={32}
          borderRadius={4}
          constrast
          marginRight={8}
        >
          요청 내역 보기
        </Button>
        <Button width={76} height={32} borderRadius={4}>
          채팅하기
        </Button>
      </StyledWrapper>
    </StyledRequestCard>
  );
}

const arrayToString = (array: string[]) => {
  return array.join(',');
};

const StyledRequestCard = styled.div`
  display: flex;
  flex-direction: column;
  width: 366px;
  height: 356px;
  padding: 24px 16px;

  ${({ theme }) => css`
    border: 1px solid ${theme.color.backgroundGray};
    border-radius: ${theme.border.radius};

    &:hover {
      border: 1px solid ${theme.color.accentPrimaryBlue};
    }
  `}
`;

const StyledWrapper = styled.div<WrapperProps>`
  display: flex;
  width: 100%;

  ${({ isRow, marginTop }) => css`
    flex-direction: ${isRow ? 'row' : 'column'};
    margin-top: ${marginTop || 0}px;
  `}
`;

const StyledText = styled.span<TextProps>`
  ${({ fontSize, lineHeight, isBold, isSubGray, marginTop, theme }) => css`
    font-size: ${fontSize || 14}px;
    line-height: ${lineHeight || 20}px;
    font-weight: ${isBold ? theme.fontWeight.large : theme.fontWeight.small};
    color: ${isSubGray ? theme.color.subGray : theme.color.defaultGray};
    margin-top: ${marginTop || 0}px;
  `}
`;

const CounselWrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;

const CounselText = styled.div`
  padding: 2px 8px;
  border-radius: 12px;
  text-align: center;
  color: ${({ theme }) => theme.color.warningYellow};
  border: 1px solid;
`;

const Horizon = styled.div`
  height: 0px;
  margin-top: 16px;

  ${({ theme }) => css`
    border: 1px solid ${theme.color.backgroundGray};
  `}
`;

export default RequestCard;
