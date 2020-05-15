import React, { useState, useEffect } from 'react';
import { instanceBlog as axiosBlog } from '../../containers/axiosInstance';
import classes from './FullPost.module.css'

const PostList = (props) => {
    const postCls = [classes.Card, classes.PostCard].join(' ')
    return (
        <div className={ postCls } onClick={props.clicked}>
            <p>#{ props.id } { props.title }</p>
            <p>Author: <strong>{ props.author }</strong></p>
        </div>
    );
}

const PostLists = (props) => {
    const [posts, setPosts] = useState([]);
    const [error, setError] = useState(false);

    useEffect(() => {
        console.log('[PostList.js] as ComponentDidMount');

        const rnd = Math.random();
        // Randomize to use wrong url to check error section
        let url = (rnd > 0.5) ? '/postsXXX' : '/posts';

        axiosBlog.get(url)
            .then(response => {
                console.log(response);
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
