import React, { Component } from 'react';
import styled, { css } from 'styled-components';
import ProjectCard from './ProjectCard.js'
import bampfa from '../assets/bampfa_mockup.png'; // Tell Webpack this JS file uses this image
import genomics from '../assets/genomics_mockup.png';
import neomotion from '../assets/neomotion_mockup.png';
import scatter from '../assets/scatter_mockup.png';
import snapagram from '../assets/snapagram_mockup.png';

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

    const scatterLinks = {
      'link':'www.scattertravelapp.com',
      'github':'https://github.com/woakley5/scatter'
    };

    // add links for neomotion, scatter, snapagram, etc.

    return (
        <CardColumn>
        <ProjectCard
          title='NeoMotion AI:'
          description='My senior year, I worked on a startup aiming to tackle smartphone-based stroke rehabilitation and physical therapy. I analyzed findings from user research, designed and built a protoype that performed real-time 3D pose detection, and pitched our company to accelerators and VCs across the Bay. We raised $15K during a global pandemic, validating our idea, but I left to focus on completing my education and finding a full-time job.'
          header='Quality physical therapy on your iPhone'
          subtitle='Swift, Python, React'
          image={neomotion}
          minHeight='400px'
          imageHeight='300px'
        />
        <ProjectCard
          title='Scatter:'
          description='I led the design and development of an MVP for a travel startup aiming to connect students in study abroad programs with local businesses across the world. Scatter brings together the best of local cuisine, sightseeing, shopping, and nightlife, curated by the friends, family, and influencers you trust.'
          header='Personalized travel recommendations'
          subtitle='Swift'
          links={scatterLinks}
          image={scatter}
          minHeight='400px'
          imageHeight='300px'
        />
          <ProjectCard
            title='Appstraction:'
            description='I led a team of four students through the design process for the Berkeley Art Museum and Pacific Film Archive. Over three months, we interviewed 75+ museum patrons, designed five wireframes, built, and tested a fully functional progressive web application featuring exclusive curator commmentary, virtual cataloguing, and artwork scanning. We tracked analytics for 3000 users.'
            header='Accessibility in the arts'
            subtitle='React Native, Redux, Express'
            links={bampfaLinks}
            image={bampfa}
            minHeight='400px'
            imageHeight='300px'
          />
          <ProjectCard
            title='Cancer Genomics:'
            description='I worked with a team of graduate students to design and build a ML tool for physicians to recommend cancer treatments for patients from their cell-line mutation genomic data. I contributed to the backend, implementing and analyzing a dozen machine learning models before building out the front-end.'
            header='Data-based cancer treatment recommendations'
            subtitle='Python, React, Flask'
            links={genomicsLinks}
            image={genomics}
            minHeight='400px'
            imageHeight='300px'
          />
          <ProjectCard
            title='Snapagram:'
            description="I designed and built a simple social media application combining the best of Snapchat and Instagram as a project for students of the iOS DeCal, UC Berkeley\'s official course on iOS Development. I integrated Firebase to authenticate users as well as to store temporary Snap-style threads and permanent Instagram-style posts. Students were encouraged to tweak the design and add additional features as desired."
            header='Shameless social media clone'
            subtitle='Swift'
            image={snapagram}
            minHeight='400px'
            imageHeight='300px'
          />
        </CardColumn>
    );
  }
}
