import React from 'react';
import Paper from 'material-ui/Paper';

const style = {
  width: 100,
  height: 100,
  margin: 1,
};

class Tiles extends React.Component {

  clickHandler() {
    event.preventDefault();
    this.props.tileClick(this.props.key, this.props.turn, this.props.position);
  }

  render() {
    return (
      <div>
        <Paper style={style} zDepth={1} className={this.props.status === '' ? 'tile' : 'tile status-' + this.props.status} onClick={this.clickHandler} />
        {this.props.status}
      </div>
    );
  }
}

export default Tiles;
