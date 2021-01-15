import React from 'react';
import ReactDOM from 'react-dom';
import { ThemeProvider } from '@material-ui/core';
import Portfolio from './components/Portfolio';
import theme from './theme';
import './index.css';

ReactDOM.render(
    <React.StrictMode>
        <ThemeProvider theme={theme}>
            <Portfolio />
        </ThemeProvider>
    </React.StrictMode>,
    document.getElementById('root')
);
