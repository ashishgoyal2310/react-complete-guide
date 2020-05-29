import React, { Component } from 'react';
// import axios from 'axios'
import { Route, NavLink, withRouter, Switch } from 'react-router-dom'

import PostLists from '../../components/FullPost/PostList';
import PostCreate from '../../components/FullPost/PostCreate';

import classes from './Blog.module.css'

let BlogNavigation = (props) => {
    return (
        <header className={ classes.Blog }>
            <nav>
                <ul>
                    <li><NavLink to={props.baseUrl}
                                exact
                                activeClassName={classes.active}
                        >Posts</NavLink></li>
                    <li><NavLink to={{
                            pathname: props.baseUrl + '/new-post',
                            hash: '#submit',
                            search: '?quick-search=allpost'
                        }}
                        activeClassName={classes.active}
                        >New Post</NavLink></li>
                </ul>
            </nav>
        </header>
    );
}
BlogNavigation = withRouter(BlogNavigation);


class Blog extends Component {
    state = {}

    render() {
        const baseUrl = this.props.match.url;
        return (
            <React.Fragment>
                <BlogNavigation baseUrl={baseUrl} />
                <Switch>
                    <Route path={`${baseUrl}/new-post`} component={PostCreate} />
                    <Route path={baseUrl} component={PostLists} />
                    {/* <Route path={`${baseUrl}/:id`} component={PostDetail} /> */}
                </Switch>
            </React.Fragment>
        );
    }
}

export default Blog;