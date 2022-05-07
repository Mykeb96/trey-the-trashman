import React from 'react'

const YoutubeCard = (props) => {

    
  return (

    // Generates a youtube video card for each video listed

    <div className='card-container'>
        <img src={props.thumbnail} onClick={() => {
            props.setIsVideoOpen(true)
            props.setIndexOfVideo(props.id)
        }} />

        <h2 className='card-title'>
            {props.title}
        </h2>
    </div>
  )
}

export default YoutubeCard