import React from 'react'
import '../css/DiscordPage.css'
import WidgetBot from '@widgetbot/react-embed'

const DiscordPage = () => {



  return (
    <div className='discord-container'>

        {/* Discord server embed */}
        
        <WidgetBot
            server="523256452018864139"
            channel="523256452018864145"
            className='widget-bot'
        />
    </div>
  )
}

export default DiscordPage