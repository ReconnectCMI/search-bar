import { red } from '@material-ui/core/colors';
import { createMuiTheme } from '@material-ui/core/styles';
// Our theme :D
const theme = createMuiTheme({
  palette: {
    type: 'light',
    primary: {
      main: '#18933C',
      light: '#18933C',
      dark: '#18933C',
    },
    secondary: {
      main: '#ffffff',
      light: '#ffffff',
      dark: '#ffffff',
    },
    error: {
      main: red.A400,
    },
    background: {
      default: '#ffffff',
    },
  },
  typography: {
    fontFamily: 'Rubik',
  },
  overrides: {
    MuiPaper: {
      root: {
        padding: '0',
        marginBottom: '20px',
        // backgroundColor: '#fff', // 5d737e
      },
    },
    MuiButton: {
      root: {
        margin: '5px',
      },
    },
  },
});
export default theme;