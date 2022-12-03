import React from 'react'

export default function SidebarList(props) {
  return (
    <div>
      <div className="sidebar-list">
        <p>{props.text}</p>
        <span>{props.number}</span>
      </div>  
    </div>
  )
}
