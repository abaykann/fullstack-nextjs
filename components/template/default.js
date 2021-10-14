import * as React from 'react';
import { styled, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import MuiDrawer from '@mui/material/Drawer';
import MuiAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import CssBaseline from '@mui/material/CssBaseline';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import Link from 'next/link'
import ListItemButton from '@mui/material/ListItemButton';
import HomeIcon from '@mui/icons-material/Home';
import LocalOfferIcon from '@mui/icons-material/LocalOffer';
import Button from '@mui/material/Button';

import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Logout from './logout';

const drawerWidth = 280;

const openedMixin = (theme) => ({
  width: drawerWidth,
  border: "none",
  boxShadow:"0 20px 20px lightgrey",
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: 'hidden',
});

const closedMixin = (theme) => ({
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: 'hidden',
  width: `calc(${theme.spacing(7)} + 0px)`,
  [theme.breakpoints.up('sm')]: {
    width: `calc(${theme.spacing(9)} + 0px)`,
    border: "none",
    boxShadow:"0 20px 20px lightgrey",
  },
});

const DrawerHeader = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 1),
  marginBottom:'10px',
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(['width', 'margin'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: drawerWidth,
    // width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(
  ({ theme, open }) => ({
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: 'nowrap',
    boxSizing: 'border-box',
    ...(open && {
      ...openedMixin(theme),
      '& .MuiDrawer-paper': openedMixin(theme),
    }),
    ...(!open && {
      ...closedMixin(theme),
      '& .MuiDrawer-paper': closedMixin(theme),
    }),
  }),
);

export default function DefaultTemplate(props) {
  const theme = useTheme();
  const [open, setOpen] = React.useState(true);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <Box sx={{ display: 'flex'}}>
      <CssBaseline />
      <AppBar position="fixed" open={open} elevation={0}>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            sx={{
              marginRight: '15px',
              ...(open && { display: 'none' }),
            }}
          >
            <MenuIcon />
          </IconButton>

          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerClose}
            edge="start"
            sx={{
              marginRight: '15px',
              ...(!open && {display: 'none'}),
            }}
          >
            <MenuIcon />
          </IconButton>

          <Typography variant="h6" noWrap component="div">
            Abimayu Florist CMS
          </Typography>
          
          
        </Toolbar>
      </AppBar>


      
      <Drawer variant="permanent" primary open={open}>
        
        <DrawerHeader>
        </DrawerHeader>
      
        <List>

       
        <List>

          <ListItem disablePadding>
          <Link href="/">
            <ListItemButton>
              <ListItemIcon>
                <HomeIcon />
              </ListItemIcon>
              <ListItemText primary="Home" />
            </ListItemButton>
            </Link>
          </ListItem>

          <ListItem disablePadding>
          <Link href="/products">
            <ListItemButton>
              <ListItemIcon>
                <LocalOfferIcon />
              </ListItemIcon>
              <ListItemText primary="All Product" />
            </ListItemButton>
            </Link>
          </ListItem>

        </List>


        </List>
      
        <List>
          <ListItem disablePadding>
          <Link href="/products/category/1">
            <ListItemButton>
              <ListItemIcon>
                <LocalOfferIcon />
              </ListItemIcon>
              <ListItemText primary="Bunga Papan" />
            </ListItemButton>
            </Link>
          </ListItem>

          <ListItem disablePadding>
          <Link href="/products/category/2">
            <ListItemButton>
              <ListItemIcon>
                <LocalOfferIcon />
              </ListItemIcon>
              <ListItemText primary="Bunga Meja" />
            </ListItemButton>
            </Link>
          </ListItem>

          <ListItem disablePadding>
          <Link href="/products/category/3">
            <ListItemButton>
              <ListItemIcon>
                <LocalOfferIcon />
              </ListItemIcon>
              <ListItemText primary="Hand Buket" />
            </ListItemButton>
            </Link>
          </ListItem>

          <ListItem disablePadding>
          <Link href="/products/category/4">
            <ListItemButton>
              <ListItemIcon>
                <LocalOfferIcon />
              </ListItemIcon>
              <ListItemText primary="Standing Flower" />
            </ListItemButton>
            </Link>
          </ListItem>


        
        </List>

        <List>
          <ListItem disablePadding>
          {/* <Link href="/products/category/1"> */}
            {/* <ListItemButton>
              <ListItemIcon>
                <LocalOfferIcon />
              </ListItemIcon>
              <ListItemText primary="Bunga Papan" />
            </ListItemButton> */}
            <Logout/>
            {/* </Link> */}
          </ListItem>
          </List>
      </Drawer>         
      <Box component="main" sx={{ flexGrow: 1, p: 7 }}>
        <DrawerHeader />

        {props.children}

      </Box>
    </Box>
    
  );
}

