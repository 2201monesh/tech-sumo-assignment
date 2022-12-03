import React from 'react'
import PersonIcon from '@mui/icons-material/Person';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import AddBoxIcon from '@mui/icons-material/AddBox';
import SidebarList from './SidebarList';

export default function Typeform() {
  return (
    <div className='main-typeform'>
       <div className="private">
          <div className="private-left">
           <ArrowDropDownIcon fontSize='large' style={{marginRight: '3px', marginLeft: '-9px'}}/>
           <PersonIcon fontSize='small' style={{marginRight: '3px'}}/>
           <p>PRIVATE</p>
          </div>
          <AddBoxIcon fontSize='large' style={{marginRight: '-4px'}} />
       </div>

       <div className="dynamic-functionality">
          <SidebarList text="My workspace" number={2} />
          <SidebarList text="Abc" number={0} />
          <SidebarList text="Test" number={0} />
       </div>

    </div>
  )
}
