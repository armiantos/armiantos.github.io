import { createMuiTheme, responsiveFontSizes } from '@material-ui/core';
import { fade } from '@material-ui/core/styles/colorManipulator';

const theme = createMuiTheme({
    palette: {
        type: 'dark',
        background: {
            default: '#0E1633',
        },
        primary: {
            main: '#080e24',
        },
    },
    typography: {
        fontFamily: ['Lato', '-apple-system', 'sans-serif'].join(','),
    },
    overrides: {
        MuiGrid: {
            item: {
                margin: '10px',
            },
        },
        MuiButton: {
            colorInherit: {
                color: 'inherit !important', // Fix for clashing text colors when deployed
            },
            root: {
                borderRadius: '20px',
            },
        },
        MuiPaper: {
            root: {
                backgroundColor: fade('#080e24', 0.7),
            },
            rounded: {
                borderRadius: '20px',
            },
        },
        MuiTypography: {
            colorPrimary: {
                color: '#fff',
            },
            colorSecondary: {
                color: '#eaf075'
            }
        },
    },
});

export default responsiveFontSizes(theme);
