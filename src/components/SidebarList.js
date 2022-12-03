import React from 'react'

export default function SidebarList(props) {
  return (
    <div>
      <div className="sidebar-list">
        <p>{props.text}</p>
        <span style={{color: 'gray'}}>{props.number}</span>
      </div>  
    </div>
  )
}
