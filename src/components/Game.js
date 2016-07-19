import React from 'react';
import Tiles from './Tiles';
import Header from './Header';
import Board from '../style/Board';

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

  playerClick(position, player) {
    let tiles = this.state.tiles;
    let turn = this.state.turn;

    tiles[position] = player;

    this.setState({
    tiles: tiles,
    turn: player === 'o' ? 'x' : 'o' });

    console.log(player)
    console.log(this.state.tiles[position])
    console.log(this.state.turn)
  }

  render() {
    return (
      <div>
        <Header turn={this.state.turn} />
        <Board>
          <div>
            { this.state.tiles.map((tile,position) => {
                return (
                <Tiles status={tile} key={position} turn={this.state.turn} playerClick={this.playerClick.bind(this)} />
                );
              }, this)
            }
          </div>
        </Board>
      </div>
    );
  }
}

export default Game;
