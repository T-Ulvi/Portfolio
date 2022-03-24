import React from 'react'
import Container from '@mui/material/Container';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import SegmentIcon from '@mui/icons-material/Segment';
import { Link} from 'react-scroll'
import Avatar from '@mui/material/Avatar';
import Drawer from '@mui/material/Drawer';
import MuiAppBar from '@mui/material/AppBar';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import HomeIcon from '@mui/icons-material/Home';
import SettingsAccessibilityIcon from '@mui/icons-material/SettingsAccessibility';
import AssignmentTurnedInIcon from '@mui/icons-material/AssignmentTurnedIn';
import MailIcon from '@mui/icons-material/Mail';
import LayersIcon from '@mui/icons-material/Layers';
import PhoneCallbackIcon from '@mui/icons-material/PhoneCallback';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import AddReactionIcon from '@mui/icons-material/AddReaction';
import { styled, useTheme } from '@mui/material/styles';
import { useState } from 'react';
import Mypic from '../assets/images/avatar.jpg'
function Header() {
  
const drawerWidth = 240;

const Main = styled('main', { shouldForwardProp: (prop) => prop !== 'open' })(
  ({ theme, open }) => ({
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginRight: -drawerWidth,
    ...(open && {
      transition: theme.transitions.create('margin', {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen,
      }),
      marginRight: 0,
    }),
  }),
);

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
  transition: theme.transitions.create(['margin', 'width'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginRight: drawerWidth,
  }),
}));

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
  justifyContent: 'flex-start',
}));


  const theme = useTheme();
  const [open, setOpen] =useState(false);

  const handleDrawerOpen = (e) => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };




  return (
    <div>
    <AppBar position="fixed" sx={{backgroundColor:"transparent",backgroundColor:" rgba(255, 255, 255, 0.082)", backdropFilter: "blur(2.3px )"}} elevation={0} >
    <Container >
        <Toolbar   sx={{ paddingInline: 0 }}>
          <Typography  variant="h4" className='logo'display={"flex"} href="#home" component="a" sx={{ color: "white",display:"flex",marginRight:"auto"}}>
          <Avatar alt="Remy Sharp" sx={{transform:"translate(-10px,-3px)"}} src={Mypic} />
          Ülvi . T
          </Typography>
          <ul className='Navs d-flex'>
            <li className='nav-link'>
            <Link activeClass="active" to="home" spy={true}   duration={500} >
             <span className='numbers'>01. </span>Home
            </Link>
            </li> 
            <li className='nav-link'>
            <Link activeClass="active" to="about" spy={true} duration={500} >
            <span className='numbers'>02. </span>About
            </Link>
            </li>
            <li className='nav-link'>
            <Link activeClass="active" to="skills" spy={true} offset={-40}  duration={500} >
            <span className='numbers'>03. </span>Skills & Projects
            </Link>
            </li>
            <li className='nav-link'>
            <Link activeClass="active" to="contact" spy={true}  duration={500} >
            <span className='numbers'>04. </span>Contact
            </Link>
            </li>
          </ul>
          <IconButton
            onClick={(e)=>handleDrawerOpen(e)}
            sx={{ ...(open && { display: 'none' }) }}
          className='menu'
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
          >
            <SegmentIcon />
          </IconButton>
        </Toolbar>
    </Container>

      </AppBar>
      
       <Drawer
        sx={{
        
          width: drawerWidth,
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: drawerWidth,
            backgroundColor:"#112240 !important",
            color:"white"
          },
        }}
        variant="persistent"
        anchor="right"
        open={open}
      >
        <DrawerHeader >
          <IconButton sx={{color:"white"}} onClick={handleDrawerClose}>
            {theme.direction === 'rtl' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
          </IconButton>
        </DrawerHeader>
        <Divider />
        <List>
          {[{
            Name:'Home',
            url:"home",
            icon:<HomeIcon />
          },
          { Name:'About',
            url:'about',
            icon: <SettingsAccessibilityIcon />
           },
          { Name:'Skills',
            url:'skills',
            icon: <AssignmentTurnedInIcon/>
           },
          { Name:'Projects',
            url:'projects',
            icon: <LayersIcon/>
           },
          { Name:'Contact',
            url:'contact',
            icon: <AddReactionIcon/>
           }
            ].map((text, index) => (
            
            <ListItem button key={index}>
              <Link activeClass="active" onClick={()=>handleDrawerClose()}   offset={text.url=="skills"? -30:0} to={text.url} spy={true} style={{display:"flex"}} duration={500} >
              <ListItemIcon sx={{color:"white"}}>
                {text.icon}
              </ListItemIcon>
              <ListItemText primary={text.Name} />
              {/* offset={text.url=="contact"? -20:50}  */}
              </Link>
            </ListItem>
          ))}
        </List>
        <Divider />
        <List>
          {['+994514084879', 't99ulvi@gmail.com'].map((text, index) => (
            <a key={index} href={index==0?"tel:+994514084879":"mailto:t99ulvi@gmail.com"}>
               <ListItem button key={text}>
              <ListItemIcon sx={{color:"white"}}>
                {index % 2 === 0 ? <PhoneCallbackIcon /> : <MailIcon />}
              </ListItemIcon>
              <ListItemText color='text' sx={{color:"white"}} primary={text} />
            </ListItem>
          </a>
          ))}
        </List>
      </Drawer> 
    </div>
  )
}

export default Header