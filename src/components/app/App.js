import logo from './../../logo.svg';
import './App.css';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import { Button, Paper } from '@material-ui/core';
import React from 'react';
import Icon from '../icon/icons';
import { speech } from '../Speak/Speak';

import Search from '../search/search';

function App() {
  return (
    <Container maxWidth="sm" className="App">
      <Search/>
      <Paper>
        <img src={logo} className="App-logo" alt="logo" />
        <Typography variant="h4" component="h1" gutterBottom>
          React with Material-UI :)
        </Typography>
        <Button variant="contained" color="primary">
          Primary Button
        </Button>
        <Button variant="contained" color="secondary">
          Secondary Button yas
        </Button>
      </Paper>
      <Icon title="Hallo" description="Ik ben een hele mooie knaap." speech={speech}/>
    </Container>
  );
}

export default App;
