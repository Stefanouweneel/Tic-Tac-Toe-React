import React from 'react';
import Tile from './Tile';
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

  playerClick(position) {
    let tiles = this.state.tiles;
    let player = this.state.turn;

    tiles[position] = player;

    this.setState({
      tiles: tiles,
      turn: player === 'o' ? 'x' : 'o' });

    console.log(player)
    console.log(position)
  }

  render() {
    return (
      <div>
        <Header turn={this.state.turn} />
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
      </div>
    );
  }
}

export default Game;
