/* eslint-disable no-unused-vars */
import React from 'react';
import styled from 'styled-components';

import { COLORS } from '../../constants';
import VisuallyHidden from '../VisuallyHidden';

const ProgressBar = ({ value, size }) => {

  let Component;
  if (size === 'large') {
    Component = LargeWrapper;
  } else if (size === 'medium') {
    Component = MediumWrapper;
  } else {
    Component = SmallWrapper;
  }

  return (
  <Component role="progressbar" aria-valuenow={value} aria-valuemin="0" aria-valuemax="100">
    <WrapperBar>
      <Bar style={{ '--width': value + '%'}}>
        <VisuallyHidden>{value} %</VisuallyHidden>
      </Bar>
    </WrapperBar>
  </Component>
  );
};

const WrapperBase = styled.div`
  border-radius: 4px;
  overflow: hidden;
  box-shadow: inset 0px 2px 4px ${COLORS.transparentGray35};
`;

const WrapperBar = styled.div`
  height: 100%;
  width: 100%;
  border-radius: 4px;
  overflow: hidden;
`;

const SmallWrapper = styled(WrapperBase)`
  height: 8px;
`;

const MediumWrapper = styled(WrapperBase)`
  height: 12px;
`;

const LargeWrapper = styled(WrapperBase)`
  height: 24px;
  padding: 4px;
  border-radius: 8px;
`;

const Bar = styled.div`
  background-color: ${COLORS.primary};
  width: var(--width);
  height: 100%;
`

export default ProgressBar;
