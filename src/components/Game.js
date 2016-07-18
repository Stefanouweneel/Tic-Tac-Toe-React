import React from 'react';

class Game extends React.Component {
  constructor() {
    super();

    this.state = {
      tiles: [
        '', '', '',
        '', '', '',
        '', '', ''
      ],
      turn: 'o'
    }
  }

  render() {
    return (
      <div>
        {this.state.tiles}
      </div>
    );
  }
}

export default Game;
