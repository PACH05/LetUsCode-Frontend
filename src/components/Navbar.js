import React from 'react'
import logo from '../logo.png'

function Navbar() {
  return (
    <div className='flex justify-start h-17 bg-sky-200'>
    <div className='flex align-middle m-4 p-2 w-24'>
        <img src={logo} alt='Logo' className='flex align-middle w-48 h-18' />
    </div>
    <div className='flex align-middle mx-1 my-4 p-2'>
        <h1 className='flex align-middle p-2 text-2xl'>Let Us Code</h1>
    </div>
    
    </div>
  )
}

export default Navbar