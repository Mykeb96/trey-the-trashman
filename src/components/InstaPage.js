import axios from 'axios';
import React from 'react'
import '../css/Insta.css'
import { useEffect, useState } from 'react'
import { instafeed, refreshToken } from 'instafeed-node-js'
import InstaImage from './InstaImage';



const InstaPage = () => {


  const [photos, setPhotos] = useState([])
  const [photosLoaded, setPhotosLoaded] = useState(false)
  const [selectedImage, setSelectedImage] = useState(null)


  useEffect(() => {

    instafeed({
      access_token: 'IGQVJWRE5NZAElzSklJb0tibnNqbnpqN2xPZAnc3REdPUWx2bnp6Qm9TY0FObWJ4SUd1VFNwdEQ1YmlvN3gtTFZAOTmtvaFFaN0lIekVsalctTFU0ZAGp3VFBRRkdEMEdLMTJjMzRPQ2pTSGg5U1BadGU0NAZDZD'
    })
    .then(res => {
      // console.log(res.data)
      setPhotos(res.data)
      setPhotosLoaded(true)
      
    })
    .catch(err => console.log(err))
    .finally(() => refreshToken({access_token: 'IGQVJWRE5NZAElzSklJb0tibnNqbnpqN2xPZAnc3REdPUWx2bnp6Qm9TY0FObWJ4SUd1VFNwdEQ1YmlvN3gtTFZAOTmtvaFFaN0lIekVsalctTFU0ZAGp3VFBRRkdEMEdLMTJjMzRPQ2pTSGg5U1BadGU0NAZDZD'}))
    

  },[])

  useEffect(() => {
    console.log(photos)
  },[photos])




  return (
    <div className='insta-container'>


      
        <div className='insta-player'>
          {photosLoaded ? photos.map((element, index) => <InstaImage photos={photos} number={index} selectedImage={selectedImage} setSelectedImage={setSelectedImage}/>) : ''}
          
        </div>

        <div className='current-picture'>
          {selectedImage != null ? <img src={photos[selectedImage].image} /> : ''}
          {selectedImage != null ? <p>{photos[selectedImage].caption}</p> : ''}

        </div>


        

    </div>
  )
}

export default InstaPage