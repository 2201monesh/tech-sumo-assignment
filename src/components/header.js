import React from 'react'
import Button from '@mui/material/Button';

export default function Header() {
  return (
    <nav>
    <div className="main-header">
     <div className="nav-start">
       <img src="" alt="img" />
       <p>Monesh Goyal</p>
     </div>

     <div className="nav-end">
       <Button variant='contained' size='small' style ={{backgroundColor: 'green', textTransform: 'none'}}>View plans</Button>
       <img src="" alt="img" />
     </div>
     </div>
    </nav>
  )
}
