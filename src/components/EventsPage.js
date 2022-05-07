import React from 'react'
import '../css/Events.css'
import { TiMicrophone } from 'react-icons/ti'
import { GiConsoleController } from 'react-icons/gi'

const EventsPage = () => {


  return (
    <div className='events-container'>

      <div className='event-box-container'>

        {/* Three of the most recent/upcoming events with smash.gg links */}

        <div className='event-box' onClick={() => window.open('https://smash.gg/tournament/genesis-8/details', '_blank')}>
            <img src='https://images.smash.gg/images/tournament/174838/image-bb5b2f64ca474eab029316295d54e064.png?format=auto&fit=cover' />
            <h4>Genesis 8</h4>
            <p><TiMicrophone className='icons'/>Commentating + Playing<GiConsoleController className='icons' /></p>
        </div>

        <div className='event-box' onClick={() => window.open('https://smash.gg/tournament/pound-2022/details', '_blank')}>
            <img src='https://images.smash.gg/images/tournament/419719/image-c390e36ea7d1b49367e1652347b05a2f.png?format=auto&fit=cover' />
            <h4>Pound 2022</h4>
            <p><TiMicrophone className='icons' />Commentating + Playing<GiConsoleController className='icons' /></p>
        </div>

        <div className='event-box' id='arcadian' onClick={() => window.open('https://smash.gg/tournament/socal-melee-arcadian-2022/details', '_blank')}>
            <img src='https://images.smash.gg/images/tournament/436276/image-e3f61785ed25d80a3548bec0fffe4da4.png?format=auto&fit=cover' />
            <h4>SoCal Arcadian</h4>
            <p><TiMicrophone className='icons' />Commentating</p>
        </div>

        </div>

    </div>
  )
}

export default EventsPage