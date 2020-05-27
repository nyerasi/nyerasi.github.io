import React, { Component } from 'react';
import styled, { css } from 'styled-components';

const Bar = styled.div`
  width: 100%;
`
const Title = styled.h1`
  display: inline-block;
  font-family: 'Roboto', sans-serif;
  font-weight: 300;
  font-size: 1.5em;
  color: white;
`;


export default class NavigationMenu extends React.Component {
  render() {
    const nameStyle = {
      color: '#8AFFA4',
      fontWeight: 400
    };

    return (
      <Bar>
        <Title><span style={nameStyle}>Projects </span>| Photos</Title>
      </Bar>
    );
  }
}
