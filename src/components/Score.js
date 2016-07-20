import React from 'react';
import Fonts from '../style/Fonts';
import {Card} from 'material-ui/Card';

const style = {
  width: 306,
  display: 'flex',
  justifyContent: 'center',
  fontFamily: Fonts.sansSerif,
  backgroundColor: '#D3D3D3',
}

class Score extends React.Component {
  render() {
    if (this.props.winner === 'o' || this.props.winner === 'x') {
      return (
        <Card style={style}>
          <h3>Player {this.props.winner} won!</h3>
        </Card>
      );
    }
    else {
      return (
        <Card style={style}>
          <h3>Player {this.props.turn}'s turn.</h3>
        </Card>
      );
    }
    }
}

export default Score;
