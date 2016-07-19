import React from 'react';
import Paper from 'material-ui/Paper';

const style = {
  display: 'inlineBlock',
  textAlign: 'center',
  float: 'left',
  width: 100,
  height: 100,
  margin: 1,
};

class Tile extends React.Component {

  clickHandler() {
    event.preventDefault();
    this.props.playerClick(this.props.position);
  }

  render() {
    return (
      <div>
        <Paper style={style} zDepth={1} position={this.props.position} onClick={this.clickHandler.bind(this)} />
      </div>
    );
  }
}

export default Tile;
