import React from 'react';
import styled from 'styled-components';

import { COLORS } from '../../constants';

import Icon from '../Icon';
import VisuallyHidden from '../VisuallyHidden';

const styles = {
  small: {
    height: 24,
    fontSize: 14,
    iconSize: 16,
    borderThickness: 1
  },
  large: {
    height: 36,
    fontSize: 18,
    iconSize: 24,
    borderThickness: 2
  },
}

const IconInput = ({
  label,
  icon,
  width = 250,
  size,
  ...delegated
}) => {

  const style = styles[size];
  if (!style) {
    throw new Error('Size not found for IconInput: ' + size);
  }

  return (
    <Wrapper>
      <VisuallyHidden>{label}</VisuallyHidden>
      <IconWrapper style={{'--size': style.iconSize + 'px'}}>
        <Icon id={icon} size={style.iconSize}></Icon>
      </IconWrapper>
      <InputElement {...delegated} style={{
        '--width': width + 'px',
        '--height': style.height + 'px',
        '--font-size': (style.fontSize / 16) + 'rem'
        }}></InputElement>
    </Wrapper>
  );
};

const Wrapper = styled.label`
  display: block;
  position: relative;
  color: ${COLORS.gray700};

  &:hover {
    color: ${COLORS.black};
  }
  `;
  
const IconWrapper = styled.div`
  position: absolute;
  left: 0;
  top: 0;
  bottom: 0;
  height: var(--size);
  margin: auto 0;
`;
  
const InputElement = styled.input`
  height: var(--height);
  width: var(--width);
  font-size: var(--font-size);
  padding-left: var(--height);
  border: none;
  border-bottom: 1px solid ${COLORS.black};
  outline-offset: 4px;
  color: inherit;
  font-weight: 700;
  
  &::placeholder {
    font-weight: 400;
    color: ${COLORS.gray500};
  }
`;

export default IconInput;
