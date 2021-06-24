import './footer.css'
import React from "react";
// import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';
import Container from '@material-ui/core/Container';
import { makeStyles } from '@material-ui/core/styles';


const footers = [
    {
      title: 'Veelbezocht',
      description: ['Parkeren', 'Onderhoud Mijn Loket', 'Vernieuwing Tweebosbuurt', 'Belangrijke data bijstand', 'Belastingen'],
    },
    {
      title: 'Snel regelen',
      description: ['Aanmelden parkeren bezoek en mantelzorgers', 'Naheffingsaanslag parkeerbelasting (Parkeerbon)', 'Grofvuil', 'Bezoek en mantelzorger aanmelden app', 'Paspoort'],
    },
    {
      title: 'Contact',
      description: ['Bellen naar 14 010', 'Melding, vraag of klacht', 'Langskomen', 'Brief sturen'],
    },
  ];

  const useStyles = makeStyles((theme) => ({
    '@global': {
      ul: {
        margin: 0,
        padding: 0,
        listStyle: 'none',
      },
    },
    heroContent: {
      padding: theme.spacing(8, 0, 6),
    },
    footer: {
      borderTop: `1px solid ${theme.palette.divider}`,
      borderRadius: 0,
      marginTop: theme.spacing(8),
      paddingTop: theme.spacing(3),
      paddingBottom: theme.spacing(3),
      [theme.breakpoints.up('sm')]: {
        paddingTop: theme.spacing(6),
        paddingBottom: theme.spacing(6),
      },
    },
    fogrid: {
        textAlign: 'left',
    },
    backcolor: {
        backgroundColor: '#18933C'
    }
  }));

function Footer() {
    const classes = useStyles();
  return (
    <div className={classes.backcolor}>
        <Container maxWidth="md" component="footer" className={classes.footer}>
        <Grid className={classes.fogrid} container spacing={4} justify="space-evenly">
          {footers.map((footer) => (
              <Grid item   key={footer.title}>
              <Typography variant="h6" color="secondary" gutterBottom>
                {footer.title}
              </Typography>
              <ul>
                {footer.description.map((item) => (
                    <li key={item}>
                    <Link href="#" variant="subtitle1" color="secondary">
                      {item}
                    </Link>
                  </li>
                ))}
              </ul>
            </Grid>
          ))}
        </Grid>
      </Container>
   </div>
   );
}

export default Footer;
