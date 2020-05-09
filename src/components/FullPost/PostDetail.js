import React from 'react';
import classes from './FullPost.module.css'
import Button from '../UI/Button'

const PostDetail = (props) => {
    return (
        <div className={ classes.Card }>
            <h3>Post Detail</h3>
            <p>#1 Title</p>
            <p>Description</p>
            <Button btnType={ 'Danger' }>Delete</Button>
        </div>
    );
}

export default PostDetail;