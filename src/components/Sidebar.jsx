import React from 'react';
import { Link } from 'gatsby';

import Drawer from '@material-ui/core/Drawer'
import MenuIcon from '@material-ui/icons/Menu'
import IconButton from '@material-ui/core/IconButton'
import CloseIcon from '@material-ui/icons/Close'
import Grid from '@material-ui/core/Grid'

import brandplh from '../images/brandplh.png'

import '../stylesheets/sidebar.sass'

export default function Sidebar({ activeTab }) {
    const [openVar, setOpen] = React.useState(false)

    const mapData = [
        {path: '/', text: 'Home'},
        {path: '/bio', text: 'Bio'},
        {path: '/gallery', text: 'Gallery'}
    ]

    const createButton = (text, to, active) => {
        return (<Link to={to} className='link-button'><span className={`${active? 'active': ''}`}>{text}</span></Link>)
    }

    return (
        <React.Fragment key={'bar'}>
            <IconButton onClick={() => setOpen(true)} style={{ color: 'white' }}><MenuIcon /></IconButton>
            <Drawer anchor={'left'} open={openVar} onClose={() => setOpen(false)}>
                <div
                    className='drawer'
                    onClick={() => setOpen(false)}
                >
                    <Grid container style={{ width: "100%" }}>
                        <Grid item xs={12}><IconButton onClick={() => setOpen(false)} style={{ color: '#4DCCBD' }}><CloseIcon /></IconButton></Grid>
                        <Grid item xs={12} className="sidebar-grid-item"><img src={brandplh} /></Grid>
                        {
                            mapData.map(({path, text}, index) => <Grid item xs={12} className="sidebar-grid-item">{createButton(text,path, index === activeTab)}</Grid>)
                        }
                    </Grid>

                </div>
            </Drawer>
        </React.Fragment>
    );
}