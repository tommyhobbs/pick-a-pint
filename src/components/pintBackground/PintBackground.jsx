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
    const { gamma } = this.props;
    const newBeer = pintCalculations.drink(gamma, prevState.beer, prevState.glass);

    newBeer !== prevState.beer && this.setState({beer: newBeer});
  }

  render() {
    const { beer } = this.state;
    const { gamma } = this.props;
    return (
      <svg xmlns='http://www.w3.org/2000/svg' width={beer.width} >
        <rect width={beer.width} height={beer.height} style={{fill:'#F3CD57', transform: `rotate(${gamma}deg)`}}/>
      }} />
      </svg>
    );
  }
};

export default PintBackground;