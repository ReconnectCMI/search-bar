import './App.css'
import Box from '@material-ui/core/Box'
import { React } from 'react'
import Search from '../search/search'
import Footer from '../footer/footer'
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'
import NavBar from '../nav/nav'

function App () {
  return (
    <Box maxWidth='100vw' className='App'>
      <NavBar />
      <div className='PaperHeader'>
        <Grid container spacing={3} className='PaperHeader'>
          <Grid item xs={6} className='Header'>
            <Typography variant='h6'>Welkom meneer/mevrouw</Typography>
            <Typography variant='body2'>
              Mijn Loket, het digitale loket van de gemeente Rotterdam heeft een
              nieuw uiterlijk gekregen. U kunt hier informatie vinden over
              producten en diensten van de gemeente en uw zaken direct regelen
              en inzien. Ook kunt u zien wanneer u een afspraak heeft en de
              voortgang van uw verzoek bekijken.
            </Typography>
          </Grid>
          <Grid item xs={6} className='Header'>
            <Typography variant='h6'>Veelbezocht</Typography>
            <Typography variant='body2'>
              - Ik wil een afspraak maken bij een Vraagwijzer
              <br />
              - Ik wil verhuizen. <br />
              - Ik wil een akte of uittreksel van mijn persoonsgegevens (BRP)
              aanvragen. <br />
              - Ik wil een parkeerproduct aanvragen/inzien/wijzigen. <br />
              - Ik wil mijn belastingzaken regelen <br />
            </Typography>
          </Grid>
        </Grid>
      </div>
      <Search />
      <Footer />
    </Box>
  )
}

export default App
