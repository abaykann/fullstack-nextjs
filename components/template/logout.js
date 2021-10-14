import Cookie from 'js-cookie';
import Router from 'next/router';
import {Container, ListItemButton, ListItemIcon, ListItemText} from '@mui/material';
import LockTwoToneIcon from '@mui/icons-material/LockTwoTone';


export default function Logout() {
    function logoutHandler(e) {
        e.preventDefault();
        Cookie.remove('token');
        Router.replace('/auth/login');
    }
    return (
        // <Container>
        <ListItemButton onClick={logoutHandler.bind(this)} style={{
            // width: '100%',
            backgroundColor: '#c6cbe0',
            marginTop: '40px',
            borderRadius:'60px',
            // position: 'fixed',
            // bottom: 0,
            // textAlign: 'center',
        }}>
            <ListItemIcon>
                <LockTwoToneIcon/>
            </ListItemIcon>
            <ListItemText primary="Logout"/>
        </ListItemButton>
       // </Container>
    )
}