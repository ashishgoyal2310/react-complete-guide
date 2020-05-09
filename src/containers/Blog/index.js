import React, { Component } from 'react';
import axios from 'axios'
import PostList from '../../components/FullPost/PostList'
import PostDetail from '../../components/FullPost/PostDetail'
import PostCreate from '../../components/FullPost/PostCreate'

class Blog extends Component {
    state = {
        posts: []
    }

    componentDidMount() {
        axios.get('https://jsonplaceholder.typicode.com/posts')
            .then(response => {
                // console.log(response.data);
                this.setState({
                    posts: response.data
                });
            });
    }

    render() {
        const postsListing = this.state.posts.map(post => {
            return (<PostList key={post.id} id={post.id} title={post.title} author={'Ashish'} />);
        });

        return (
            <React.Fragment>
                <section>
                    <h3>Post Listing</h3>
                    { postsListing }
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