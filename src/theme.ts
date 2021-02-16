import { createMuiTheme, responsiveFontSizes } from '@material-ui/core';

const theme = createMuiTheme({
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
                color: 'inherit !important' // Fix for clashing text colors when deployed
            }
        },
    },
});

export default responsiveFontSizes(theme);
