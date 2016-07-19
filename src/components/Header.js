import React from 'react';

const style = {
  display: 'flex',
  justifyContent: 'center',
}

class Header extends React.Component {
  render() {
    return (
      <div style={style} id='header'>
        <h3>Tic Tac Toe - Player {this.props.turn}'s turn.</h3>
      </div>
    );
  }
}

export default Header;
