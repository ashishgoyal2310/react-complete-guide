import React from 'react';
import classes from './FullPost.module.css'

const PostDetail = (props) => {
    return (
        <div className={ classes.Card }>
            <h3>Add Post</h3>
            <form action="" method="" className={ classes.PostCreateForm }>
                <label>Title</label>
                <input type="text" placeholder="Title" />
                <label>Description</label>
                <textarea cols="3" placeholder="Description"></textarea>
                <label>Author</label>
                <input type="text" placeholder="Author" />
            </form>
        </div>
    );
}
 
export default PostDetail;