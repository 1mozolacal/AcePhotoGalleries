import * as React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Box from '@material-ui/core/Box';
import Toolbar from '@material-ui/core//Toolbar';
import Button from '@material-ui/core//Button';
import { Link } from 'gatsby';

const AdminNavbar = () => {
    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static"  className="admin-nav">
                <Toolbar>
                    <Link to="/uploads"><Button><strong>Uploader</strong></Button></Link>
                    <Link to="/tuner"><Button><strong>Tuner</strong></Button></Link>
                </Toolbar>
            </AppBar>
        </Box>
    );
}

export default AdminNavbar;