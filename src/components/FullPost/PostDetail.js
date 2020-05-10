import React, { useEffect } from 'react';
import classes from './FullPost.module.css'
import Button from '../UI/Button'
import axios from 'axios'

const PostDetail = (props) => {
    const getPostDetail = (postId) => {
        if (!postId) return;

        axios.get('https://jsonplaceholder.typicode.com/posts/' + postId)
            .then(response => {
                // console.log(response.data);
                const post = response.data;
                const updatePost = { ...post, author: 'Ashish Goyal'};
                console.log(updatePost);
            });
    };

    useEffect(() => {
        console.log('[PostDetail.js  ] ..useEffect as componentDidUpdate');
        getPostDetail(props.postId);
    }, [props.postId]);

    let postIdDetail = <p>Select any post to fetch details.</p>;
    if ( props.postId ) {
        postIdDetail = (<div className={ classes.Card }>
                        <h3>Post Detail</h3>
                        <p>#1 Title</p>
                        <p>Description</p>
                        <Button btnType={ 'Danger' }>Delete</Button>
                    </div>);
    };

    return postIdDetail;
}

export default PostDetail;