import { useState } from 'react';
import {
  List,
  ListItem,
  ListItemText,
  ListItemIcon,
  ListItemButton  
} from '@mui/material';
import MuiDrawer from '@mui/material/Drawer';
import { styled } from '@mui/material/styles';
import { NavLink, useMatch } from 'react-router-dom';
import KeyboardDoubleArrowRightIcon from '@mui/icons-material/KeyboardDoubleArrowRight';
import KeyboardDoubleArrowLeftIcon from '@mui/icons-material/KeyboardDoubleArrowLeft';
import DashboardRoundedIcon from '@mui/icons-material/DashboardRounded';

const drawerWidth = 240;

const openedMixin = (theme) => ({
  width: drawerWidth,
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
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up('sm')]: {
    width: `calc(${theme.spacing(8)} + 1px)`,
  },
});

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-end',
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));

const Drawer = styled(MuiDrawer, {
  shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
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
}));

// eslint-disable-next-line react/prop-types
function SideNav() {
  const [open, setOpen] = useState(false);

  const match = useMatch('/:activeRoute/*');
  const activeRoute = match?.params?.activeRoute;

  const toggleDrawer = () => {
    setOpen(!open);
  };

  return (
    <Drawer open={open} variant="permanent">
      <DrawerHeader />
      <List>
        <ListItem key="menuToggle" disablePadding sx={{ display: 'block' }}>
          <ListItemButton
            sx={{
              minHeight: 48,
              justifyContent: open ? 'end' : 'start',
              px: 2.5,
            }}
            onClick={toggleDrawer}
          >
            <ListItemIcon
              sx={{
                minWidth: 0,
                justifyContent: 'center',
              }}
            >
              {open ? (
                <KeyboardDoubleArrowLeftIcon />
              ) : (
                <KeyboardDoubleArrowRightIcon />
              )}
            </ListItemIcon>
          </ListItemButton>
        </ListItem>
        <NavLink
          to="/"
          style={{
            color: 'inherit',
            textDecoration: 'inherit',
          }}
        >
          <ListItem key="home" disablePadding sx={{ display: 'block' }}>
            <ListItemButton
              selected={activeRoute === undefined}
              sx={{
                minHeight: 48,
                justifyContent: open ? 'initial' : 'center',
                px: 2.5,
              }}
            >
              <ListItemIcon
                sx={{
                  minWidth: 0,
                  mr: open ? 3 : 'auto',
                  justifyContent: 'center',
                }}
              >
                <DashboardRoundedIcon />
              </ListItemIcon>
              <ListItemText primary="Home" sx={{ opacity: open ? 1 : 0 }} />
            </ListItemButton>
          </ListItem>
        </NavLink>
      </List>
    </Drawer>
  );
}

export default SideNav;
