import React from 'react'
import '../css/HomePage.css'
import ReactTwitchEmbedVideo from "react-twitch-embed-video"

const HomePage = () => {


  return (
    <div className='homepage-container'>

      <div className='twitch-stream'>

        <ReactTwitchEmbedVideo channel="treythetrashman" height={800} width={1500} theme={'dark'} />

      </div>
        
        

    </div>
  )
}

export default HomePage