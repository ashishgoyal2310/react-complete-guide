import React from 'react';
import Auxiliary from '../../hoc/Auxiliary'

const layout = (props) => {
    return (
        <Auxiliary>
            <div>Toolbar, Sidebar, Etc.</div>
            <main>
                { props.children }
            </main>
        </Auxiliary>
    );
}

export default layout;