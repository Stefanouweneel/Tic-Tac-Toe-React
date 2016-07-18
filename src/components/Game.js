import React from 'react';
import Tiles from './Tiles';
import Header from './Header';

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

  tileClick(childComponent) {
    console.log(childComponent.props)
  }

  render() {
    return (
      <div id='game'>
        <Header />
          <div style={this.baseStyle}>
          <Tiles position={1} onClick={this.tileClick} />
          <Tiles position={2} onClick={this.tileClick} />
          <Tiles position={3} onClick={this.tileClick} />
        </div>
        <div style={this.baseStyle}>
          <Tiles position={4} onClick={this.tileClick} />
          <Tiles position={5} onClick={this.tileClick} />
          <Tiles position={6} onClick={this.tileClick} />
        </div>
        <div style={this.baseStyle}>
          <Tiles position={7} onClick={this.tileClick} />
          <Tiles position={8} onClick={this.tileClick} />
          <Tiles position={9} onClick={this.tileClick} />
        </div>
      </div>
    );
  }
}

export default Game;
