import React, { Component } from 'react';
// import Image from '../components/Image.js'
import styled, { css } from 'styled-components';

const SocialIcons = styled.div`
  display: flex;
  width: 100%;
  text-align: ${props => props.justifyContent != '' ? props.justifyContent : 'left'};
  padding: 1em;
  display: inline-block;
`

const Icon = styled.a`
  color: ${props => props.fontColor != '' ? props.fontColor : 'black'};
  font-size: ${props => props.fontSize != '' ? props.fontSize : '1.5em'};
  padding-right: 0.75em;

  :hover {
    color: ${props => props.highlightColor != '' ? props.highlightColor : '#A98AFF'};
		cursor: pointer;
    transition: 0.3s ease-out;
	}
`

const socialLinks = {
  'github': 'fab fa-github',
  'medium': 'fab fa-medium-m',
  'link': 'fas fa-link',
  'linkedin': 'fab fa-linkedin-in',
  'file': 'far fa-file',
  'figma':'fab fa-figma'
};

// pass in dictionary of type [String:String] with media type and url
export default class Socials extends React.Component {
  render() {
    var items = [];

    const colors = ['#3EA2FF', '#8AFFA4', '#FFE58A', '#FF8A8A', '#A98AFF'];
    var index = 0;

    for (const [type, url] of Object.entries(this.props.entries)) {
      console.log(colors[index % colors.length]);
      items.push(
        <span>
          <Icon
            fontSize={this.props.fontSize}
            fontColor={this.props.fontColor}
            highlightColor= {colors[index % colors.length]}
            href={url}
            >
          <i class={socialLinks[type]}></i>
          </Icon>
        </span>
      );
      index += 1;
    }

    return (
      <div>
        <SocialIcons justifyContent={this.props.jusitfyContent}>
            {items}
        </SocialIcons>
      </div>
    );
  }
}
