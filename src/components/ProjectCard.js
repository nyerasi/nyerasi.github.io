import React, { Component } from 'react';
import Image from '../components/Image.js'
import styled, { css } from 'styled-components';

// Flipping card
const Card = styled.article`
  position: relative;
  width: 100%;
  padding-bottom: 20px;
  min-height: 200px;
  cursor: pointer;
  perspective: 1000px;
  transition: all .25s ease-in-out;

  &:focus,
  &:hover {
    box-shadow: 0 0 40 rgba(0,0,0,.15);
  }

  &.flipped {
    & > div:first-of-type { // frontside of the card
      transform: perspective(1000px) rotateY(-180deg);
    }

    & > div:last-of-type { // backside of the card
      transform: perspective(1000px) rotateY(0deg);
    }
  }
`

// Card sides
const CardSide = css`
  border: 2px solid white;
  border-radius: 5px;
  position: absolute;
  bottom: 20px;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  justify-content: center;
  backface-visibility: hidden;
  transition: all .25s ease-in-out;
`

// Card side - front
const CardFront = styled.div`
  ${CardSide};
  background-color: white;
  font-weight: bold;
  text-align: center;
`

// Card side - back
const CardBack = styled.div`
  ${CardSide};
  background-color: white;
  transform: rotateY(-180deg);
`

// Card content
const CardNumber = styled.span`
  font-family: 'Roboto', sans-serif;
  font-weight: 500;
  display: block;
  font-size: 2.5em;
`

const CardTitle = styled.h2`
  font-family: 'Roboto', sans-serif;
  font-weight: 400;
  font-size: 2em;
`

const CardDescription = styled.span`
  padding-left: 1em;
  padding-right: 1em;
  font-family: 'Roboto', sans-serif;
  font-weight: 300;
  font-size: 1em;
`
const SocialIcons = styled.div`
  display: flex;
  justify-content: right;
  width: 100%;
  text-align: center;
  padding: 1em;
`

const Icon = styled.a`
  color: black;
  font-size: 1.5em;
  padding-right: 0.75em;

  :hover {
		color: #FF8A8A;
		cursor: pointer;
    transition: 0.3s ease-out;
	}
`

export default class ProjectCard extends React.Component {
  flipCard(event) {
    event.currentTarget.classList.toggle('flipped')
  }

  render() {
    return (
      <Card onClick={this.flipCard.bind(this)}>
        <CardFront>
          <CardTitle>Appstraction</CardTitle>
          <CardDescription>A progressive web application for the Berkeley Art Museum and Pacific Film Archive featuring exclusive curator commmentary.</CardDescription>
          <SocialIcons>
              <span><Icon href="https://www.github.com/nyerasi"><i class="fab fa-github"></i></Icon></span>
              <span><Icon href="https://medium.com/@nikhil.yerasi"><i class="fab fa-medium-m"></i></Icon></span>
              <span><Icon href="https://drive.google.com/file/d/1cyYKcEyXm50jVPl7lapX_J0Wfsa4pBo_/view?usp=sharing"><i class="fas fa-link"></i></Icon></span>
          </SocialIcons>
        </CardFront>
        <CardBack>
          <CardDescription>A progressive web application for the Berkeley Art Museum and Pacific Film Archive featuring exclusive curator commmentary.</CardDescription>
        </CardBack>
      </Card>
    );
  }
}
