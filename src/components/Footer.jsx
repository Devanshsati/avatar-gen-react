import * as React from 'react';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import IconButton from '@mui/material/IconButton';
import Link from '@mui/material/Link';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import FacebookIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import img from './nameright.svg'

const logoStyle = {
    width: '140px',
    height: 'auto',
    padding: '1%'
};

    function Copyright() {
        return (
            <Typography variant="body2" color="text.secondary" mt={1}>
                {'Copyright © '}
                <Link href="https://mui.com/">Devansh Sati&nbsp;</Link>
                {new Date().getFullYear()}
            </Typography>
        );
    }

    export default function Footer() {
        return (
            <div>
                <Container sx={{position: 'sticky',  flexDirection: 'column', alignItems: 'center', textAlign: { sm: 'center', md: 'center' } }}>
                    <Box sx={{ display: 'flex', justifyContent: 'space-between', width: '100%', borderTop: '1px solid', borderColor: 'divider', }}>
                        <img src={img} style={logoStyle} alt="logo of sitemark"/>
                        <div>
                            <Link color="text.secondary" href="#">Privacy Policy</Link>
                            <Typography display="inline" sx={{ mx: 0.5, opacity: 0.5 }}>&nbsp;•&nbsp;</Typography>
                            <Link color="text.secondary" href="#">Terms of Service</Link>
                            <Copyright />
                        </div>
                        <Stack direction="row" justifyContent="left" spacing={1} useFlexGap sx={{ color: 'text.secondary', }}>
                            <IconButton color="inherit" href="https://github.com/Devanshsati" target='blank' aria-label="GitHub" sx={{ alignSelf: 'center' }}><FacebookIcon /></IconButton>
                            <IconButton color="inherit" href="https://devanshsati.github.io/Portfolio/" target='blank' aria-label="X" sx={{ alignSelf: 'center' }}><AccountBoxIcon /></IconButton>
                            <IconButton color="inherit" href="https://www.linkedin.com/in/devanshsati" target='blank' aria-label="GitHub" sx={{ alignSelf: 'center' }}><LinkedInIcon /></IconButton>
                        </Stack>
                    </Box>
                </Container>
            </div>
        );
}