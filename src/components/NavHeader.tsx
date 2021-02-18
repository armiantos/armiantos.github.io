import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import Container from '@material-ui/core/Container';
import Toolbar from '@material-ui/core/Toolbar';
import Link from '@material-ui/core/Link';

const NavHeader = () => (
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
                <Button color="inherit" component={Link} href="/ArmiantoSumitro_Resume.pdf">
                    Resume
                </Button>
                {/* <Button color="inherit" component={Link} href="/design">
            Design
        </Button> */}
            </Container>
        </Toolbar>
    </AppBar>
);

export default NavHeader;
