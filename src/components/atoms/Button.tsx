import React, { ReactNode } from 'react';
import styled, { css } from 'styled-components';

interface Props {
  width: number;
  height: number;
  borderRadius: number;
  color?: string;
  constrast?: boolean;
  marginRight?: number;
  children?: ReactNode;
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
}

function Button({
  width,
  height,
  color,
  constrast,
  children,
  marginRight,
  borderRadius,
  onClick,
}: Props) {
  return (
    <StyledButton
      width={width}
      height={height}
      color={color}
      constrast={constrast}
      borderRadius={borderRadius}
      marginRight={marginRight}
      onClick={onClick}
    >
      {children}
    </StyledButton>
  );
}

const StyledButton = styled.button<Props>`
  ${({
    color,
    width,
    height,
    constrast,
    borderRadius,
    marginRight,
    theme,
  }) => css`
    display: inline-flex;
    justify-content: center;
    align-items: center;
    font-size: ${theme.fontSize.middle};
    border: solid ${color || theme.color.accentPrimaryBlue} 1px;
    border-radius: ${borderRadius}px;
    width: ${width}px;
    height: ${height}px;
    margin-right: ${marginRight || 0}px;
    ${constrast
      ? css`
          background-color: ${color || theme.color.accentPrimaryBlue};
          color: white;
        `
      : css`
          color: ${color || theme.color.accentPrimaryBlue};
        `}
  `}
`;

export default Button;
