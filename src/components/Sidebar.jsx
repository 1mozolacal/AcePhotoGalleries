import React from 'react';

import Drawer from '@material-ui/core/Drawer'
import MenuIcon from '@material-ui/icons/Menu'
import IconButton from '@material-ui/core/IconButton'
import CloseIcon from '@material-ui/icons/Close'
import Grid from '@material-ui/core/Grid'

import brandplh from '../images/brandplh.png'

export default function Sidebar({ activeTab }) {
    const [openVar, setOpen] = React.useState(false)

    return (
        <React.Fragment key={'bar'}>
            <IconButton onClick={() => setOpen(true)} style={{ color: 'white' }}><MenuIcon /></IconButton>
            <Drawer anchor={'left'} open={openVar}  onClose={() => setOpen(false)}>
                <div
                    style={{ width: 341 }}
                    onClick={() => setOpen(false)}
                >
                    <Grid container style={{width: "100%"}}>
                        <Grid item xs={12}><IconButton onClick={() => setOpen(false)} style={{ color: '#4DCCBD' }}><CloseIcon /></IconButton></Grid>
                        <Grid item xs={12} justify="center"><img src={brandplh} /></Grid>
                        <Grid item xs={12}>Home</Grid>
                        <Grid item xs={12}>Gallery</Grid>
                        <Grid item xs={12}>My Purchases</Grid>
                        <Grid item xs={12}>About Me</Grid>
                    </Grid>

                </div>
            </Drawer>
        </React.Fragment>
    );
}