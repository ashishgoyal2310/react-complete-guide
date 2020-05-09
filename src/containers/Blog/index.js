import React, { Component } from 'react';
import PostList from '../../components/FullPost/PostList'
import PostDetail from '../../components/FullPost/PostDetail'
import PostCreate from '../../components/FullPost/PostCreate'

class Blog extends Component {
    state = {  }
    render() {
        return (
            <React.Fragment>
                <section>
                    <h3>Post Listing</h3>
                    <PostList />
                    <PostList />
                    <PostList />
                    <PostList />
                    <PostList />
                </section>
                <section>
                    <PostDetail />
                </section>
                <section>
                    <PostCreate />
                </section>
            </React.Fragment>
        );
    }
}

export default Blog;