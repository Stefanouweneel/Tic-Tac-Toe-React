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

      turn: 'x',
    }

    this.baseStyle = {
      display: 'flex',
      justifyContent: 'center',
    }
  }

  tileClick(position, player) {
    console.log(position)
    console.log(player)
    let tiles = this.state.tiles;
    if ( (tiles[position] === 'x' || tiles[position] === 'o') ) return;
    tiles[position] = player;
    this.setState({tiles: tiles, turn: player === 'o' ? 'x' : 'o'});
  }

  render() {
    return (
      <div id='game'>
        <Header />
        <div style={this.baseStyle}>
          <Board>
            { this.state.tiles.map((tile, position) => {
               return (
                <Tiles status={tile} key={position} position={position} turn={this.state.turn} tileClick={this.tileClick} /> );
             }, this) }
          </Board>
        </div>
      </div>
    );
  }
}

export default Game;
