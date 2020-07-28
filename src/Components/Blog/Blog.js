import React, {Component} from 'react';
import axios from 'axios';
import {connect} from 'react-dom';
import '../Blog/Blog.css';

class Blog extends Component {
    constructor(props){
      super(props);

      this.state = {
        posts: []
      }
    }

    componentDidMount = () => {
      this.getPosts();
    }

    getPosts = () => {
      axios.get('/api/blogposts')

      .then(res => this.setState({posts: res.data}))
      .catch(err => console.log(err));
    }

    render(){
      const mappedPosts = this.state.posts.map((post, i) => (
        <div key={i} className='post-box'>
            
          <div className='post-author'>
            <p className='post-title'>{post.title}</p>
            <div className='post-author-right'>
            <p>{post.username}</p>
            <img className='user-image' src={post.profile_img} alt={post.username}/>
            </div>
          </div>

          <img className='post-image' src={post.img}/>
        </div>
      ))
      return(
        <div className='blog-main'>
          <div className='blog-container'>
            <header>Blog</header>
            {mappedPosts}
          </div>
        </div>
      )
    }


}

export default Blog;