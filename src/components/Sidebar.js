import React from 'react'
import IconButton from "@mui/material/IconButton";
import SearchIcon from "@mui/icons-material/Search";
import TextField from "@mui/material/TextField";
import InputAdornment from "@material-ui/core/InputAdornment";
import Typeform from './Typeform';
import LinearProgress from '@mui/material/LinearProgress';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import DashboardCustomizeIcon from '@mui/icons-material/DashboardCustomize';


export default function Sidebar() {
  return (
    <div className='main-sidebar'>
    <div className='upper-sidebar'>
       <TextField
         id="search-bar"
         className="text"
         label="Find workspace"
         variant="outlined"
         placeholder="Find workspace"
         size="small"
         style={{marginBottom: '20px'}}
         InputProps={{
          endAdornment: (
           <InputAdornment>
            <IconButton>
             <SearchIcon />
            </IconButton>
           </InputAdornment>
         )
        }}
        />
        <Typeform />
    </div>

    <div className='lower-sidebar'>
     <div className="lower-sidebar-up">
      <p><span className='bold-text'>Bhavya Khurana's</span> account</p>
      <p className='font-small'>Responses collected</p>
      {/* <LinearProgress /> */}
      <div className="linear-progress"></div>
      <p><span className='bold-text'>0 </span>/ 10</p>
      <p className='font-small' style={{color: 'gray', fontSize: '12px'}}>Resets on Dec 30</p>
      <p className="green-text">Increase response limit</p>
     </div>
     <div className="lower-sidebar-down">
      <DashboardCustomizeIcon fontSize='small' style={{marginRight: '10px', color: 'gray'}}/>
      <p className='bold-text' style={{marginRight: '50px'}}>Apps & Integrations</p>
      <ArrowForwardIosIcon fontSize='small' style={{color: 'gray'}} />
     </div>
    </div>
    </div>
  )
}
