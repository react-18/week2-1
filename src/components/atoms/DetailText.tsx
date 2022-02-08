import React from 'react';
import styled, { css } from 'styled-components';

interface Props {
  title: string;
  content: string | number | string[];
  marginBottom?: number;
}

function DetailText({ title, content, marginBottom }: Props) {
  return (
    <StyledDetailText marginBottom={marginBottom}>
      <Title>{title}</Title>
      <Content>{content}</Content>
    </StyledDetailText>
  );
}

const StyledDetailText = styled.div<Pick<Props, 'marginBottom'>>`
  display: flex;
  margin-bottom: ${({ marginBottom }) => marginBottom || '8px'};
`;

const Title = styled.span`
  display: inline-block;
  width: 70px;
  margin-right: 32px;

  ${({ theme }) => css`
    color: ${theme.color.defaultGray};
    font-size: ${theme.fontSize.middle};
    line-height: 20px;
  `}
`;

const Content = styled.span`
  display: inline-block;

  ${({ theme }) => css`
    color: ${theme.color.defaultGray};
    font-size: ${theme.fontSize.middle};
    font-weight: ${theme.fontWeight.large};
    line-height: 20px;
  `}
`;

export default DetailText;
