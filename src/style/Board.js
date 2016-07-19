import React from 'react';
import lodash from 'lodash';

class Board extends React.Component {
  constructor(props) {
    super(props);

    this.baseStyle = _.merge({
      width: 310,
      height: 310,
      boxShadow: "1px -1px 5px rgba(0,0,0,0.3)",
    }, props.style || {});
  }

  render() {
    return (
      <div style={ this.baseStyle }>
        { this.props.children }
      </div>
    );
  }
}

export default Board;
