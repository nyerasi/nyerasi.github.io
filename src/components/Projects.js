import React, { Component } from 'react';
import styled, { css } from 'styled-components';
import ProjectCard from './ProjectCard.js'

const CardContainer = styled.span`
  margin-right: auto;
  margin-left: auto;
  width: 50%;
`;

const CardColumn = styled.span`
  flex-direction: column;
  margin-right: auto;
  margin-left: auto;
  height: 100%;
`;

export default class Projects extends React.Component {
  render() {
    return (
        <CardColumn>
          <ProjectCard/>
          <ProjectCard/>
          <ProjectCard/>
          <ProjectCard/>
          <ProjectCard/>
          <ProjectCard/>
        </CardColumn>
    );
  }
}
