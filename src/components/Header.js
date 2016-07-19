import React from 'react';

const style = {
  display: 'flex',
  justifyContent: 'center',
}

class Header extends React.Component {
  render() {
    return (
      <div style={style}>
        <h1>Tic Tac Toe</h1>
      </div>
    );
  }
}

export default Header;
