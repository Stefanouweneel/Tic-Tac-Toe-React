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
      ]
    }
  }

  render() {
    return (
      <div id='game'>
        <Header />
          <div>
          <Tiles position={1} />
          <Tiles position={2} />
          <Tiles position={3} />
        </div>
        <div>
          <Tiles position={4} />
          <Tiles position={5} />
          <Tiles position={6} />
        </div>
        <div>
          <Tiles position={7} />
          <Tiles position={8} />
          <Tiles position={9} />
        </div>
      </div>
    );
  }
}

export default Game;
