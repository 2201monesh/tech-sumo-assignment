import React from 'react'
import Button from '@mui/material/Button';
import Boximage from './Boximage';

export default function Header() {
  return (
    <nav>
    <div className="main-header">
     <div className="nav-start">
       {/* <img src="" alt="img" /> */}
       <Boximage />
       <p className='bold-text'>bhavyakhurana002</p>
     </div>

     <div className="nav-end">
      <div className="view-plan-button">
       <Button variant='contained' size='small' style ={{backgroundColor: '#40826D', textTransform: 'none', boxShadow: 'none'}}>View plans</Button>
      </div> 
       {/* <img src="" alt="img" /> */}
       <Boximage />
     </div>
     </div>
    </nav>
  )
}
