import React, { Component } from 'react';

export default class SplashPage extends React.Component {
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
    let styles = {
      splash: {
        height: this.state.height,
        backgroundImage: 'linear-gradient(#9c7dc9, #7d9bc9)',
        textAlign:'center',
        textAlignVertical:'center'
      }
    };
    return (
      <div className='splash' style={styles.splash}>
        <t1>Hi, I'm Nikhil.</t1>
        <t2>I'm a senior at UC Berkeley studying Data Science. I build mobile experiences and use data to solve problems.</t2>
      </div>
    );
  }
}
