import React, { useState, useEffect } from 'react';
import { withRouter } from 'react-router-dom'
import { instanceBlog as axiosBlog } from '../../containers/axiosInstance';
import classes from './FullPost.module.css'

let PostList = (props) => {
    console.log('[PostList.js]', props);

    const postCls = [classes.Card, classes.PostCard].join(' ');
    return (
        <div className={ postCls } onClick={props.clicked}>
            <p>#{ props.id } { props.title }</p>
            <p>Author: <strong>{ props.author }</strong></p>
        </div>
    );
}

// make embedded componenr Router Aware
PostList = withRouter(PostList)


const PostLists = (props) => {
    const [posts, setPosts] = useState([]);
    const [error, setError] = useState(false);

    useEffect(() => {
        console.log('[PostLists.js] as ComponentDidMount', props);

        const rnd = Math.random();
        // Randomize to use wrong url to check error section
        let url = (rnd > 0.9) ? '/postsXXX' : '/posts';

        axiosBlog.get(url)
            .then(response => {
                console.log('[PostLists.js] response', response);
                const posts = response.data.slice(0, 5);
                const updatePosts = posts.map(post => {
                    return { ...post, author: 'Ashish Goyal'}
                })

                setPosts(updatePosts);
            })
            .catch(response => {
                setError(true);
            });
    }, []);

    let postsListing = <p>Loading...</p>;
    if (error && !posts.length) {
        postsListing = <p>Error while loading...</p>;
    } else if (!!posts.length) {
        postsListing = posts.map(post => {
            return <PostList
                        key={post.id}
                        id={post.id}
                        title={post.title}
                        author={post.author}
                        clicked={() => props.selectPostHandler(post.id)} />;
        });
    }

    return (
        <section>
            <h3>Post Listing</h3>
            { postsListing }
        </section>
    );
}

export default PostLists;
