/* eslint-disable no-console */
/* eslint-disable no-use-before-define */
import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import styled from 'styled-components';
import { IoMdArrowDropdown } from 'react-icons/io';
import { filterMethod, filterMaterial } from 'store/request';

type Props = {
  name: string;
  options: string[];
};

function FilterButton({ name, options }: Props) {
  const dispatch = useDispatch();
  const [isClicked, setIsClicked] = useState<boolean>(false);
  const [selectedOption, setSelectedOption] = useState<string[]>([]);

  const handleClick = () => {
    setIsClicked(!isClicked);
  };

  const dispatchMethod = (nextState: string[]) => {
    if (name === '가공방식') {
      dispatch(filterMethod(nextState));
    } else if (name === '재료') {
      dispatch(filterMaterial(nextState));
    }
  };

  const handleCheck = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.checked) {
      setSelectedOption([...selectedOption, e.target.value]);
    } else {
      const newOptionList = selectedOption.filter(
        (option) => option !== e.target.value,
      );
      setSelectedOption(newOptionList);
    }
  };

  useEffect(() => {
    dispatchMethod(selectedOption);
  }, [selectedOption]);

  return (
    <div>
      <Button
        value="method"
        type="button"
        onClick={handleClick}
        isSelected={selectedOption.length > 0}
      >
        {name}
        {selectedOption.length > 0 && <span>({selectedOption.length})</span>}
        <IoMdArrowDropdown className="icon" size="20" />
      </Button>
      {isClicked && (
        <OptionList>
          {options.map((option) => (
            <OptionItem key={option}>
              <input
                type="checkbox"
                name={name}
                value={option}
                onChange={handleCheck}
              />
              <p>{option}</p>
            </OptionItem>
          ))}
        </OptionList>
      )}
    </div>
  );
}

export default FilterButton;

const Button = styled.button<{ isSelected: boolean }>`
  margin-right: 8px;
  color: ${({ isSelected, theme }) =>
    isSelected ? theme.color.defaultWhite : theme.color.defaultGray};
  font-weight: 500;
  font-size: ${({ theme }) => theme.fontSize.small};
  padding: 4px 12px;
  border: 1px solid ${({ theme }) => theme.color.subGray};
  border-radius: ${({ theme }) => theme.border.radius};
  display: flex;
  align-items: center;
  position: relative;
  background-color: ${({ isSelected, theme }) =>
    isSelected ? theme.color.primaryBlue : theme.color.defaultWhite};

  &:hover {
    border-color: ${({ theme }) => theme.color.accentPrimaryBlue};
    cursor: pointer;
  }

  .icon {
    margin-left: 4px;
    background-color: ${({ isSelected, theme }) =>
      isSelected ? theme.color.primaryBlue : theme.color.defaultWhite};
    color: ${({ isSelected, theme }) =>
      isSelected ? theme.color.defaultWhite : theme.color.subGray};
  }
`;

const OptionList = styled.ul`
  border: 1px solid ${({ theme }) => theme.color.subGray};
  border-radius: ${({ theme }) => theme.border.radius};
  padding: 16px 12px;
  width: 130px;
  position: relative;
  top: 4px;
`;

const OptionItem = styled.li`
  display: flex;
  align-items: center;
  font-size: ${({ theme }) => theme.fontSize.middle};

  input[type='checkbox'] {
    width: 18px;
    height: 18px;
    margin-right: 10px;
  }
`;
