import React from 'react';
import Game from './components/Game';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

class App extends React.Component {
  render() {
    return (
      <MuiThemeProvider>
        <Game />
      </MuiThemeProvider>
    );
  }
}

export default App;
