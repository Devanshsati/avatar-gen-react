import React, { useState } from "react";
import 'react-color-palette/lib/css/styles.css';
import { Container, Box, Button, Select, Switch, FormControlLabel, MenuItem } from "@mui/material";
import { ColorPicker } from "react-color-palette";


export default function Avatar() {
    const [selectedStyle, setSelectedStyle] = useState('Adventurer');
    const [seed, setSeed] = useState(1000);
    const [flip, setFlip] = useState(false);
    const [rotate, setRotate] = useState(0);
    const [scale, setScale] = useState(100);
    const [color, setColor] = useState('#000000');

    const handleFlip = (event) => {
        setFlip(event.target.checked);
    };

    const handleRotate = (event) => {
        setRotate(event.target.value);
    };

    const handleScale = (event) => {
        setScale(event.target.value);
    };

    const handleColorChange = (color) => {
        setColor(color.hex);
    };

    function handleSetStyleName(name) {
        setSelectedStyle(name);
    }

    function handleGenerate() {
        let x = Math.floor(Math.random() * 1000);
        setSeed(x);
        const uri = `https://api.dicebear.com/8.x/${selectedStyle.toLowerCase().replace(/ /g, '-')}/svg?seed=${seed}&scale=${scale}&rotate=${rotate}&flip=${flip}&color=${encodeURIComponent(color)}`;
        console.log("Generated URI:", uri);
    }

    const styleNames = [
        'Adventurer', 'Adventurer Neutral', 'Avataaars', 'Avataaars Neutral', 'Big Ears', 'Big Ears Neutral', 'Big Smile',
        'Bottts', 'Bottts Neutral', 'Croodles', 'Croodles Neutral','Fun Emoji', 'Icons', 'Identicon', 'Initials',
        'Lorelei', 'Lorelei Neutral', 'Micah', 'Miniavs', 'Notionists', 'Notionists Neutral', 'Open Peeps',
        'Personas', 'Pixel Art', 'Pixel Art Neutral', 'Rings', 'Shapes', 'Thumbs'
    ];

    return (
        <div>
            <Container sx={{ mt: 5 }}>
                <Box sx={{display: 'flex',flexDirection: 'row',flexWrap: 'wrap',alignItems: 'center', m: 2 }}>
                    <Select labelId="avatar-style-select-label" value={selectedStyle} id="avatar-style-select" onChange={(event) => handleSetStyleName(event.target.value)}>
                        {styleNames.map((style, index) => (
                            <MenuItem key={index} value={style}>
                                {style}
                            </MenuItem>
                        ))}
                    </Select>
                    <FormControlLabel id="formControl" control={<Switch checked={flip} onChange={handleFlip} color="warning" />} labelPlacement="start" label="Flip Image" />
                    <Select labelId="avatar-rotate" value={rotate} id="avatar-rotate" onChange={handleRotate}>
                        <MenuItem value={0}>0</MenuItem>
                        <MenuItem value={90}>90</MenuItem>
                        <MenuItem value={180}>180</MenuItem>
                        <MenuItem value={270}>270</MenuItem>
                    </Select>
                    <FormControlLabel control={<Switch checked={flip} onChange={handleFlip} color="warning" />} labelPlacement="start" label="Flip Image" />
                    <Select labelId="avatar-scale" value={scale} id="avatar-scale" onChange={handleScale}>
                        <MenuItem value={50}>50</MenuItem>
                        <MenuItem value={100}>100</MenuItem>
                        <MenuItem value={150}>150</MenuItem>
                        <MenuItem value={200}>200</MenuItem>
                    </Select>
                    <ColorPicker label="Pick a color" value={color} onChange={handleColorChange} />
                </Box>

                <Box className="avatar" sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <img src={`https://api.dicebear.com/8.x/${selectedStyle.toLowerCase().replace(/ /g, '-')}/svg?seed=${seed}&scale=${scale}&rotate=${rotate}&flip=${flip}&color=${encodeURIComponent(color)}`} alt="avatar" />   
                </Box>

                <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', m: 2 }}>
                    <Button variant="contained" onClick={handleGenerate}>Next</Button>
                </Box>
            </Container>
        </div>
    );
}





































// import React, { useState } from "react";
// import { 
//     Container, Box, Button, Select, Switch, FormControlLabel, MenuItem,
//     FormHelperText, InputLabel, FormControl, ColorPicker 
// } from "@mui/material";

