import React from 'react'
import '../../css/Nav.css'
import { GoTrashcan } from 'react-icons/go'
import NavMenu from './NavMenu'

const Nav = (props) => {


  // Navigation handling through props

  const handleNav = () => {
    props.setIsNavOpen(!props.isNavOpen)
  }


  return (

    // Navigation icon
    
    <div className='nav-container'>
        <a href='/nav'><GoTrashcan onClick={handleNav} id='trash-can'/></a>
        
    </div>
  )
}

export default Nav