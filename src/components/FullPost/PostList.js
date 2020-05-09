import React from 'react';
import classes from './FullPost.module.css'

const PostList = (props) => {
    const postCls = [classes.Card, classes.PostCard].join(' ')
    return (
        <div className={ postCls }>
            <p>#1 Title</p>
            <p>Description</p>
        </div>
    );
}

export default PostList;