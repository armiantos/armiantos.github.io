import React from 'react';
import ReactDOM from 'react-dom';
import { createMuiTheme, responsiveFontSizes, ThemeProvider } from '@material-ui/core';
import './index.css';
import Portfolio from './components/portfolio/Portfolio';
import * as serviceWorker from './serviceWorker';

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

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
