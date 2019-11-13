import React, { Component } from 'react';
import styled, { css } from 'styled-components';
import ProjectCard from './ProjectCard.js';
import Projects from './Projects.js';

const Title = styled.h1`
  font-family: 'Roboto', sans-serif;
  font-weight: 400;
  font-size: 3.5em;
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
  font-size: 1.25em;
  color: white;
`;

const Background = styled.div`
  display: flex;
  height: 100%;
  width: 100%;
  background-image: linear-gradient(#090B2D, #240035);
`;

const About = styled.div`
  margin-left: 20px;
  width: 60%;
  height: 100%;
  text-align: left;
  padding-bottom: 20px;
`;

const SocialIcons = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  text-align: center;
  padding-top: 25px;
`

const Icon = styled.a`
  color: white;
  font-size: 2.5em;
  padding-right: 25px;

  :hover {
		color: #3EA2FF;
		cursor: pointer;
    transition: 0.3s ease-out;
	}
`

const CardContainer = styled.span`
  padding-right: 25px;
  padding-left: 25px;
  padding-bottom: 25px;
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

    return (
      <Background>
      <About>
          <Title>
            Hey there, I'm <span style={nameStyle}>Nikhil</span>.
          </Title>
          <Subtitle>
            I <span style={designStyle}>design</span> and <span style={developStyle}>develop</span> things <Emoji symbol=" 🤙🏾"/>
          </Subtitle>
          <Body>
          I’m a senior at UC Berkeley, where I study Data Science and teach iOS Development. I'm currently seeking a full-time Software Engineering role to build products that enable people to live healthier and happier lives.
          </Body>
          <Body>
          You'll soon find some of my recent projects and photos right here.
          </Body>
          <SocialIcons>
              <span><Icon href="https://www.github.com/nyerasi"><i class="fab fa-github"></i></Icon></span>
              <span><Icon href="https://www.linkedin.com/in/nyerasi"><i class="fab fa-linkedin-in"></i></Icon></span>
              <span><Icon href="https://medium.com/@nikhil.yerasi"><i class="fab fa-medium-m"></i></Icon></span>
              <span><Icon href="https://drive.google.com/file/d/1cyYKcEyXm50jVPl7lapX_J0Wfsa4pBo_/view?usp=sharing"><i class="far fa-file"></i></Icon></span>
          </SocialIcons>
        </About>
      </Background>
    );
  }
}
