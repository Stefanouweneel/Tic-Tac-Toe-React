import React from 'react';
import Fonts from '../style/Fonts';

const style = {
  display: 'flex',
  justifyContent: 'center',
  fontFamily: Fonts.sansSerif,
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
