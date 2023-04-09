import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import BlogPost from '../components/BlogPost';


export default function SinglePost() {
    const params = useParams();

    const [post, setPost] = useState({});

    useEffect(() => {
        fetch(`https://kekambas-blog-api.onrender.com/api/posts/${params.postId}`)
            .then(res => res.json())
            .then(data => {
                console.log(data);
                setPost(data);
            })
    }, [params.postId])
    
    return (
        <div>
            <BlogPost post={post} />
        </div>
    )
}