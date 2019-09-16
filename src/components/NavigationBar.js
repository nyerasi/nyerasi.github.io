import React, { Component } from 'react';
import './NavigationBar.css';
// routing

export default class NavigationBar extends React.Component {

  constructor(props) {
        super(props);

        this.state = {};

        this.handleScroll = this.handleScroll.bind(this);
    }

    handleScroll() {
        this.setState({scroll: window.scrollY});
    }

  componentDidMount() {
        const el = document.querySelector('nav');
        this.setState({top: el.offsetTop, height: el.offsetHeight});
        window.addEventListener('scroll', this.handleScroll);
    }

  componentDidUpdate() {
        this.state.scroll > this.state.top ?
            document.body.style.paddingTop = `${this.state.height}px` :
            document.body.style.paddingTop = 0;
    }

  render() {
    return (
      <nav className={this.state.scroll > this.state.top ? "fixed-nav" : ""}>
        <ul>
          <li>Home</li>
          <li>Project</li>
          <li>Photography</li>
          <li>About</li>
        </ul>
      </nav>
    );
  }
}
