import React from 'react';
// import PropTypes from 'prop-types';
import styled, { keyframes } from 'styled-components';

export const gradientAnimation = keyframes`
  0%{background-position:91% 0%}
  50%{background-position:10% 100%}
  100%{background-position:91% 0%}
`;

const StyledLoadingText = styled.span`
  background: linear-gradient(243deg, #c945fb, #45fbe4);
  background-size: 400% 400%;

  animation: ${gradientAnimation} 4s ease infinite;
  -webkit-text-fill-color: transparent;
  -webkit-background-clip: text;

  font-size: 4vh;
  font-weight: bold;
  letter-spacing: 8px;
  text-transform: uppercase;

  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  z-index: 3;
`;

function LoadingText() {
  return <StyledLoadingText>Loading</StyledLoadingText>;
}

LoadingText.propTypes = {};

LoadingText.defaultProps = {};

export default LoadingText;
