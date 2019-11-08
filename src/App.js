import React from 'react';
import SplashPage from './components/SplashPage.js';

import styled, { css } from 'styled-components';

const Body = styled.div`
  top: 0;
  width: 100%;
  height: 100%;
`;

function App() {
  return (
    <Body>
      <SplashPage/>
    </Body>
  );
}

export default App;
