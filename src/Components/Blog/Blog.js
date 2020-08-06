import React, {Component} from 'react';
import axios from 'axios';
import {connect} from 'react-redux';
import '../Blog/Blog.css';
import {Link} from 'react-router-dom';

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

        <Link className='Links' to={`/blogpost/${post.post_id}`}>
        <div key={i} post={post}  className='post-box'>
            
          <div className='post-author'>
            <p className='post-title'>{post.title}</p>
            <div className='post-author-right'>
            <p>{post.username}</p>
            <img className='user-image' src={post.profile_img} alt={post.username}/>
            </div>
          </div>

          <img className='post-image' src={post.img}/>
        </div>
        </Link>

      ))
      return(
        <div className='blog-main'>
          <div className='blog-container'>
            <header>Blog</header>

            {this.props.user.isadmin === true
            ?(<button>New Post</button>)
            :null}

            {mappedPosts}
          </div>
        </div>
      )
    }


}

const mapStateToProps = reduxState => reduxState;

export default connect(mapStateToProps)(Blog);