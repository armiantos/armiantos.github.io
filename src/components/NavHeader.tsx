import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import Box from '@material-ui/core/Box';
import Toolbar from '@material-ui/core/Toolbar';
import Link from '@material-ui/core/Link';

const NavHeader = () => (
    <AppBar position="static">
        <Toolbar component={'nav'}>
            <Box display="flex" justifyContent="center" margin="auto">
                <Button color="inherit" component={Link} href="/" disableRipple>
                    About
                </Button>
                <Button color="inherit" component={Link} href="/work" disableRipple>
                    Work
                </Button>
                <Button color="inherit" component={Link} href="/projects" disableRipple>
                    Projects
                </Button>
                <Button color="inherit" component={Link} href="/ArmiantoSumitro_Resume.pdf" disableRipple>
                    Resume
                </Button>
                {/* <Button color="inherit" component={Link} href="/design">
            Design
        </Button> */}
            </Box>
        </Toolbar>
    </AppBar>
);

export default NavHeader;
