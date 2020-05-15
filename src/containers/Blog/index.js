import React, { Component } from 'react';
// import axios from 'axios'
import { instanceBlog as axiosBlog } from '../axiosInstance';

import PostLists from '../../components/FullPost/PostList';
import PostDetail from '../../components/FullPost/PostDetail';
import PostCreate from '../../components/FullPost/PostCreate';

import classes from './Blog.module.css'

const BlogNavigation = () => {
    return (
        <header className={ classes.Blog }>
            <nav>
                <ul>
                    <li><a href="/" >Home</a></li>
                    <li><a href="/new-post" >New Post</a></li>
                </ul>
            </nav>
        </header>
    );
}

class Blog extends Component {
    state = {
        selectedPostid: null,
    }

    selectPostHandler = (postId) => {
        this.setState({
            selectedPostid: postId
        })
    }

    createPostHandler = (data) => {
        axiosBlog.post('/posts', data)
            .then(response => {
                console.log(response);
            });
    }

    render() {

        return (
            <React.Fragment>
                <BlogNavigation />
                <PostLists selectPostHandler={this.selectPostHandler} />
                <PostDetail postId={this.state.selectedPostid} />
                <PostCreate postData={this.createPostHandler} />
            </React.Fragment>
        );
    }
}

export default Blog;