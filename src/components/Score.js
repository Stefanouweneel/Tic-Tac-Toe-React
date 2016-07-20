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
    return (
      <Card style={style}>
        <h3>Player { this.props.turn }s turn.</h3>
        <h3>Player { this.props.winner } has won!</h3>
        <p>Player X has a score of: { this.props.scoreX } <br />
        Player O has a score of: { this.props.scoreO }</p>
      </Card>
    );
  }
}

export default Score;
