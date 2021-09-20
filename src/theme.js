import { createTheme } from '@mui/material/styles';
import { red } from '@mui/material/colors';

// Create a theme instance.
const theme = createTheme({
  palette: {
    primary: {
      main: '#ffffff',
    },
    secondary: {
      main: '#4b014b',
    },
    white: {
      main: '#FAFAFA',
    },
    error: {
      main: red.A400,
    },
    background: {
      // default: "#f3f3f4"
      default: "#f2f4f7"
    }
  },
});

export default theme;
