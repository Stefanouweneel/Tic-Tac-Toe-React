import React from 'react';
import Fonts from '../style/Fonts';
import {Card} from 'material-ui/Card';
import FontIcon from 'material-ui/FontIcon';
import {red500, yellow500, blue500} from 'material-ui/styles/colors';

const style = {
  width: 306,
  paddingLeft: 10,
  paddingRight: 10,
  display: 'flex',
  justifyContent: 'center',
  fontFamily: Fonts.sansSerif,
  backgroundColor: '#D3D3D3',
}

const iconStyles = {
  width: 30,
};

class Score extends React.Component {

  renderWinner() {
    if (this.props.winner === 'x'|| this.props.winner === 'o') {
        return <h3><FontIcon className="material-icons" style={iconStyles} color={yellow500}>star_rate</FontIcon>Player { this.props.winner } has won!<FontIcon className="material-icons" style={iconStyles} color={yellow500}>star_rate</FontIcon></h3>;
    }
    return null;
  }

  render() {
    return (
      <Card style={style}>
        {this.renderWinner()}
        <p>Player { this.props.turn }s turn.</p>
        <p>Player X has a score of: { this.props.scoreX } <br />
        Player O has a score of: { this.props.scoreO }</p>
      </Card>
    );
  }
}

export default Score;
