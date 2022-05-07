import React from 'react'
import { AiOutlineCloseCircle } from 'react-icons/ai'
import { animated, useTransition } from 'react-spring'

const NavMenu = (props) => {

  // Layered transition animations for the nav menu

    const transition = useTransition(props.isNavOpen, {
      from: { y: 3000, opacity: 0},
      enter: {y: 0, opacity: 1}
    })

    const transition2 = useTransition(props.isNavOpen, {
      from: { y: 3000, opacity: 0},
      enter: {y: 0, opacity: 1},
      leave: {y: 3000, opacity: 0},
      delay: 50,
    })

    const transition3 = useTransition(props.isNavOpen, {
      from: { y: 3000, opacity: 0},
      enter: {y: 0, opacity: 1},
      leave: {y: 3000, opacity: 0},
      delay: 100,
    })

    const transition4 = useTransition(props.isNavOpen, {
      from: { y: 3000, opacity: 0},
      enter: {y: 0, opacity: 1},
      leave: {y: 3000, opacity: 0},
      delay: 150,
    })

    const transition5 = useTransition(props.isNavOpen, {
      from: { y: 3000, opacity: 0},
      enter: {y: 0, opacity: 1},
      leave: {y: 3000, opacity: 0},
      delay: 200,
    })

    const transition6 = useTransition(props.isNavOpen, {
      from: { y: 3000, opacity: 0},
      enter: {y: 0, opacity: 1},
      leave: {y: 3000, opacity: 0},
      delay: 250,
    })

    const transition7 = useTransition(props.isNavOpen, {
      from: { y: 3000, opacity: 0},
      enter: {y: 0, opacity: 1},
      leave: {y: 3000, opacity: 0},
      delay: 300,
    })

    const transition8 = useTransition(props.isNavOpen, {
      from: { y: 3000, opacity: 0},
      enter: {y: 0, opacity: 1},
      leave: {y: 3000, opacity: 0},
      delay: 350,
    })

    const transition9 = useTransition(props.isNavOpen, {
      from: { y: 3000, opacity: 0},
      enter: {y: 0, opacity: 1},
      leave: {y: 3000, opacity: 0},
      delay: 900,
    })

    const transition10 = useTransition(props.isNavOpen, {
      from: { y: 3000, opacity: 0},
      enter: {y: 0, opacity: 1},
      leave: {y: 3000, opacity: 0},
      delay: 400,
    })



    // Navigation handling

    const handleNav = () => {

        props.setIsNavOpen(false)

    }


  return (

    // The main navigation menu, with the transition animations applied

    <div>


        {transition((style, item) =>
          item ? <animated.div style={style} className='nav-menu-container'>

        {transition9((style, item) => 
          item ? <animated.div style={style} id='nav-menu-container-close' onClick={handleNav}> 
            <a href='/'><AiOutlineCloseCircle /></a>
          </animated.div> : ''
        )}

        {transition2((style, item) => 
          item ? <animated.a style={style} className='links' href='/'> 
            Home
          </animated.a> : ''
        )}

        {transition3((style, item) => 
          item ? <animated.a style={style} className='links' href='https://www.twitch.tv/treythetrashman' target="_blank"> 
            Twitch
          </animated.a> : ''
        )}

        {transition4((style, item) => 
          item ? <animated.a style={style} className='links' href='/twitter'> 
            Twitter
          </animated.a> : ''
        )}

        {transition5((style, item) => 
          item ? <animated.a style={style} className='links' href='/discord'> 
            Discord
          </animated.a> : ''
        )}

        {transition6((style, item) => 
          item ? <animated.a style={style} className='links' href='/youtube'> 
            Youtube
          </animated.a> : ''
        )}

        {transition7((style, item) => 
          item ? <animated.a style={style} className='links' href='/instagram'> 
            Instagram
          </animated.a> : ''
        )}

        {transition8((style, item) => 
          item ? <animated.a style={style} className='links' href='/events'> 
            Tournaments
          </animated.a> : ''
        )}

        {transition10((style, item) => 
          item ? <animated.a style={style} className='links' href='/store'> 
            Store
          </animated.a> : ''
        )}
      
      </animated.div> : '')}


    </div>
  )
}

export default NavMenu