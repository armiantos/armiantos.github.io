import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import Toolbar from '@material-ui/core/Toolbar';
import Link from '@material-ui/core/Link';

import About from './components/About';
import Work from './components/Work';
import WIP from './components/WIP';

import './App.css';

function App() {
    return (
        <Router>
            <CssBaseline />

            <div className="App">
                <AppBar position="static">
                    <Toolbar>
                        <Button color="inherit" component={Link} href="/">
                            About
                        </Button>
                        <Button color="inherit" href="/work">
                            Work
                        </Button>
                        <Button color="inherit" href="/coding">
                            Coding
                        </Button>
                        <Button color="inherit" href="/design">
                            Design
                        </Button>
                    </Toolbar>
                </AppBar>

                {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
                <Switch>
                    <Route path="/work">
                        <Work />
                    </Route>
                    <Route path="/coding">
                        <WIP />
                    </Route>
                    <Route path="/design">
                        <WIP />
                    </Route>
                    <Route path="/">
                        <About />
                    </Route>
                </Switch>
            </div>
        </Router>
    );
}

export default App;
