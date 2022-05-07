import React from 'react'
import '../../css/YoutubePage.css'
import axios from 'axios'
import { useEffect, useState } from 'react'
import YoutubeCard from './YoutubeCard'


const YoutubePage = () => {

    const [isLoading, setIsLoading] = useState(true)
    const [videos, setVideos] = useState([])
    const [isVideoOpen, setIsVideoOpen] = useState(false)
    const [indexOfVideo, setIndexOfVideo] = useState(0)

    // Fetch youtube videos when this component loads
    useEffect(() => {
        getYoutubeCards()
        setIsLoading(false)
    },[])


    // Dynamically fetches youtube videos from 3 separate accounts

    const getYoutubeCards = () => {

        const arrayCopy = [...videos]

        if (window.location.href == 'https://trey-the-trashman.vercel.app/youtube') {
            axios.get('https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Fwww.youtube.com%2Ffeeds%2Fvideos.xml%3Fchannel_id%3DUCpesGx3Qey9hRtJ_8EkPoZQ')
        .then(res => {
            

            
            for(let i = 0; i < res.data.items.length; i++){

                let videoURL = ''
                let videoCode = ''
                videoURL = res.data.items[i].link
                videoCode = videoURL.substr(32, 50)
                
                arrayCopy.push({title: res.data.items[i].title, thumbnail: res.data.items[i].thumbnail, url: videoCode})
            }
            setVideos(arrayCopy)
            
            

            

        })
        .catch(err => console.log(err))

        } else if (window.location.href == 'https://trey-the-trashman.vercel.app/youtube/vods') {
            axios.get('https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Fwww.youtube.com%2Ffeeds%2Fvideos.xml%3Fchannel_id%3DUC2ncLX5AupYZ-U67u-dLCww')
            .then(res => {
            

            
                for(let i = 0; i < res.data.items.length; i++){

                    let videoURL = ''
                    let videoCode = ''
                    videoURL = res.data.items[i].link
                    videoCode = videoURL.substr(32, 50)
        
                    arrayCopy.push({title: res.data.items[i].title, thumbnail: res.data.items[i].thumbnail, url: videoCode})
                }
            setVideos(arrayCopy)


            

        })
            .catch(err => console.log(err))

        } else if (window.location.href == 'https://trey-the-trashman.vercel.app/youtube/highlights') {
            axios.get('https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Fwww.youtube.com%2Ffeeds%2Fvideos.xml%3Fchannel_id%3DUCOieSKoQsoyvROZYQhjq9Sw')
            .then(res => {
            

            
                for(let i = 0; i < res.data.items.length; i++){

                    let videoURL = ''
                    let videoCode = ''
                    videoURL = res.data.items[i].link
                    videoCode = videoURL.substr(32, 50)

                    arrayCopy.push({title: res.data.items[i].title, thumbnail: res.data.items[i].thumbnail, url: videoCode})
                }
            setVideos(arrayCopy)

            

            

        })
            .catch(err => console.log(err))

        }

    

    }



  return (
    <div className='youtube-page-container'>

        {/* Different youtube channel links */}
        <div className='youtube-links'>
            <a href='/youtube'>Main</a>
            <a href='/youtube/garden'>Gardening</a>
            <a href='/youtube/vods'>Tournaments</a>
            <a href='/youtube/highlights'>Clips + Highlights</a>
        </div>

        
        {/* Generates a youtube video card for each video */}
        <div className='videos-container'>
            {isLoading ? '' : videos.map((element, index) => <YoutubeCard key={index} id={index} title={element.title} thumbnail={element.thumbnail} setIsVideoOpen={setIsVideoOpen} setIndexOfVideo={setIndexOfVideo}/>)}
        </div>

        {/* Live video player with backdrop for selected video */}
        {isVideoOpen ? <div className='video-backdrop' onClick={() => setIsVideoOpen(false)}></div> : ''}
        {isVideoOpen ? <iframe id='video-player' width="560" height="315" src={`https://www.youtube.com/embed/${videos[indexOfVideo].url}`} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe> : ''}
        
        

    </div>
  )
}

export default YoutubePage