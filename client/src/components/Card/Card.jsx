import React, { Component } from 'react';

export default class Card extends Component {
  componentWillMount() {
    this.props.dealCards();
  }

  render() {
    return(
      <div>
        {this.props.hand.map( card => <img key={card} alt={card} src={require('./images/small/' + card)} />)}
      </div>
    )
  };
} 