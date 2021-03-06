import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import IconButton from '@material-ui/core/IconButton'
import LanguageOutlined from '@material-ui/icons/LanguageOutlined'
import MenuItem from '@material-ui/core/MenuItem'
import Menu from '@material-ui/core/Menu'
import Avatar from '@material-ui/core/Avatar'
import loketImage from '../../img/loket-2.png';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
  },
  menuButton: {
    marginRight: theme.spacing(2)
  },
  title: {
    flexGrow: 1,
    textAlign: 'left'
  },
  appbar: {
    marginBottom: '0',
    backgroundColor: 'white',
    color: 'black'
  },
  image: {
    backgroundSize: 'fit'
  },
  square: {
    height: 64,
    width: 67,
    paddingLeft: 10,
    paddingRight: 10,
    marginLeft: 10,
    backgroundColor: '#18933C'
  }
}))

export default function MenuAppBar () {
  const classes = useStyles()
  const [anchorEl, setAnchorEl] = React.useState(null)
  const open = Boolean(anchorEl)

  const handleMenu = event => {
    setAnchorEl(event.currentTarget)
  }

  const handleClose = () => {
    setAnchorEl(null)
  }

  return (
    <div className={classes.root}>
      <AppBar className={classes.appbar} position='static'>
        <Toolbar>
          <Typography variant='h6' className={classes.title}>
            Mijn Loket
          </Typography>
          <Avatar variant="square" className={classes.square} src={loketImage}>
            </Avatar>
          <div>
            
            <IconButton
              aria-label='lang'
              aria-controls='menu-appbar'
              aria-haspopup='true'
              onClick={handleMenu}
              color='primary'
            >
              <LanguageOutlined fontSize='large' />
            </IconButton>
            <Menu
              id='menu-appbar'
              anchorEl={anchorEl}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right'
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right'
              }}
              open={open}
              onClose={handleClose}
            >
              <MenuItem onClick={handleClose}>Nederlands</MenuItem>
              <MenuItem onClick={handleClose}>Engels</MenuItem>
              <MenuItem onClick={handleClose}>Turks</MenuItem>
            </Menu>
          </div>
        </Toolbar>
      </AppBar>
    </div>
  )
}
