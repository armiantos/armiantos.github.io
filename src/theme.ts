import { createMuiTheme, responsiveFontSizes } from '@material-ui/core';

const theme = createMuiTheme({
    palette: {
        type: 'dark',
        background: {
            default: '#0E1633'
        },
        primary: {
            main:'#080e24'
        }
    },
    typography: {
        fontFamily: ['Open Sans', '-apple-system', 'sans-serif'].join(','),
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
                borderRadius: '20px'
            }
        },
        MuiPaper: {
            root: {
                backgroundColor: '#080e24',
            },
            rounded: {
                borderRadius: '20px'
            }
        },
    },
});

export default responsiveFontSizes(theme);
