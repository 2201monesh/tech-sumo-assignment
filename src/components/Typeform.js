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
           <ArrowDropDownIcon fontSize='large' style={{marginRight: '3px', marginLeft: '-9px', color: '#707070'}}/>
           <PersonIcon fontSize='small' style={{marginRight: '3px', color: '#707070'}}/>
           <p style={{color: '#707070'}}>PRIVATE</p>
          </div>
          {/* <AddBoxIcon fontSize='large' style={{marginRight: '-4px'}} /> */}
          <div style={{width: '30px', height: '30px', backgroundColor: '#E0E0E0' , borderRadius: '4px', display: 'flex', alignItems: 'center', justifyContent: 'center'}} >+</div>
       </div>

       <div className="dynamic-functionality">
          <SidebarList text="My workspace" number={2} />
          <SidebarList text="Abc" number={0} />
          <SidebarList text="Test" number={0} />
       </div>

    </div>
  )
}
