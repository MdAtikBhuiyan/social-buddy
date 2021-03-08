import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import Comment from '../Comment/Comment';

const PostDetail = () => {

    const {id} = useParams()

    const [ post, setPost ] = useState({})
    useEffect( () => {
        fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
        .then( res => res.json())
        .then( data => setPost(data) )
    }, [id]);

    const [ comments, setComments ] = useState([])
    useEffect( () => {
        const url = `https://jsonplaceholder.typicode.com/comments?postId=${id}`;
        fetch(url)
        .then( res => res.json())
        .then( data => setComments(data) )
    },[id])

    return (
        <div>
            <h3> this is post detail {id}  </h3>
            <p>User Posted: {post.id}</p>
            <p>title: {post.title}</p>
            <p>Post Body: {post.body}</p>
            <p>Number of comments: {comments.length} </p>
            {
                comments.map( comment => <Comment comment={comment}></Comment>)
            }
        </div>
    );
};

export default PostDetail;