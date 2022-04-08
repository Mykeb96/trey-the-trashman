import React from 'react'
import { AiOutlineCloseCircle } from 'react-icons/ai'
import { animated, useTransition } from 'react-spring'

const NavMenu = (props) => {

    const transition = useTransition(props.isNavOpen, {
      from: { y: 3000, opacity: 0},
      enter: {y: 0, opacity: 1},
      leave: {y: 3000, opacity: 0},
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


    const handleNav = () => {

        props.setIsNavOpen(false)

    }


  return (
    <div>


{transition((style, item) =>
      item ? <animated.div style={style} className='nav-menu-container'>

        {transition9((style, item) => 
          item ? <animated.div style={style} id='nav-menu-container-close' onClick={handleNav}> 
            <AiOutlineCloseCircle />
          </animated.div> : ''
        )}

        {transition2((style, item) => 
          item ? <animated.a style={style} className='links' href='/'> 
            Home
          </animated.a> : ''
        )}

        {transition3((style, item) => 
          item ? <animated.a style={style} className='links' href='https://www.twitch.tv/treythetrashman'> 
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
          item ? <animated.a style={style} className='links' href='/tournaments'> 
            Tournaments
          </animated.a> : ''
        )}
      
      </animated.div> : '')}


    </div>
  )
}

export default NavMenu