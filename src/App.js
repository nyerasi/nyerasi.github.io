import React from 'react';
import SplashPage from './components/SplashPage.js';

import styled, { css } from 'styled-components';

const Body = styled.div`
  position: fixed;
  top: 0;
  width: 100%;
  height: 100%;
  background-size: cover;
`;

function App() {
  return (
    <Body>
      <SplashPage/>
    </Body>
  );
}

export default App;
