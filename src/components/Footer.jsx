import * as React from 'react';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import IconButton from '@mui/material/IconButton';
import Link from '@mui/material/Link';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import FacebookIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TwitterIcon from '@mui/icons-material/X';

const logoStyle = {
    width: '140px',
    height: 'auto',
};

    function Copyright() {
        return (
            <Typography variant="body2" color="text.secondary" mt={1}>
                {'Copyright © '}
                <Link href="https://mui.com/">Sitemark&nbsp;</Link>
                {new Date().getFullYear()}
            </Typography>
        );
    }

    export default function Footer() {
        return (
            <div>
                <Container sx={{position: 'fixed', bottom: 0, left: 0, right: 0, flexDirection: 'column', alignItems: 'center', textAlign: { sm: 'center', md: 'center' } }}>
                    <Box sx={{ display: 'flex', justifyContent: 'space-between', width: '100%', borderTop: '1px solid', borderColor: 'divider', }}>
                        <img src={ 'https://assets-global.website-files.com/61ed56ae9da9fd7e0ef0a967/61f12e6faf73568658154dae_SitemarkDefault.svg' } style={logoStyle} alt="logo of sitemark"/>
                        <div>
                            <Link color="text.secondary" href="#">Privacy Policy</Link>
                            <Typography display="inline" sx={{ mx: 0.5, opacity: 0.5 }}>&nbsp;•&nbsp;</Typography>
                            <Link color="text.secondary" href="#">Terms of Service</Link>
                            <Copyright />
                        </div>
                        <Stack direction="row" justifyContent="left" spacing={1} useFlexGap sx={{ color: 'text.secondary', }}>
                            <IconButton color="inherit" href="https://github.com/mui" aria-label="GitHub" sx={{ alignSelf: 'center' }}><FacebookIcon /></IconButton>
                            <IconButton color="inherit" href="https://twitter.com/MaterialUI" aria-label="X" sx={{ alignSelf: 'center' }}><TwitterIcon /></IconButton>
                            <IconButton color="inherit" href="https://github.com/mui" aria-label="GitHub" sx={{ alignSelf: 'center' }}><LinkedInIcon /></IconButton>
                        </Stack>
                    </Box>
                </Container>
            </div>
        );
}