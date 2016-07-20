import React from 'react';
import Tile from './Tile';
import Header from './Header';
import Score from './Score';
import RaisedButton from 'material-ui/RaisedButton';
import {Card} from 'material-ui/Card';

const style = {
  width: 306,
  height: 306,
  marginBottom: 10,
}

const buttonStyle = {
  marginTop: 10,
}

class Game extends React.Component {

  constructor() {
    super();

    this.state = {
      tiles: [
        '', '', '',
        '', '', '',
        '', '', ''
      ],
      turn: 'o',
      winner: '',
    };
  }

  checkWinner() {
    let t = this.state.tiles;

    if ((t[0] === 'o' && t[1] === 'o' && t[2] === 'o') ||
        (t[3] === 'o' && t[4] === 'o' && t[5] === 'o') ||
        (t[6] === 'o' && t[7] === 'o' && t[8] === 'o') ||
        (t[0] === 'o' && t[3] === 'o' && t[6] === 'o') ||
        (t[1] === 'o' && t[4] === 'o' && t[7] === 'o') ||
        (t[2] === 'o' && t[5] === 'o' && t[8] === 'o') ||
        (t[0] === 'o' && t[4] === 'o' && t[8] === 'o') ||
        (t[2] === 'o' && t[4] === 'o' && t[6] === 'o')) {

        return 'o';
      }

    if ((t[0] === 'x' && t[1] === 'x' && t[2] === 'x') ||
        (t[3] === 'x' && t[4] === 'x' && t[5] === 'x') ||
        (t[6] === 'x' && t[7] === 'x' && t[8] === 'x') ||
        (t[0] === 'x' && t[3] === 'x' && t[6] === 'x') ||
        (t[1] === 'x' && t[4] === 'x' && t[7] === 'x') ||
        (t[2] === 'x' && t[5] === 'x' && t[8] === 'x') ||
        (t[0] === 'x' && t[4] === 'x' && t[8] === 'x') ||
        (t[2] === 'x' && t[4] === 'x' && t[6] === 'x')) {

        return 'x';
        }
  }

  playerClick(position) {
    let tiles = this.state.tiles;
    let player = this.state.turn;
    let winner = this.state.winner;

      if ( (tiles[position] === 'x' || tiles[position] === 'o' || winner === 'x' || winner === 'o' ) ) return;
      tiles[position] = player;

      this.setState({
        tiles: tiles,
        turn: player === 'o' ? 'x' : 'o',
        winner: this.checkWinner(),
      });

    console.log(tiles)
    console.log(player)
    console.log(position)
  }

  resetGame(event) {
    event.preventDefault();
    this.setState({
      tiles:  [
          '', '', '',
          '', '', '',
          '', '', ''
      ],
      turn: 'o',
      winner: '',
    });
  }

  render() {
    return (
      <div>
        <Header />
        <Card style={style}>
          <div>
            { this.state.tiles.map((tile,position) => {
                return (
                  <Tile player={tile} key={position} position={position} turn={this.state.turn} playerClick={this.playerClick.bind(this)} />
                );
              })
            }
          </div>
        </Card>
        <Score turn={this.state.turn} winner={this.state.winner} />
        <div>
          <RaisedButton label="Restart" fullWidth={true} style={buttonStyle} onClick={this.resetGame.bind(this)} />
        </div>
      </div>
    );
  }
}

export default Game;
