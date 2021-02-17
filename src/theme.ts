import { createMuiTheme, responsiveFontSizes } from '@material-ui/core';

const theme = createMuiTheme({
    palette: {
        type: 'dark',
        background: {
            default: '#0E1633'
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
        },
    },
});

export default responsiveFontSizes(theme);
