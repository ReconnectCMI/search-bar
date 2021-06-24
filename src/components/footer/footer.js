import './footer.css'
import React from "react";
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';

function Footer() {
  return (
    <Paper className="Footer" elevation={0}>
        <Grid container spacing={3} className="PaperFooter">
        <Grid item xs={4} className="Header">
            <Typography variant="body2">
              Veelbezocht
            </Typography><br/>
            <Typography variant="caption">
                <Link href="#" className="footerLinks" color="inherit">
                    Parkeren
                </Link><br />
                <Link href="#" className="footerLinks" color="inherit">
                    Onderhoud Mijn Loket
                </Link><br />
                <Link href="#" className="footerLinks" color="inherit">
                    Vernieuwing Tweebosbuurt
                </Link><br />
                <Link href="#" className="footerLinks" color="inherit">
                    Belangrijke data bijstand
                </Link><br />
                <Link href="#" className="footerLinks" color="inherit">
                    Belastingen
                </Link><br />
            </Typography>
          </Grid>
          <Grid item xs={4} className="Header">
            <Typography variant="body2">
              Snel regelen
            </Typography><br/>
            <Typography variant="caption">
                <Link href="#" className="footerLinks" color="inherit">
                    Aanmelden parkeren bezoek en mantelzorgers
                </Link><br />
                <Link href="#" className="footerLinks" color="inherit">
                    Naheffingsaanslag parkeerbelasting (Parkeerbon)
                </Link><br />
                <Link href="#" className="footerLinks" color="inherit">
                    Grofvuil
                </Link><br />
                <Link href="#" className="footerLinks" color="inherit">
                    Bezoek en mantelzorger aanmelden app
                </Link><br />
                <Link href="#" className="footerLinks" color="inherit">
                    Paspoort
                </Link>
            </Typography>
          </Grid>
          <Grid item xs={4} className="Header">
            <Typography variant="body2">
              Contact
            </Typography><br/>
            <Typography variant="caption">
                <Link href="#" className="footerLinks" color="inherit">
                    Bellen naar 14 010
                </Link><br />
                <Link href="#" className="footerLinks" color="inherit">
                    Melding, vraag of klacht
                </Link><br />
                <Link href="#" className="footerLinks" color="inherit">
                    Langskomen
                </Link><br />
                <Link href="#" className="footerLinks" color="inherit">
                    Brief sturen
                </Link><br />
            </Typography>
          </Grid>
        </Grid>
    </Paper>
  );
}

export default Footer;
