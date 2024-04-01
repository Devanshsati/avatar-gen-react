import * as React from 'react';
import Box from '@mui/material/Box';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import MenuItem from '@mui/material/MenuItem';
import Drawer from '@mui/material/Drawer';
import MenuIcon from '@mui/icons-material/Menu';
import img from './nameright.svg'


const logoStyle = {width: '140px',height: 'auto',cursor: 'pointer'};

function Header() {
    const [open, setOpen] = React.useState(false);
    const toggleDrawer = (newOpen) => () => {
        setOpen(newOpen);
    };

    return (
        <div>
            <AppBar position="sticky" sx={{boxShadow:0,bgcolor:'transparent',mt:2}}>
                <Container maxWidth="lg">
                    <Toolbar variant="regular" sx={(theme)=>({display:'flex',alignItems:'center',justifyContent:'space-between',flexShrink:0,borderRadius:'999px',bgcolor:theme.palette.mode==='light' ? 'rgba(255, 255, 255, 0.4)':'rgba(0, 0, 0, 0.4)',backdropFilter:'blur(24px)',maxHeight:40,border:'1px solid',borderColor:'divider',boxShadow:theme.palette.mode==='light' ? `0 0 1px rgba(85,166,246,.1),1px 1.5px 2px -1px rgba(85,166,246,.15),4px 4px 12px -2.5px rgba(85,166,246,.15)`:'0 0 1px rgba(2, 31, 59, 0.7), 1px 1.5px 2px -1px rgba(2, 31, 59, 0.65), 4px 4px 12px -2.5px rgba(2, 31, 59, 0.65)',})}>
                        <Box sx={{flexGrow:1,display:'flex',alignItems:'center'}}>
                            <img src={img} style={logoStyle} alt="logo of sitemark"/>
                            <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
                                <MenuItem sx={{ py: '6px', px: '12px' }}>
                                    <Typography variant="body2" color="text.primary">Fast</Typography>
                                </MenuItem>
                                <MenuItem sx={{ py: '6px', px: '12px' }}>
                                    <Typography variant="body2" color="text.primary">Realiable</Typography>
                                </MenuItem>
                                <MenuItem sx={{py:'6px',px:'12px'}}>
                                    <Typography variant="body2" color="text.primary">Open-Source </Typography>
                                </MenuItem>
                                <MenuItem sx={{py:'6px',px:'12px'}}>
                                    <Typography variant="body2" color="text.primary">Free-Of-Cost</Typography>
                                </MenuItem>
                                <MenuItem sx={{py:'6px',px:'12px'}}>
                                    <Typography variant="body2" color="text.primary">Downloadable</Typography>
                                </MenuItem>
                            </Box>
                        </Box>
                        <Box sx={{display:{xs:'none',md:'flex'},gap:.5,alignItems:'center',}}>
                            <Button color="primary" variant="text" size="small" disableElevation>Sign in </Button>
                            <Button color="primary" variant="contained" size="small" disableElevation>Sign up </Button>
                        </Box>
                        <Box sx={{ display: { sm: '', md: 'none' } }}>
                            <Button variant="text" color="primary" aria-label="menu" onClick={toggleDrawer(true)}sx={{minWidth:'30px',p:'4px'}}><MenuIcon /></Button>
                            <Drawer anchor="right" open={open} onClose={toggleDrawer(false)}>
                                <Box sx={{minWidth:'60dvw',p:2,backgroundColor:'background.paper',flexGrow:1,}}>
                                    <MenuItem>Fast</MenuItem>
                                    <MenuItem>Reliable</MenuItem>
                                    <MenuItem>Open-Source</MenuItem>
                                    <MenuItem>Free Of Cost</MenuItem>
                                    <MenuItem>Downloadable</MenuItem>
                                    <MenuItem>
                                        <Button color="primary" variant="contained" sx={{width:'100%'}} disableElevation>Sign up </Button>
                                    </MenuItem>
                                    <MenuItem>
                                        <Button color="primary" variant="outlined" sx={{width:'100%'}} disableElevation>Sign in </Button>
                                    </MenuItem>
                                </Box>
                            </Drawer>
                        </Box>
                    </Toolbar>
                </Container>
            </AppBar>
        </div>
    );
}

export default Header;