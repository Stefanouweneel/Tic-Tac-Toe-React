import React from 'react';
import Tile from './Tile';
import Header from './Header';
import Board from '../style/Board';
import Score from './Score';

const style = {
  float: 'right',
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
    };
  }

  playerClick(position) {
    let tiles = this.state.tiles;
    let player = this.state.turn;

    tiles[position] = player;

    this.setState({
      tiles: tiles,
      turn: player === 'o' ? 'x' : 'o' });

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
      ]
    });
  }

  render() {
    return (
      <div>
        <Header />
        <Board>
          <div>
            { this.state.tiles.map((tile,position) => {
                return (
                  <Tile player={tile} key={position} position={position} turn={this.state.turn} playerClick={this.playerClick.bind(this)} />
                );
              })
            }
          </div>
        </Board>
        <Score turn={this.state.turn} />
        <div style={style}>
          <button onClick={this.resetGame.bind(this)}> Restart </button>
        </div>
      </div>
    );
  }
}

export default Game;
