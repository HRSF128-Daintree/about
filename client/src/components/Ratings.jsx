import React from 'react';
import styled from 'styled-components';

// not implemented yet
class Ratings extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      bubbles: [],
    };
    this.populateRatings = this.populateRatings.bind(this);
  }

  populateRatings (rating) {
    const bubbles = [...this.state.bubbles];
    for (var i = 0; i < Math.floor(rating); i++) {
      bubbles.push(
        <svg class="bi bi-circle-half" width="1em" height="1em" viewBox="0 0 16 16" fill="#00aa6c" xmlns="http://www.w3.org/2000/svg">
        <path fill-rule="evenodd" d="M8 15V1a7 7 0 1 1 0 14zm0 1A8 8 0 1 1 8 0a8 8 0 0 1 0 16z"/>
        </svg>
      );
    }
    if (rating.contains(".5")) {
      bubbles.push(
        <svg class="bi bi-circle-half" width="1em" height="1em" viewBox="0 0 16 16" fill="#00aa6c" xmlns="http://www.w3.org/2000/svg">
        <path fill-rule="evenodd" d="M8 15V1a7 7 0 1 1 0 14zm0 1A8 8 0 1 1 8 0a8 8 0 0 1 0 16z"/>
        </svg>
      )
    }
  }

  render () {
    return (
      {this.state.bubbles}
    );
  }
}

export default Ratings;
