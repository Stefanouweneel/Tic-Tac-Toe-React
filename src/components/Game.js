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
      scoreO: null,
      scoreX: null,
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

    if ( (winner === 'x' || winner === 'o' ) ) return;

    this.plusOne();

      if ( (tiles[position] === 'x' || tiles[position] === 'o' ) ) return;
      tiles[position] = player;

      this.setState({
        tiles: tiles,
        turn: player === 'o' ? 'x' : 'o',
      });

    console.log(tiles)
    console.log(player)
    console.log(position)
    console.log(winner)
  }

  plusOne() {
    let scoreX = this.state.scoreX;
    let scoreO = this.state.scoreO;
    let winner = this.checkWinner();

      if (winner === 'o') {
        this.setState({
          scoreO: scoreO + 1,
          winner: 'o'
        });
      }
      if (winner === 'x') {
        this.setState({
          scoreX: scoreX + 1,
          winner: 'x'
        });
      }
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
                  <Tile player={tile} key={position} position={position} turn={ this.state.turn } playerClick={ this.playerClick.bind(this) } />
                );
              })
            }
          </div>
        </Card>
        <Score turn={ this.state.turn } scoreO={ this.state.scoreO } scoreX={ this.state.scoreX } winner={ this.state.winner }/>
        <div>
          <RaisedButton label="New Game" fullWidth={true} style={buttonStyle} onClick={ this.resetGame.bind(this) } />
        </div>
      </div>
    );
  }
}

export default Game;
