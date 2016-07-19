import React from 'react';

const style = {
  display: 'flex',
  justifyContent: 'center',
}

class Header extends React.Component {
  render() {
    return (
      <div style={style} id='header'>
        <h1>Tic Tac Toe</h1><br />
        <h3>Player {this.props.turn} turn.</h3>
      </div>
    );
  }
}

export default Header;
