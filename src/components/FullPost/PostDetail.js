import React, { useState, useEffect } from 'react';
import classes from './FullPost.module.css'
import Button from '../UI/Button'
import axios from 'axios'

const PostDetail = (props) => {
    const [postIdDetail, setPostIdDetail] = useState(null);

    const getPostDetail = (postId) => {
        if (!postId) return;
        setPostIdDetail(null);

        axios.get('https://jsonplaceholder.typicode.com/posts/' + postId)
            .then(response => {
                console.log(response);
                const post = response.data;
                const updatePost = { ...post, author: 'Ashish Goyal'};
                setPostIdDetail(updatePost);
            });
    };

    useEffect(() => {
        console.log('[PostDetail.js  ] ..useEffect as componentDidUpdate');
        getPostDetail(props.postId);
    }, [props.postId]);

    let post = <p>Select any post to fetch details.</p>;
    if ( props.postId ) {
        if (!postIdDetail) {
        post = <p>#{ props.postId } Loading...</p>;
        } else {
            post = (<div className={ classes.Card }>
                            <h3>Post Detail</h3>
                            <p>#{ postIdDetail.id } { postIdDetail.title }</p>
                            <p>{ postIdDetail.body }</p>
                            <Button btnType={ 'Danger' }>Delete</Button>
                        </div>);
        }
    };

    return post;
}

export default PostDetail;