import React from 'react';
import Fonts from '../style/Fonts';

const style = {
  width: 305,
  display: 'flex',
  justifyContent: 'center',
  fontFamily: Fonts.sansSerif,
  backgroundColor: '#D3D3D3',
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
