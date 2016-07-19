import React from 'react';
import Fonts from '../style/Fonts';

const style = {
  height: 50,
  width: 150,
  fontFamily: Fonts.sansSerif,
}

class Score extends React.Component {
  render() {
    return (
      <div style={style}>
        <div>
          <h3>Player {this.props.turn}'s turn.</h3>
        </div>
        <div>
          <h3>Score: </h3>
        </div>
      </div>
    );
  }
}

export default Score;
