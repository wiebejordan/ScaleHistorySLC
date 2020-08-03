import React, {useState, useEffect} from 'react';
import axios from 'axios';
import {withRouter} from 'react-router-dom';
import '../BlogPost/BlogPost.css';


const BlogPost = ({ match }) => {
  const [title, setTitle] = useState(''),
        [image, setImage] = useState(''),
        [content, setContent] = useState(''),
        [username, setUsername] = useState(''),
        [profileImg, setProfileImg] = useState('');

  useEffect(() => {
    
    
    if(match.params.postid){
    axios.get(`/api/blogpost/${match.params.postid}`)
    .then(res => {
      setTitle(res.data[0].title);
      setImage(res.data[0].img);
      setContent(res.data[0].content);
      setUsername(res.data[0].username);
      setProfileImg(res.data[0].profile_img);
    })
    }
  })

  
  return (
    <div className='blogpost-main'>
      <div className='blogpost-container'>
      <header>{title}</header>
        <div className='blogpost-info'>
        <p>{username}</p>
        <img className='blogpost-profile-img'src={profileImg} alt={username}/>
      </div>
    <img className='blogpost-image' src={image} alt={title}/>
    <div className='blogpost-content-box'>
      <p className='blogpost-content'>{content}</p>
    </div>
        </div>
    </div>
  )
  
}


export default withRouter(BlogPost);