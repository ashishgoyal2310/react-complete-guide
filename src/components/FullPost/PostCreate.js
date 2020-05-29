import React, { useState } from 'react';
import { instanceBlog as axiosBlog } from '../../containers/axiosInstance';
import Button from '../UI/Button';
import classes from './FullPost.module.css';

const PostCreate = (props) => {
    const [formData, setFormData] = useState({
                                        "title": "",
                                        "desc": "",
                                        "author": "",
                                    });
    const baseUrl = '/blog';

    const formDataHandler = (event, field) => {
        let updateFormData = { ...formData };
        updateFormData[field] = event.target.value;
        setFormData(updateFormData);
    }

    const createPostHandler = (data) => {
        axiosBlog.post('/posts', data)
            .then(response => {
                props.history.replace(baseUrl);
            });
    }

    return (
        <section>
            <div className={ classes.Card }>
                <h3>Add Post</h3>
                <form action="" method="" className={ classes.PostCreateForm }>
                    <label>Title</label>
                    <input type="text" placeholder="Title" className={classes.FormData}
                        value={ formData.title }
                        onChange={(event) => formDataHandler(event, 'title')} />
                    <label>Description</label>
                    <textarea cols="3" placeholder="Description" className={classes.FormData}
                        value={ formData.desc }
                        onChange={(event) => formDataHandler(event, 'desc')}></textarea>
                    <label>Author</label>
                    <input type="text" placeholder="Author" className={classes.FormData}
                        value={ formData.author }
                        onChange={(event) => formDataHandler(event, 'author')} />
                </form>
                <Button clicked={() => createPostHandler(formData)} >Submit</Button>
            </div>
        </section>
    );
}

export default PostCreate;