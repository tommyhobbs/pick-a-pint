import React, { Component } from 'react';
// import PropTypes from 'prop-types';
// import beer from '../../assets/beer.png';
import './pintBackground.css';
import * as pintCalculations from '../../utils/pintCalculations';

class PintBackground extends Component {
  constructor(props) {
    super(props);
    const { width, height } = this.props;
    const glass = pintCalculations.getGlass(width, height);
    const freshPint = pintCalculations.freshPint(glass, 0.8);
    console.log('Tasty fresh beer 🤤🍺', freshPint);
    this.state = {
      glass: glass,
      beer: freshPint,
    };
  }

  componentDidUpdate(prevProps, prevState) {
    const { gamma } = this.state;
    const beer = pintCalculations.tip(gamma, this.state.beer, this.state.glass);
    this.setState(beer);
  }

  render() {
    const {glass, beer} = this.state;
    // height={glass.height} rotation={`${gamma}deg`} style={{fill: '#F3CD57', stroke: 'pink', strokeWidth: 5, fillOpacity: 0.3, strokeOpacity: 0.9}} 
    return (
      <svg xmlns='http://www.w3.org/2000/svg' width={glass.width} >
        <rect width={beer.width} height={beer.height} style={{fill:'rgb(0,0,255)'}} />
      </svg>
    );
  }
};

export default PintBackground;