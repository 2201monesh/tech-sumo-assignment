import React from 'react'
import PersonIcon from '@mui/icons-material/Person';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import AddBoxIcon from '@mui/icons-material/AddBox';

export default function Typeform() {
  return (
    <div className='main-typeform'>
       <div className="private">
          <div className="private-left">
           <ArrowDropDownIcon fontSize='large' style={{marginRight: '3px'}}/>
           <PersonIcon fontSize='small' style={{marginRight: '3px'}}/>
           <p>PRIVATE</p>
          </div>
          <AddBoxIcon fontSize='large' />
       </div>

       <div className="dynamic-functionality">
        
       </div>

    </div>
  )
}
