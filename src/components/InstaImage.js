import React from 'react'

const InstaImage = (props) => {

    console.log(props)


  return (
    <div className='insta-image-container'>
        <img  className='insta-image' src={props.photos[props.number].image} onClick={() => props.setSelectedImage(props.number)}/>
        <p>{props.photos[props.number].caption}</p>

    </div>
  )
}

export default InstaImage