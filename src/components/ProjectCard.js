import React, { Component } from 'react';
import Socials from './Socials.js'
import styled, { css } from 'styled-components';

// Flipping card
const Card = styled.article`
  position: relative;
  width: 95%;
  margin-left: auto;
  margin-right: auto;
  padding-bottom: 20px;
  /* min-height: ${props => props.minHeight != '' ? props.minHeight : '200px'}; */
  height: ${props => props.minHeight != '' ? props.minHeight : '200px'};
  cursor: pointer;
  perspective: 1000px;
  transition: all .25s ease-in-out;

  &:focus,
  &:hover {
    box-shadow: 0 0 40 rgba(0,0,0,.15);
  }

  &.flipped {
    & > div:first-of-type { // frontside of the card
      transform: perspective(1000px) rotateX(180deg);
    }

    & > div:last-of-type { // backside of the card
      transform: perspective(1000px) rotateX(0deg);
    }
  }
`

// Card sides
const CardSide = css`
  width: 100%;
  /* min-height: ${props => props.minHeight != '' ? props.minHeight : '300px'}; */
  height: ${props => props.minHeight != '' ? props.minHeight : '300px'};
  border: 2px solid white;
  border-radius: 5px;
  position: absolute;
  overflow: hidden;
  display: flex;
  flex-direction: column;
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
  transform: rotateX(180deg);
`

// Card content
const CardNumber = styled.span`
  font-family: 'Roboto', sans-serif;
  font-weight: 500;
  display: block;
  font-size: 2.5em;
`

const CardTitle = styled.h2`
  text-align: center;
  font-family: 'Roboto', sans-serif;
  font-weight: 400;
  font-size: 1.5em;
`

const CardHeader = styled.h3`
  text-align: center;
  font-family: 'Roboto', sans-serif;
  font-weight: 400;
  font-size: 1.25em;
`

const CardSubtitle = styled.h4`
  text-align: center;
  font-family: 'Roboto', sans-serif;
  font-weight: 300;
  font-size: 0.75em;
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

const Image = styled.img`
  bottom: 0;
  max-width: 100%;
  max-height: ${props => props.height != '' ? props.height : '250px'};
  width: auto;
  height: auto;
  object-fit: cover;
}
`
/*
card props:
card front: title, subtitle
card back: description, photos, github link, web link (if applicable),
*/
export default class ProjectCard extends React.Component {
  flipCard(event) {
    event.currentTarget.classList.toggle('flipped')
  }

  render() {
    const nameStyle = {
      color: '#FFD66C',
      fontWeight: 500,
      fontSize: '1.25em'
    };
    return (
      <Card onClick={this.flipCard.bind(this)} minHeight={this.props.minHeight}>
        <CardFront minHeight={this.props.minHeight}>
          <CardTitle>{this.props.title}</CardTitle>
          <Image src={this.props.image} height={this.props.imageHeight}/>
        </CardFront>
        <CardBack minHeight={this.props.minHeight}>
        <CardHeader>{this.props.header}</CardHeader>
        <CardDescription>{this.props.description}</CardDescription>
        <CardSubtitle>{this.props.subtitle}</CardSubtitle>
        <Socials
          fontSize = '1.5em'
          fontColor = {'black'}
          entries={this.props.links}
        />
        </CardBack>
      </Card>
    );
  }
}
