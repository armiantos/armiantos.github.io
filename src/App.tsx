import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import About from './components/About';
import Work from './components/Work';

function App() {
    return (
        <Router>
            <div>
                <nav>
                    <ul>
                        <li>
                            <Link to="/">Home</Link>
                        </li>
                        <li>
                            <Link to="/work">Work</Link>
                        </li>
                        <li>
                            <Link to="/projects">Projects</Link>
                        </li>
                    </ul>
                </nav>

                {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
                <Switch>
                    <Route path="/projects">
                        {/* TODO */}
                    </Route>
                    <Route path="/work">
                        <Work />
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
