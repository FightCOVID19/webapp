import { createMuiTheme } from '@material-ui/core/styles';

export const paisanosTheme = createMuiTheme({
  typography: {
    h5: {
      fontWeight: 500,
      fontSize: 26,
      letterSpacing: 0.5
    },
    button: {
      textTransform: 'none',
    },

  },
  overrides: {
    MuiOutlinedInput: {
      root: {
        backgroundColor: 'rgba(255,255,255,1)',
      }
    }
  },
  shape:{},
  palette: {
    primary: {
      // light: will be calculated from palette.primary.main,
      main: '#310D92'
      // dark: will be calculated from palette.primary.main,
      // contrastText: will be calculated to contrast with palette.primary.main
    },
    secondary: {
      // light: will be calculated from palette.secondary.main,
      main: '#5E17EB'
      // dark: will be calculated from palette.secondary.main,
      // contrastText: will be calculated to contrast with palette.secondary.main
    }
    // Used by `getContrastText()` to maximize the contrast between
    // the background and the text.
    // contrastThreshold: 3,
    // Used by the functions below to shift a color's luminance by approximately
    // two indexes within its tonal palette.
    // E.g., shift from Red 500 to Red 300 or Red 700.
    // tonalOffset: 0.2,
  }
});
