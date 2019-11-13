import React, { Component } from 'react';
import styled, { css } from 'styled-components';
import ProjectCard from './ProjectCard.js'
import bampfa from '../assets/BAMPFA.png'; // Tell Webpack this JS file uses this image
import genomics from '../assets/genomics.png'; // Tell Webpack this JS file uses this image

const CardColumn = styled.span`
  text-align: center;
  height: 100%;
  width: 100%;
`;

export default class Projects extends React.Component {
  render() {
    const nameStyle = {
      color: '#FFD66C',
      fontWeight: 500
    };

    const designStyle = {
      color: '#FF8A8A',
      fontWeight: 500
    };

    const developStyle = {
      color: '#3EA2FF',
      fontWeight: 500
    };
    const subtitleStyle = {
      fontWeight: 500,
      fontSize: '1.25em'
    };
    // <SocialIcons>
    //     <span><Icon href="https://www.github.com/nyerasi-zz/appstraction"><i class="fab fa-github"></i></Icon></span>
    //     <span><Icon href="https://medium.com/@nikhil.yerasi"><i class="fab fa-medium-m"></i></Icon></span>
    //     <span><Icon href="https://bampfa.now.sh"><i class="fas fa-link"></i></Icon></span>
    // </SocialIcons>
    const bampfaLinks = {
      'link':'https://bampfa.now.sh',
      'figma':'https://www.figma.com/proto/E49R3IZkcQynU9VMfNWxIU/BAMPFA-Wireframes?node-id=24%3A2&viewport=110%2C1038%2C0.17884130775928497&scaling=min-zoom',
      'github':'https://github.com/nyerasi-zz/appstraction'
    };

    const genomicsLinks = {
      'file':'https://drive.google.com/open?id=1K0MmjuwjmtizjQZVKEZILu-mzDpYi_PD',
      'figma':'https://www.figma.com/proto/SpIC2Ez6bK0Igl3IWtdrfeDy/Cancer-Genomics-Wireframe?node-id=1%3A2&viewport=-1361%2C211%2C0.9271447658538818&scaling=scale-down',
      'github':'https://github.com/nyerasi/DataX_Drug_Response'
    };

    return (
        <CardColumn>
          <ProjectCard
            title='Appstraction:'
            description='A progressive web application for the Berkeley Art Museum and Pacific Film Archive featuring exclusive curator commmentary.'
            header='Accessibility in the Arts'
            subtitle='React Native, Redux, Express'
            links={bampfaLinks}
            image={bampfa}
            minHeight='200px'
            imageHeight='150px'
          />
          <ProjectCard
            title='Cancer Genomics:'
            description='A ML tool for physicians to recommend cancer treatments for patients from their cell-line mutation genomic data.'
            header='Data-Based Treatment Recommendations'
            subtitle='Python, React, Flask'
            links={genomicsLinks}
            image={genomics}
            minHeight='200px'
            imageHeight='150px'
          />
        </CardColumn>
    );
  }
}
