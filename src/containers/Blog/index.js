import React, { Component } from 'react';
// import axios from 'axios'
import { Route, Link } from 'react-router-dom'
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
                    <li><Link to="/">Home</Link></li>
                    <li><Link to={{
                        pathname: '/new-post',
                        hash: '#submit',
                        search: '?quick-search=allpost'
                    }}>New Post</Link></li>
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
                <Route path="/" exact component={PostLists} />
                {/* <PostLists selectPostHandler={this.selectPostHandler} /> */}
                {/* <PostDetail postId={this.state.selectedPostid} /> */}
                <Route path="/new-post" exact component={PostCreate} />
                {/* <PostCreate postData={this.createPostHandler} /> */}
            </React.Fragment>
        );
    }
}

export default Blog;