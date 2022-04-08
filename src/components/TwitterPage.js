import React from 'react'
import '../css/TwitterPage.css'
import { TwitterTimelineEmbed, TwitterFollowButton } from 'react-twitter-embed'

const TwitterPage = () => {



  return (
    <div className='twitter-page-container'>
      <div className='testing'>
        <TwitterTimelineEmbed
            sourceType="profile"
            screenName="TreyTheTrashman"
            options={{height: 700, width: 1000}}
            id='twitter-feed'
            theme='dark'
            borderColor='#214E34'
            // noHeader='true'
            noFooter='true'
            noBorders='true'
            noScrollbar='true'
            transparent='true'
        />
        </div>

        <div>
          <br />
          <br />
        </div>

        <TwitterFollowButton
            backgroundColor='black'
            screenName={'TreyTheTrashman'}
            id='follow-button'
            options={{size: 'large'}}
        />
    </div>
  )
}

export default TwitterPage