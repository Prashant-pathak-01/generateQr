import React from 'react'
import  './header.css'
import { Link } from 'react-router-dom'
function Header() {
  return (
    <div>
        <Link to='/'><div className='logo'></div></Link>
        <div className='mode'></div>
    </div>
  )
}

export default Header