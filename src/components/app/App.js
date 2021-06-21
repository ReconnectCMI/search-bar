import './App.css';
import Container from '@material-ui/core/Container';
import React from 'react';
import Paper from '@material-ui/core/Paper';
import Search from '../search/search';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

import Search from '../search/search';

function App() {
  return (
    <Container maxWidth="100%" className="App">
      <Paper className="PaperHeader" elevation={3}>
        <Grid container spacing={3} className="PaperHeader">
          <Grid item xs={6} className="Header">
            <Typography variant="h6">
              Welkom meneer/mevrouw
            </Typography>
            <Typography variant="body2">
              Mijn Loket, het digitale loket van de gemeente Rotterdam heeft een nieuw uiterlijk gekregen. 
              U kunt hier informatie vinden over producten en diensten van de gemeente en uw zaken direct regelen en inzien. 
              Ook kunt u zien wanneer u een afspraak heeft en de voortgang van uw verzoek bekijken.
            </Typography>
          </Grid>
          <Grid item xs={6} className="Header">
            <Typography variant="h6">
              Veelbezocht
            </Typography>
            <Typography variant="body2">
              - Ik wil een afspraak maken bij een Vraagwijzer<br/>
              - Ik wil verhuizen. <br/>
              - Ik wil een akte of uittreksel van mijn persoonsgegevens (BRP) aanvragen. <br/>
              - Ik wil een parkeerproduct aanvragen/inzien/wijzigen. <br/>
              - Ik wil mijn belastingzaken regelen <br/>
            </Typography>
          </Grid>
        </Grid>
      </Paper>
      <Search/>
    </Container>
  );
}

export default App;
