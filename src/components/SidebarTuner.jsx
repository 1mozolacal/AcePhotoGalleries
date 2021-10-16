import React from 'react';

import Drawer from '@material-ui/core/Drawer';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import '../stylesheets/tuner.sass'

const SidebarTuner = ({children}) => {
    const [open, setOpen] = React.useState(true);

    return (
        <>
            <IconButton
                color="inherit"
                aria-label="open drawer"
                onClick={() => setOpen(true)}
                edge="start"
            >
                <MenuIcon />
            </IconButton>

            <Drawer
                variant="persistent"
                anchor="right"
                open={open}
                classes={{paper:"half-screen"}}
            >
                <div className="sidebar-tuner">
                    <IconButton onClick={() => setOpen(false)}>
                        <ChevronLeftIcon />
                    </IconButton>
                </div>
                <Divider />
                {children}
            </Drawer>
        </>
    );
}

export default SidebarTuner