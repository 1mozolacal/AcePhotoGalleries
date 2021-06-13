import React from 'react';
import { Link } from 'gatsby';

import Drawer from '@material-ui/core/Drawer'
import Button from '@material-ui/core/Button'
import MenuIcon from '@material-ui/icons/Menu'
import IconButton from '@material-ui/core/IconButton'
import CloseIcon from '@material-ui/icons/Close'
import Grid from '@material-ui/core/Grid'

import brandplh from '../images/brandplh.png'

import '../stylesheets/sidebar.sass'

export default function Sidebar({ activeTab }) {
    const [openVar, setOpen] = React.useState(false)

    const createButton = (text, to) => {
        return(<Link to={to}><button className='linkButton'>{text}</button></Link>)
    }

    return (
        <React.Fragment key={'bar'}>
            <IconButton onClick={() => setOpen(true)} style={{ color: 'white' }}><MenuIcon /></IconButton>
            <Drawer anchor={'left'} open={openVar}  onClose={() => setOpen(false)}>
                <div
                    className='drawer'
                    onClick={() => setOpen(false)}
                >
                    <Grid container style={{width: "100%"}}>
                        <Grid item xs={12}><IconButton onClick={() => setOpen(false)} style={{ color: '#4DCCBD' }}><CloseIcon /></IconButton></Grid>
                        <Grid item xs={12}><img src={brandplh} /></Grid>
                        <Grid item xs={12}>{createButton('Home','/')}</Grid>
                        <Grid item xs={12}>{createButton('Bio','/bio')}</Grid>
                        <Grid item xs={12}>{createButton('Gallery','/gallery')}</Grid>
                    </Grid>

                </div>
            </Drawer>
        </React.Fragment>
    );
}