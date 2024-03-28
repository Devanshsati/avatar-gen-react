import React, { useState } from "react";
import { Container, Box, Button, ButtonGroup, Switch, FormControlLabel } from "@mui/material";

export default function Avatar() {
    const [styleName, setStyleName] = useState('avataaars');
    const [seed, setSeed] = useState(1000);
    const [flip, setFlip] = useState(false);

    const handleChange = (event) => {
        setFlip(event.target.checked);
    };

    function handleSetStyleName(name) {
        setStyleName(name);
    }

    function handleGenerate() {
        let x = Math.floor(Math.random() * 1000);
        setSeed(x);
        const uri = `https://api.dicebear.com/8.x/${styleName}/svg?flip=${flip}&seed=${x}`;
        console.log("Generated URI:", uri);
    }

    return (
        <div>
            <Container sx={{ mt: 5 }}>
                <Box sx={{ display: 'flex', flexDirection: 'column', flexWrap: 'wrap', alignItems: 'center', m: 2 }}>
                    <ButtonGroup color="primary" size="large" aria-label="Large button group">
                        <Button onClick={() => handleSetStyleName('adventurer')}>Adventurer</Button>
                        <Button onClick={() => handleSetStyleName('avataaars')}>Avataaars</Button>
                        <Button onClick={() => handleSetStyleName('bottts')}>Bottts</Button>
                    </ButtonGroup>
                </Box>
                <Box sx={{ color: 'darkorange', textAlign: 'center' }}>
                    <FormControlLabel control={<Switch checked={flip} onChange={handleChange} color="warning" />} labelPlacement="start" label="Flip Image" />
                </Box>

                <Box className="avatar">
                    <img src={`https://api.dicebear.com/8.x/${styleName}/svg?flip=${flip}&seed=${seed}`} alt="avatar" />
                    
                </Box>

                <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', m: 2 }}>
                    <Button variant="contained" onClick={handleGenerate}>Next</Button>
                </Box>
            </Container>
        </div>
    );
}
