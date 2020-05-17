import React, { useState, useEffect } from 'react';
import { instanceBlog as axiosBlog } from '../../containers/axiosInstance';
import Button from '../UI/Button';
import classes from './FullPost.module.css';

const PostDetail = (props) => {
    const [postIdDetail, setPostIdDetail] = useState(null);
    const propsPostId = props.match.params.id;

    const getPostDetail = (postId) => {
        if (!postId) return;
        setPostIdDetail(null);

        axiosBlog.get('/posts/' + postId)
            .then(response => {
                console.log('[PostDetail.js] response', response);
                const post = response.data;
                const updatePost = { ...post,
                                        author: 'Ashish Goyal',
                                        body: post.body ? post.body : 'This is some dettault text for post desc.'
                                    };
                setPostIdDetail(updatePost);
            })
            .catch(error => console.log(error.message));
    };

    useEffect(() => {
        console.log('[PostDetail.js  ] ..useEffect as componentDidUpdate');
        getPostDetail(propsPostId);
    }, [propsPostId]);

    let post = <p>Missing Required Post ID.</p>;
    if ( propsPostId ) {
        if (!postIdDetail) {
            post = <p>#{ propsPostId } Loading...</p>;
        } else {
            post = (<div className={ classes.Card }>
                            <h3>Post Detail</h3>
                            <p>#{ postIdDetail.id } { postIdDetail.title }</p>
                            <p>{ postIdDetail.body }</p>
                            <Button btnType={ 'Danger' }>Delete</Button>
                        </div>);
        }
    };

    return (
        <section>
            { post }
        </section>
    );
}

export default PostDetail;