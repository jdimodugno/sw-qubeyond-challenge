import { createMuiTheme } from '@material-ui/core';
import grey from '@material-ui/core/colors/grey'
import yellow from '@material-ui/core/colors/yellow'

const Default = createMuiTheme({
  palette: {
    primary: {
      main: yellow['A200'],
      dark: yellow['A400']
    },
    secondary: {
      main: grey['900'],
    },
    background: {
      default: grey['700'],
      paper: grey['900']
    }
  },
});

export default Default;