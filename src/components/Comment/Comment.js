import React from 'react';

const Comment = (props) => {
    const {name, email, body} = props.comment;
    return (
        <div>
            <h3>Comments are: </h3>
            <p>Name: {name}</p>
            <p>Email: {email}</p>
            <p> {body}</p>
        </div>
    );
};

export default Comment;