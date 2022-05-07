import React from 'react'
import '../../css/Insta.css'
import { useEffect, useState } from 'react'
import { instafeed, refreshToken } from 'instafeed-node-js'
import InstaImage from './InstaImage';
import { CgInstagram } from 'react-icons/cg'



const InstaPage = () => {


  const [photos, setPhotos] = useState([])
  const [photosLoaded, setPhotosLoaded] = useState(false)
  const [selectedImage, setSelectedImage] = useState(null)


  // Fetches photos from the users instagram
  useEffect(() => {

    instafeed({
      access_token: 'IGQVJWRE5NZAElzSklJb0tibnNqbnpqN2xPZAnc3REdPUWx2bnp6Qm9TY0FObWJ4SUd1VFNwdEQ1YmlvN3gtTFZAOTmtvaFFaN0lIekVsalctTFU0ZAGp3VFBRRkdEMEdLMTJjMzRPQ2pTSGg5U1BadGU0NAZDZD'
    })
    .then(res => {
      setPhotos(res.data)
      setPhotosLoaded(true)
      
    })
    .catch(err => console.log(err))
    .finally(() => refreshToken({access_token: 'IGQVJWRE5NZAElzSklJb0tibnNqbnpqN2xPZAnc3REdPUWx2bnp6Qm9TY0FObWJ4SUd1VFNwdEQ1YmlvN3gtTFZAOTmtvaFFaN0lIekVsalctTFU0ZAGp3VFBRRkdEMEdLMTJjMzRPQ2pTSGg5U1BadGU0NAZDZD'}))
    

  },[])


  return (

    // Displays the list of instagram images as well as displays a larger image for the currently selected picture
    <div className='insta-container'>


      
        <div className='insta-player'>
          {photosLoaded ? photos.map((element, index) => <InstaImage photos={photos} number={index} selectedImage={selectedImage} setSelectedImage={setSelectedImage}/>) : ''}
          
        </div>


        <div className='current-picture'>
          {selectedImage != null ? <img src={photos[selectedImage].image} /> : <p style={{width: 'fit-content'}}>Select an Image!</p>}
          {selectedImage != null ? <p>{photos[selectedImage].caption}</p> : <a href='https://www.instagram.com/treythetrashman/' target="_blank"><CgInstagram className='instagram-icon' /></a>}

        </div>


        

    </div>
  )
}

export default InstaPage