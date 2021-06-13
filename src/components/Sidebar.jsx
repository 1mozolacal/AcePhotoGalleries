import React from 'react';
import Drawer from '@material-ui/core/Drawer';
import Button from '@material-ui/core/Button';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail'; 
import MenuIcon from '@material-ui/icons/Menu';

import '../stylesheets/sidebar.sass'

export default function Sidebar(){
    const [openVar, setOpen] = React.useState(false)

    const displaySide = () =>(
        <div
            role="presentation"
            onClick={() => setOpen(false)}
            onKeyDown={() => setOpen(false)}
        >
            <List>
            {['Inbox', 'Starred', 'Send email', 'Drafts'].map((text, index) => (
                <ListItem button key={text}>
                <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
                <ListItemText primary={text} />
                </ListItem>
            ))}
            </List>
            <Divider />
            <List>
            {['All mail', 'Trash', 'Spam'].map((text, index) => (
                <ListItem button key={text}>
                <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
                <ListItemText primary={text} />
                </ListItem>
            ))}
            </List>
        </div>
        );
     
    return (
    <div>
        <div>
            <Button onClick={() => setOpen(true)}>
                <MenuIcon className='menu'></MenuIcon>
            </Button>
            </div>
            <Drawer anchor={'left'} open={openVar} onClick={() => setOpen(false)} onClose={() => setOpen(false)}>
            {displaySide()}
            </Drawer>
    </div>
    );
}