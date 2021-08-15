import React, {useState} from 'react';
import { Link } from 'gatsby';

import Drawer from '@material-ui/core/Drawer'
import MenuIcon from '@material-ui/icons/Menu'
import IconButton from '@material-ui/core/IconButton'
import CloseIcon from '@material-ui/icons/Close'
import Grid from '@material-ui/core/Grid'

import '../stylesheets/sidebar.sass'

export default function Sidebar({ activeTab }) {
    const [openVar, setOpen] = useState(false)

    const mapData = [
        {path: '/', text: 'Home'},
        {path: '/bio', text: 'Bio'},
        {path: '/gallery', text: 'Gallery'}
    ]

    const createButton = (text, to, active, tempClassName) => {
        return (<Link to={to} className={tempClassName}><span className={`${active? 'active': ''}`}>{text}</span></Link>)
    }

    return (
        <React.Fragment key={'bar'}>
            <IconButton onClick={() => setOpen(true)} style={{ color: 'white' }}><MenuIcon /></IconButton>
            <Drawer anchor={'left'} open={openVar} onClose={() => setOpen(false)}>
                <div className='drawer'>
                    <Grid container style={{ width: "100%" }}>
                        <Grid item xs={12}><IconButton onClick={() => setOpen(false)} style={{ color: '#4DCCBD' }}><CloseIcon /></IconButton></Grid>
                        <Grid item xs={12} className="sidebar-grid-item">
                            <div className="side-logo"/>
                        </Grid>
                        {
                            mapData.map(({path, text}, index) => <Grid item xs={12} key={index} className="sidebar-grid-item">{createButton(text,path, index === activeTab,'link-button-1')}</Grid>)
                        }
                    </Grid>

                </div>
            </Drawer>
        </React.Fragment>
    );
}