import React from 'react';
import { useHistory } from 'react-router';

const Post = (props) => {

    const {id, title, body} = props.post;

    const history = useHistory();

    const showComments = id => {
        history.push(`/post/${id}`);
    }

    return (
        <div>
            <h3> <strong> id: {id} </strong> {title} </h3>
            <p>{body}</p>
            <button onClick={ () => showComments(id) }> show components </button>
        </div>
    );
};

export default Post;