import React from 'react';
import Paper from 'material-ui/Paper';

const style = {
  width: 100,
  height: 100,
  borderWidth: 0.5,
  borderColor: '#000',
};

class Tiles extends React.Component {

  clickHandler() {
    this.props.tileClick(this.props.position);
  }

  render() {
    return (
      <div>
        <Paper style={style} zDepth={1} onClick={this.clickHandler.bind(this)}/>
      </div>
    );
  }
}

export default Tiles;
