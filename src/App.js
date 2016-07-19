import React from 'react';
import Game from './components/Game';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

const style = {
  display: 'flex',
  justifyContent: 'center',
}

class App extends React.Component {
  render() {
    return (
      <div style={style}>
        <MuiThemeProvider>
          <Game />
        </MuiThemeProvider>
      </div>
    );
  }
}

export default App;
