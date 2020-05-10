import React from 'react';
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

export default PostList;