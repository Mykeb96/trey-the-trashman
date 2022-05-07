import React from 'react'
import '../css/HomePage.css'
import ReactTwitchEmbedVideo from "react-twitch-embed-video"

const HomePage = () => {


  return (
    <div className='homepage-container'>

      <div className='twitch-stream'>

        {/* Twitch live-stream embed, but still needs to be sized correctly */}

        <ReactTwitchEmbedVideo channel="treythetrashman" height={'700'} width={'1536'} theme={'dark'} />

      </div>
        
        

    </div>
  )
}

export default HomePage