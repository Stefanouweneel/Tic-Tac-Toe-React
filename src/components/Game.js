import React from 'react';
import Tiles from './Tiles';
import Header from './Header';
import Paper from 'material-ui/Paper';


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
        { this.state.tiles.map((position) => {
          return <Tiles tile={position} />;
        }, this) }
      </div>
    );
  }
}

export default Game;
