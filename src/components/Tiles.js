import React from 'react';
import Paper from 'material-ui/Paper';

const style = {
  width: 100,
  height: 100,
  borderWidth: 0.5,
  borderColor: '#d6d7da',
};

class Tiles extends React.Component {

  render() {
    return (
      <div>
        <Paper style={style} zDepth={1}>
          {this.props.player}
        </Paper>
      </div>
    );
  }
}

export default Tiles;
