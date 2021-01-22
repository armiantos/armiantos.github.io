import { createMuiTheme, responsiveFontSizes } from '@material-ui/core';

const theme = createMuiTheme({
    typography: {
        fontFamily: ['Open Sans', '-apple-system', 'sans-serif'].join(','),
    },
    overrides: {
        MuiGrid: {
            item: {
                margin: '10px'
            }
        }
    }
});

export default responsiveFontSizes(theme);
