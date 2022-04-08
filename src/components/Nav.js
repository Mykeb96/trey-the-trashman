import React from 'react'
import '../css/Nav.css'
import { GoTrashcan } from 'react-icons/go'
import NavMenu from './NavMenu'

const Nav = (props) => {

  const handleNav = () => {
    props.setIsNavOpen(!props.isNavOpen)
  }


  return (
    <div className='nav-container'>
        <GoTrashcan onClick={handleNav} id='trash-can'/>
        
    </div>
  )
}

export default Nav