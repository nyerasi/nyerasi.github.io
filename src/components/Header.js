import React, { Component } from 'react';
import { Parallax, Background } from 'react-parallax';
// import { Parallax, ParallaxBanner } from 'react-scroll-parallax';
import Image from './Image.js'
import backgroundImage from '../assets/Background.jpg';
import pocketWatch from '../assets/AnalogWatch.png';
import scrollDown from '../assets/arrow-down.gif';

export default class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = { width: 0, height: 0};
    this.updateWindowDimensions = this.updateWindowDimensions.bind(this);
  }

  componentDidMount() {
    this.updateWindowDimensions();
    window.addEventListener('resize', this.updateWindowDimensions);
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.updateWindowDimensions);
  }

  updateWindowDimensions() {
    this.setState({ width: window.innerWidth, height: window.innerHeight });
  }

  render() {
    return (
      <div clasName='header'>
        <Parallax
          blur={{ min: -15, max: 30 }}
          bgImage={backgroundImage}
          bgImageAlt='Analog'
          strength={-50}
        >
          <div style={{ height: this.state.height - 95}} />
        </Parallax>
        <div style={{ textAlign:'center', height: 50, backgroundColor:'#212121'}}>
        <img style={{ display: 'block', marginLeft: 'auto', marginRight: 'auto', top: '50%', height:50}} src={scrollDown}/>
        </div>
      </div>
    );
  }
}
