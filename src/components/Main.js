import React from 'react'
import '../index.css'
import Body from './Body'
import Sidebar from './Sidebar'

export default function Main() {
  return (
    <div className='main-section'>
        <div className='w-30'><Sidebar /></div>
        <div className='w-70' style={{backgroundColor: '#F5F5F5'}}><Body /></div>
    </div>
  )
}
