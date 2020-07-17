import React, { Component } from 'react';
import styled, { css } from 'styled-components';
import ProjectCard from './ProjectCard.js';
import Socials from './Socials.js';
import Projects from './Projects.js';
import NavigationMenu from './NavigationMenu.js';
import { device } from './device.js';

const Title = styled.h1`
  font-family: 'Roboto', sans-serif;
  font-weight: 400;
  font-size: 3em;
  color: white;
`;

const Subtitle = styled.h2`
  font-family: 'Roboto', sans-serif;
  font-weight: 400;
  font-size: 2em;
  color: white;
`;

const Body = styled.p`
  font-family: 'Roboto', sans-serif;
  font-weight: 300;
  font-size: 1em;
  color: white;
`;

const Background = styled.div`
  height: 100%;
  width: 100%;
  background-image: linear-gradient(#090B2D, #240035);

  @media ${device.tablet} {
  display: flex;
  }
`;

const About = styled.div`
  padding-top: 20px;
  margin-left: 20px;
  width: 75%;
  height: 100%;
  text-align: left;
  padding-bottom: 20px;

  @media ${device.tablet} {
    width: 60%;
  }
`;

const CardContainer = styled.span`
  width: 100%;
  text-align: center;
  padding-top: 20px;

  @media ${device.tablet} {
    width: 60%;
    margin-left: 20px;
    margin-right: 20px;
  }
`;


const Emoji = props => (
    <span
        className="emoji"
        role="img"
        aria-label={props.label ? props.label : ""}
        aria-hidden={props.label ? "false" : "true"}
    >
        {props.symbol}
    </span>
);

export default class SplashPage extends React.Component {

  // constructor(props) {
  //   super(props);
  //   this.state = { width: 0, height: 0};
  //   this.updateWindowDimensions = this.updateWindowDimensions.bind(this);
  // }
  //
  // componentDidMount() {
  //   this.updateWindowDimensions();
  //   window.addEventListener('resize', this.updateWindowDimensions);
  // }
  //
  // componentWillUnmount() {
  //   window.removeEventListener('resize', this.updateWindowDimensions);
  // }
  //
  // updateWindowDimensions() {
  //   this.setState({ width: window.innerWidth, height: window.innerHeight });
  // }

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

    const stravaStyle = {
      color: '#EB5E2A',
      fontWeight: 500
    };

    const iosDeCalStyle = {
      color: '#3EA2FF',
      fontWeight: 500
    };

    const pinpointStyle = {
      color: '#C33E30',
      fontWeight: 500
    };

    const bampfaStyle = {
      color: '#E37AAB',
      fontWeight: 500
    };

    const helloWorldStyle = {
      color: '#5DA69F',
      fontWeight: 500
    };

    const socialLinks = {
      'github':'https://www.github.com/nyerasi',
      'linkedin':'https://www.linkedin.com/in/nyerasi',
      'medium':'https://medium.com/@nikhil.yerasi',
      'file':'https://drive.google.com/file/d/1WBfob0qnMrFG7ts9-N_qg1tuCs41ZjP0/view?usp=sharing'
    };

    // Emoji symbol=" 🕶"/>

    return (
      <Background>
      <About>
          <Title>
            Hey there, I'm <span style={nameStyle}>Nikhil</span>!
          </Title>
          <Subtitle>
            I <span style={designStyle}>design</span> and <span style={developStyle}>develop</span> things.
          </Subtitle>
          <Body>
          I’m a recent graduate of UC Berkeley, where I studied Data Science and taught mobile development. Previously, I worked as an iOS Software Engineering Intern at <a href='https://www.strava.com' style={stravaStyle}>Strava</a>.
          </Body>
          <Body>
          I taught the <a href='https://www.iosdev.berkeley.edu' style={developStyle}>iOS DeCal</a>, UC Berkeley's official iOS Development course. I also led projects for <a href='https://www.bampfa.org' style={bampfaStyle}>BAMPFA</a>, <a href='https://www.terrafuse.ai' style={nameStyle}>Terrafuse</a>, and <a href='https://www.pinpointscience.com' style={pinpointStyle}>Pinpoint Science</a> through the <a href='https://www.inventioncorps.org' style={developStyle}>Invention Corps of Berkeley</a>.
          </Body>
          <Body>
          I'm currently leading iOS Development courses for middle school students through the <a href='https://www.helloworldstudio.org/hello-world-institute' style={helloWorldStyle}>Hello World Institute</a>. I'm seeking a full-time Software Engineering role to build products that enable people to live healthier and happier lives.
          </Body>
          <Socials
            fontSize = '2.5em'
            fontColor = {'white'}
            entries={socialLinks}
          />
        </About>
        <CardContainer>
          <Projects/>
        </CardContainer>
      </Background>
    );
  }
}
