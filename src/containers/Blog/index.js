import React, { Component } from 'react';
import axios from 'axios'
import PostList from '../../components/FullPost/PostList'
import PostDetail from '../../components/FullPost/PostDetail'
import PostCreate from '../../components/FullPost/PostCreate'

class Blog extends Component {
    state = {
        posts: [],
        selectedPostid: null
    }

    componentDidMount() {
        axios.get('https://jsonplaceholder.typicode.com/posts')
            .then(response => {
                // console.log(response.data);
                const posts = response.data.slice(0, 5);
                const updatePosts = posts.map(post => {
                    return { ...post, author: 'Ashish Goyal'}
                })
                this.setState({
                    posts: updatePosts
                });
            });
    }

    selectPostHandler = (postId) => {
        this.setState({
            selectedPostid: postId
        })
    }

    createPostHandler = (data) => {
        axios.post('https://jsonplaceholder.typicode.com/posts', data)
            .then(response => {
                console.log(response);
            });
    }

    render() {
        const postsListing = this.state.posts.map(post => {
            return <PostList
                        key={post.id}
                        id={post.id}
                        title={post.title}
                        author={post.author}
                        clicked={() => this.selectPostHandler(post.id)} />;
        });

        return (
            <React.Fragment>
                <section>
                    <h3>Post Listing</h3>
                    { postsListing }
                </section>
                <section>
                    <PostDetail postId={this.state.selectedPostid} />
                </section>
                <section>
                    <PostCreate postData={this.createPostHandler} />
                </section>
            </React.Fragment>
        );
    }
}

export default Blog;