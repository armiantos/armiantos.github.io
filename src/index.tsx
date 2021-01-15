import React from 'react';
import ReactDOM from 'react-dom';
import { createMuiTheme, responsiveFontSizes, ThemeProvider } from '@material-ui/core';
import './index.css';
import Portfolio from './components/Portfolio';

let theme = createMuiTheme({});
theme = responsiveFontSizes(theme);

ReactDOM.render(
    <React.StrictMode>
        <ThemeProvider theme={theme}>
            <Portfolio />
        </ThemeProvider>
    </React.StrictMode>,
    document.getElementById('root')
);
