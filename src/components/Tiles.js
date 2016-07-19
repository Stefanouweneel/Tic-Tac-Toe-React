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

class Tiles extends React.Component {

  clickHandler() {
    event.preventDefault();
    this.props.playerClick(this.props.position, this.props.turn);
  }

  render() {
    return (
      <div>
        <Paper style={style} zDepth={1} className={this.props.status === '' ? 'tile' : 'tile status-' + this.props.status} onClick={this.clickHandler.bind(this)} />
        {this.props.status}
      </div>
    );
  }
}



export default Tiles;
