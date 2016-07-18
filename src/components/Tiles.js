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
    this.props.onClick(this);
    // console.log(this.props.position)
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
