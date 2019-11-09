import React, { Component } from 'react';
import styled, { css } from 'styled-components';

// Flipping card
const Card = styled.article`
  position: relative;
  width: 100%;
  min-height: 25%;
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
  position: absolute;
  top: 0;
  left: 0;
  overflow: hidden;
  padding: 25px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  height: 100%;
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
  font-family: 'Roboto', sans-serif;
  font-weight: 300;
  font-size: 1.5em;
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
        </CardFront>
        <CardBack>
          <CardDescription>A progressive web application for the Berkeley Art Museum and Pacific Film Archive featuring exclusive curator commmentary.</CardDescription>
        </CardBack>
      </Card>
    );
  }
}