// export default function Avatar() {
//     const [selectedStyle, setSelectedStyle] = useState('Adventurer');
//     const [seed, setSeed] = useState(1000);
//     const [flip, setFlip] = useState(false);
//     const [rotate, setRotate] = useState(0);
//     const [scale, setScale] = useState(100);
//     const [color, setColor] = useState('#000000');

//     const handleFlip = (event) => {
//         setFlip(event.target.checked);
//     };

//     const handleRotate = (event) => {
//         setRotate(event.target.value);
//     };

//     const handleScale = (event) => {
//         setScale(event.target.value);
//     };

//     function handleSetStyleName(name) {
//         setSelectedStyle(name);
//     }

//     const handleColorChange = (color) => {
//         setColor(color.hex);
//     };

//     function handleGenerate() {
//         let x = Math.floor(Math.random() * 1000);
//         setSeed(x);
//         const uri = `https://api.dicebear.com/8.x/${selectedStyle.toLowerCase().replace(/ /g, '-')}/svg?flip=${flip}&seed=${x}&rotate=${rotate}&scale=${scale}`;
//         console.log("Generated URI:", uri);
//     }

//     const styleNames = [
//         'Adventurer', 'Adventurer Neutral', 'Avataaars', 'Avataaars Neutral', 'Big Ears', 'Big Ears Neutral', 'Big Smile',
//         'Bottts', 'Bottts Neutral', 'Croodles', 'Croodles Neutral','Fun Emoji', 'Icons', 'Identicon', 'Initials',
//         'Lorelei', 'Lorelei Neutral', 'Micah', 'Miniavs', 'Notionists', 'Notionists Neutral', 'Open Peeps',
//         'Personas', 'Pixel Art', 'Pixel Art Neutral', 'Rings', 'Shapes', 'Thumbs'
//     ];

//     return (
//         <div>
//             <Container sx={{ mt: 5 }}>
//                 <Box sx={{display:'flex',flexWrap:'wrap',justifyContent:'space-evenly',m:2, }}>
//                     <FormControl sx={{ minWidth:'190px' }}>
//                         <InputLabel id="demo-simple-select-helper-label">Avatar</InputLabel>
//                         <Select labelId="avatar-style" id="demo-simple-select-helper" value={selectedStyle} onChange={(event) => handleSetStyleName(event.target.value)} label="Avatar">
//                             {styleNames.map((style, index) => (
//                                 <MenuItem key={index} value={style}>{style}</MenuItem>
//                             ))}
//                         </Select>
//                     </FormControl>
//                     <FormControlLabel sx={{m:0}} id="formControl" control={<Switch checked={flip} onChange={handleFlip} color="warning" />} labelPlacement="start" label="Flip Image" />
//                     <FormControl sx={{ minWidth: 80 }}>
//                         <InputLabel id="demo-simple-select-helper-label">Scale</InputLabel>
//                         <Select labelId="avatar-scale" id="demo-simple-select-helper" onChange={handleScale} value={scale} label="Scale">
//                             <MenuItem value={50}>50</MenuItem>
//                             <MenuItem value={100}>100</MenuItem>
//                             <MenuItem value={150}>150</MenuItem>
//                             <MenuItem value={200}>200</MenuItem>
//                         </Select>
//                     </FormControl>
//                     <FormControl sx={{ minWidth: 80 }}>
//                         <InputLabel id="demo-simple-select-helper-label">Rotate</InputLabel>
//                         <Select labelId="avatar-rotate" id="demo-simple-select-helper" onChange={handleRotate} value={rotate} label="Rotate">
//                             <MenuItem value={0}>0</MenuItem>
//                             <MenuItem value={90}>90</MenuItem>
//                             <MenuItem value={180}>180</MenuItem>
//                             <MenuItem value={270}>270</MenuItem>
//                         </Select>
//                     </FormControl>
//                     <ColorPicker label="Pick a color" value={color} onChange={handleColorChange} />
//                 </Box>

//                 <Box sx={{ display: 'flex', justifyContent: 'center', maxHeight: '40vh', m:3 }}>
//                     <img src={`https://api.dicebear.com/8.x/${selectedStyle.toLowerCase().replace(/ /g, '-')}/svg?seed=${seed}&scale=${scale}&rotate=${rotate}&flip=${flip}&`} alt="avatar" />   
//                 </Box>


//                 <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', m: 2 }}>
//                     <Button variant="contained" onClick={handleGenerate}>Next</Button>
//                 </Box>
//             </Container>
//         </div>
//     );
// }
