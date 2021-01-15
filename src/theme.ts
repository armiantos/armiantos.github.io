import { createMuiTheme, responsiveFontSizes } from '@material-ui/core';

const theme = createMuiTheme({
    typography: {
        fontFamily: ['Open Sans', '-apple-system', 'sans-serif'].join(','),
    },
});

export default responsiveFontSizes(theme);
