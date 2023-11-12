import React, { useEffect, useState } from 'react';
import { Container, Typography, Input, Button, Box, makeStyles, TextField, Paper, FormControl, InputLabel, Select, MenuItem } from '@mui/material';
import axios from 'axios';


export default function App() {
  const [seatingArrangement,setSeatingArrangement]=useState([]);
  const commonStyles = {
    bgcolor: 'background.paper',
    m: 1,
    borderColor: 'lightgreen',
    width: '1rem',
    height: '1rem',
  };
  const [age,setAge]=useState(1);
  const handleChange = (event) => {
    setAge(event.target.value);
  };

  const makeSeatingArrangement=()=>{
    const seating=[];
    for(let i=0;i<15;i++){
      const seats=[];
      let cnt=1;
      for(let j=0;j<23;j++){
        if(i!=0&&(j==0||j==11||j==12||j==13)){
          seats.push(0);
        }
        else{
          seats.push(cnt);
          cnt++;
        }
        
      }
      seating.push(seats);
    }
    setSeatingArrangement(seating);
    
  }
  useEffect(()=>{
    makeSeatingArrangement();
  
  },[])
  
  return (
    <>
    <Box sx={{display:"flex",flexDirection:"column",justifyContent:"center",alignContent:"center",justifyItems:"center",alignItems:"center"}}>
    <Typography>Logic for book my show</Typography>
    <Box sx={{mt:2}}>
    <FormControl fullWidth>
  <InputLabel id="demo-simple-select-label">Age</InputLabel>
  <Select
    labelId="demo-simple-select-label"
    id="demo-simple-select"
    value={age}
    label="Age"
    onChange={handleChange}
  >
    <MenuItem value={1}>1</MenuItem>
    <MenuItem value={2}>2</MenuItem>
    <MenuItem value={3}>3</MenuItem>
    <MenuItem value={4}>4</MenuItem>
    <MenuItem value={5}>5</MenuItem>
    <MenuItem value={6}>6</MenuItem>
    <MenuItem value={7}>7</MenuItem>
    <MenuItem value={8}>8</MenuItem>
  </Select>
</FormControl>
    {seatingArrangement.map((row, rowIndex) => (
        <div key={rowIndex} style={{display:'flex'}}>
          {row.map((cell, cellIndex) => (
            <React.Fragment key={cellIndex}>
              {cell !== 0 ? (
                <Box sx={{ ...commonStyles, border: 1,color:"lightgreen",display:"flex",alignItems:"center",justifyItems:"center",alignContent:"center"}} >
                  <Typography sx={{fontSize:"0.7rem"}}>{cell}</Typography>
                  </Box>
              ) : (
<Box sx={{ ...commonStyles, border: 1 ,color:'white'}} />
              )}
            </React.Fragment>
          ))}
        </div>
      ))}
    </Box>
    </Box>
    </>
  );
}
