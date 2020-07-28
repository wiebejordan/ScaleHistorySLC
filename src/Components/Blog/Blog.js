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
          <p>{post.title}</p>
            
          <div className='post-author'>
            <p>{post.username}</p>
            <img src={post.profile_img} alt={post.username}/>
          </div>

          <img src={post.img}/>
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