import React, { Component } from 'react';
import axios from 'axios'
import PostList from '../../components/FullPost/PostList'
import PostDetail from '../../components/FullPost/PostDetail'
import PostCreate from '../../components/FullPost/PostCreate'

class Blog extends Component {
    state = {
        posts: [],
        selectedPostid: null,
        error: false
    }

    componentDidMount() {
        const rnd = Math.random();
        let url = 'https://jsonplaceholder.typicode.com/posts';
        if (rnd > 0.5) { // Randomize to use wrong url to check error section
            url = 'https://jsonplaceholder.typicode.com/postss';
        }

        axios.get(url)
            .then(response => {
                console.log(response);
                const posts = response.data.slice(0, 5);
                const updatePosts = posts.map(post => {
                    return { ...post, author: 'Ashish Goyal'}
                })
                this.setState({
                    posts: updatePosts
                });
            })
            .catch(response => {
                this.setState({ error: true });
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
        let postsListing = <p>Loading...</p>;
        if (this.state.error && !this.state.posts.length) {
            postsListing = <p>Error while loading...</p>;
        } else {
            postsListing = this.state.posts.map(post => {
                return <PostList
                            key={post.id}
                            id={post.id}
                            title={post.title}
                            author={post.author}
                            clicked={() => this.selectPostHandler(post.id)} />;
            });
        }

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