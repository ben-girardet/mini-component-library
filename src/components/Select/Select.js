import React from 'react';
import styled from 'styled-components';

import { COLORS } from '../../constants';
import Icon from '../Icon';
import { getDisplayedValue } from './Select.helpers';

const Select = ({ label, value, onChange, children }) => {
  const displayedValue = getDisplayedValue(value, children);

  return (
    <Wrapper>
      <SelectElement value={value} onChange={onChange}>
        {children}
      </SelectElement>
      <SelectOverwrite>
        {displayedValue}
        <Icon id="chevron-down" strokeWidth={1} size={24}></Icon>
      </SelectOverwrite>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  position: relative;
  width: max-content;
  color: ${COLORS.gray700};
  
  &:hover {
    color: ${COLORS.black};
    cursor: pointer;
  }
`;

const SelectElement = styled.select`
  opacity: 0;
  width: 100%;
  height: 100%;
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
`;

const SelectOverwrite = styled.div`
  background: ${COLORS.transparentGray15};
  border-radius: 10px;
  padding: 12px 16px;
  display: flex;
  gap: 24px;
  align-items: center;

  ${SelectElement}:focus + & {
    outline-color: ${COLORS.primary};
    outline-width: 1px;
    outline-style: solid;
  }
`;



export default Select;
