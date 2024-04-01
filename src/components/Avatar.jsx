import React, { useState } from "react";
import { 
    Container, Box, Button, Select, Switch, FormControlLabel, MenuItem,
    InputLabel, FormControl, Slider  
} from "@mui/material";
import SendIcon from '@mui/icons-material/Send';
import DownloadingIcon from '@mui/icons-material/Downloading';
import axios from 'axios';


export default function Avatar() {

    const initialSeed = Math.floor(Math.random() * 1000) + 1;
    const initialSize = Math.floor(Math.random() * 401) + 100; 

    const [selectedStyle, setSelectedStyle] = useState('Adventurer');
    const [seed, setSeed] = useState(initialSeed);
    const [flip, setFlip] = useState(false);
    const [rotate, setRotate] = useState(0);
    const [scale, setScale] = useState(100);
    const [type, setType] = useState('svg');
    const [size, setSize] = useState(initialSize);


    const handleFlip = (event) => {
        setFlip(event.target.checked);
    };

    const handleRotate = (event) => {
        setRotate(event.target.value);
    };

    const handleScale = (event) => {
        setScale(event.target.value);
    };

    const handleType = (event) => {
        setType(event.target.value);
    };

    const handleSize = (event) => {
        setSize(event.target.value);
    };

    function handleSetStyleName(name) {
        setSelectedStyle(name);
    }

    function handleGenerate() {
        let x = Math.floor(Math.random() * 1000);
        setSeed(x);
        const uri = `https://api.dicebear.com/8.x/${selectedStyle.toLowerCase().replace(/ /g, '-')}/${type}?flip=${flip}&seed=${seed}&size=${size}&rotate=${rotate}&scale=${scale}`;
        console.log("Generated URI:", uri);
    }

    function handleDownload() {
        axios({ 
            method: "get", 
            url: `https://api.dicebear.com/8.x/${selectedStyle.toLowerCase().replace(/ /g, '-')}/${type}?flip=${flip}&seed=${seed}&size=${size}&rotate=${rotate}&scale=${scale}`,
            responseType: "arraybuffer"
        }).then((response) => { 
                var link = document.createElement("a"); 
                link.href = window.URL.createObjectURL( 
                    new Blob([response.data],  
                    { type: "application/octet-stream" }) 
                ); 
                link.download = `${seed}${size}.${type}`; 
                document.body.appendChild(link); 
                link.click(); 
                setTimeout(function () { 
                    window.URL.revokeObjectURL(link); 
                }, 200); 
        }).catch((error) => {
                    console.error('Error downloading image:', error);
        });
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
                <Box sx={{display:'flex',flexWrap:'wrap',justifyContent:'space-evenly', p:0 }}>
                    {/* <FormControl sx={{ minWidth:'190px' }}>
                        <InputLabel id="demo-simple-select-helper-label">Avatar</InputLabel>
                        <Select sx={{}} labelId="avatar-style" id="demo-simple-select-helper" value={selectedStyle} onChange={(event) => handleSetStyleName(event.target.value)} label="Avatar">
                            {styleNames.map((style, index) => (
                                <div sx={{display:'flex', }} key={index}>
                                    <img src={`https://api.dicebear.com/8.x/${style.toLowerCase().replace(/ /g, '-')}/svg?seed=${seed}`} alt={style} />
                                    <MenuItem key={index} value={style}>{style}</MenuItem>
                                </div>
                            ))}
                        </Select>
                    </FormControl> */}
                    <FormControl sx={{ minWidth: '250px' }}>
                        <InputLabel id="demo-simple-select-helper-label">Avatar</InputLabel>
                        <Select labelId="avatar-style" id="demo-simple-select-helper" value={selectedStyle} onChange={(event)=>handleSetStyleName(event.target.value)}label="Avatar"
                            renderValue={(selected) => (
                                <div className="custom" sx={{ display: 'flex', alignItems: 'center' }}>
                                    <span>{selected}</span>
                                    <img src={`https://api.dicebear.com/8.x/${selected.toLowerCase().replace(/ /g,'-')}/svg?seed=${seed}`}alt={selected}style={{width:'23px'}}/>
                                </div>
                            )}>
                            {styleNames.map((style, index) => (
                                <MenuItem className="custom" key={index} value={style} sx={{ display: 'flex', justifyContent: 'space-between' }}>
                                    <span>{style}</span>
                                    <img
                                        src={`https://api.dicebear.com/8.x/${style.toLowerCase().replace(/ /g, '-')}/svg?seed=${seed}`}
                                        alt={style}
                                        style={{ width: '23px' }}
                                    />
                                </MenuItem>
                            ))}
                        </Select>
                    </FormControl>
                    <FormControl sx={{ minWidth: 80 }}>
                        <InputLabel id="demo-simple-select-helper-label">Scale</InputLabel>
                        <Select labelId="avatar-scale" id="demo-simple-select-helper" onChange={handleScale} value={scale} label="Scale">
                            <MenuItem value={50}>50</MenuItem>
                            <MenuItem value={100}>100</MenuItem>
                            <MenuItem value={150}>150</MenuItem>
                            <MenuItem value={200}>200</MenuItem>
                        </Select>
                    </FormControl>
                    <FormControl sx={{ minWidth: 80 }}>
                        <InputLabel id="demo-simple-select-helper-label">Rotate</InputLabel>
                        <Select labelId="avatar-rotate" id="demo-simple-select-helper" onChange={handleRotate} value={rotate} label="Rotate">
                            <MenuItem value={0}>0</MenuItem>
                            <MenuItem value={90}>90</MenuItem>
                            <MenuItem value={180}>180</MenuItem>
                            <MenuItem value={270}>270</MenuItem>
                        </Select>
                    </FormControl>
                    <Box sx={{display:'flex',alignItems:'center',m:0,border:'1px solid #aeb8c3',borderRadius:'5px',px:2,color:'#41454a','&:hover':{border: '1px solid black'},}}>
                        <InputLabel id="demo-simple-select-helper-label">Size</InputLabel>
                        <Slider sx={{width:200,ml:1}} aria-label="Temperature" valueLabelDisplay="auto" step={50}value={size}marks color="warning" onChange={handleSize}min={100}max={500}/>
                    </Box>
                    <FormControlLabel sx={{m:0,border:'1px solid #aeb8c3',borderRadius:'5px',pl:'6px',color:'#41454a','&:hover':{border: '1px solid black'},}} 
                        id="formControl" control={<Switch checked={flip} onChange={handleFlip} color="warning" />
                    } labelPlacement="start" label="Flip Image" />
                    <FormControl sx={{ minWidth: 80 }}>
                        <InputLabel id="demo-simple-select-helper-label">Type</InputLabel>
                        <Select labelId="avatar-type" id="demo-simple-select-helper" onChange={handleType} value={type} label="Type">
                            <MenuItem value={'svg'}>SVG</MenuItem>
                            <MenuItem value={'png'}>PNG</MenuItem>
                            <MenuItem value={'jpg'}>JPG</MenuItem>
                        </Select>
                    </FormControl>
                </Box>

                <Box sx={{ display: 'flex', justifyContent: 'center', minHeight: '50vh',maxHeight: '50vh', m:2 }}>
                    <img src={`https://api.dicebear.com/8.x/${selectedStyle.toLowerCase().replace(/ /g, '-')}/svg?seed=${seed}&size=${size}&scale=${scale}&rotate=${rotate}&flip=${flip}&`} alt="avatar" />   
                </Box>

                <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', m:2 }}>
                    <Button sx={{mr:2}} variant="contained" onClick={handleGenerate} endIcon={<SendIcon/>}>Next</Button>
                    <Button sx={{ml:2}} variant="contained" onClick={handleDownload} endIcon={<DownloadingIcon/>}>Download</Button>
                </Box>
            </Container>
        </div>
    );
}
