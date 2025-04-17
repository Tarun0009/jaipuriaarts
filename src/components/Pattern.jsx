// Pattern.js
import React from 'react';
import styled from 'styled-components';

const Pattern = ({ children }) => {
  return (
    <StyledWrapper>
      <div className="pattern-bg">
        {children}
      </div>
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
  .pattern-bg {
    width: 100%;
    height: 100%;
    background-color: rgba(75, 46, 43, 0.95); /* dark maroon with transparency */
    background-size: 40px 40px;
    background-image: 
      linear-gradient(45deg, rgba(255, 215, 0, 0.1) 25%, transparent 25%), 
      linear-gradient(-45deg, rgba(255, 215, 0, 0.1) 25%, transparent 25%);
    background-blend-mode: overlay;
  }
`;

export default Pattern;
