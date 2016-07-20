import React from 'react';
import Fonts from '../style/Fonts';

const style = {
  height: 50,
  width: 150,
  fontFamily: Fonts.sansSerif,
}

class Score extends React.Component {
  render() {
    if (this.props.winner === 'o' || this.props.winner === 'x') {
      return (
        <div style={style}>
          <h3>Player {this.props.winner} won!</h3>
        </div>
      );
    }
    else {
      return (
        <div style={style}>
          <h3>Player {this.props.turn}'s turn.</h3>
        </div>
      );
    }
    }
}

export default Score;
