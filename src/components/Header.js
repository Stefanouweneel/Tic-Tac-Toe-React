import React from 'react';
import Fonts from '../style/Fonts';
import {Card} from 'material-ui/Card';

const style = {
  width: 305,
  display: 'flex',
  justifyContent: 'center',
  fontFamily: Fonts.sansSerif,
  backgroundColor: '#D3D3D3',
  marginBottom: 10,
}

class Header extends React.Component {
  render() {
    return (
      <Card style={style}>
        <h2>Tic Tac React</h2>
      </Card>
    );
  }
}

export default Header;
