import React from 'react';
import '../AboutPage/AboutPage.css'

const AboutPage = () => {
  
  return (
    <div class='about-container'>
      <h1>About ScaleHistory SLC</h1>
      <img style={{height: '300px', width: '500px'}} src='https://i.imgur.com/97QFsfB.jpg'/>

      <div class='about-p-container'>
      <p>ScaleHistory SLC is a collection of medias focusing on historic tabletop wargaming, especially centered on World War 2. The mission of SHSLC is not only to produce top quality content (even if the miniatures are only "tabletop standard"), but also to bring a community together around Historic wargaming. </p>
      
      <p>Whether you live in the Salt Lake City area or abroad, don't hesitate to reach out and join in on the discussions, gameplay and fun that wargaming can deliver! </p>

      <p>-Jordan</p>
      </div>
    </div>
  )
}

export default AboutPage;