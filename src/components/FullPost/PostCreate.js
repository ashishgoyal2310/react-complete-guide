import React, { useState, useEffect } from 'react';
import classes from './FullPost.module.css'
import Button from '../UI/Button'

const PostDetail = (props) => {
    const [formData, setFormData] = useState({
                                        "title": "",
                                        "desc": "",
                                        "author": "",
                                    });

    const formDataHandler = (event, field) => {
        let updateFormData = { ...formData };
        updateFormData[field] = event.target.value;
        setFormData(updateFormData);
    }

    return (
        <div className={ classes.Card }>
            <h3>Add Post</h3>
            <form action="" method="" className={ classes.PostCreateForm }>
                <label>Title</label>
                <input type="text" placeholder="Title"
                    value={ formData.title }
                    onChange={(event) => formDataHandler(event, 'title')} />
                <label>Description</label>
                <textarea cols="3" placeholder="Description"
                    value={ formData.desc }
                    onChange={(event) => formDataHandler(event, 'desc')}></textarea>
                <label>Author</label>
                <input type="text" placeholder="Author"
                    value={ formData.author }
                    onChange={(event) => formDataHandler(event, 'author')} />
            </form>
            <Button clicked={() => props.postData(formData)} >Submit</Button>
        </div>
    );
}
 
export default PostDetail;