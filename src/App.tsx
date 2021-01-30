import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import Toolbar from '@material-ui/core/Toolbar';
import Link from '@material-ui/core/Link';

import About from './components/About';
import Work from './components/Work';
import Projects from './components/Projects';
import WIP from './components/WIP';

import './App.css';
import Container from '@material-ui/core/Container';

function App() {
    return (
        <Router>
            <CssBaseline />

            <div className="App">
                <AppBar position="static">
                    <Toolbar component={'nav'}>
                        <Container>
                            <Button color="inherit" component={Link} href="/">
                                About
                            </Button>
                            <Button color="inherit" component={Link} href="/work">
                                Work
                            </Button>
                            <Button color="inherit" component={Link} href="/projects">
                                Projects
                            </Button>
                            <Button color="inherit" component={Link} href="/design">
                                Design
                            </Button>
                        </Container>
                    </Toolbar>
                </AppBar>

                {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
                <Switch>
                    <Route path="/work">
                        <Work />
                    </Route>
                    <Route path="/projects">
                        <Projects />
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
