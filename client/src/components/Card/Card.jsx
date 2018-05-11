import React, { Component } from 'react';

export default class Card extends Component {
  componentWillMount() {
    this.props.dealCards();
  }

  render() {

    return(
      <div>
        {this.props.hand.map(card => {
          console.log(card);
          <img key='card' src={'./' + card} />
        })}
      </div>
    )
  };
}