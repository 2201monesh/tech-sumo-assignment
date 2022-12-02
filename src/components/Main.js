import React from 'react'
import '../index.css'
import Sidebar from './Sidebar'

export default function Main() {
  return (
    <div className='main-section'>
        <div className='w-30'><Sidebar /></div>
        <div className='w-70'>Main Section</div>
    </div>
  )
}
