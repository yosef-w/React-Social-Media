import React, { useEffect, useState } from 'react'
import BlogPost from '../components/BlogPost';

export default function BlogDisplay() {

    const [posts, setPosts] = useState([])

    useEffect(() => {

        async function fetchPostData(){
            let response = await fetch('https://kekambas-blog-api.onrender.com/api/posts')
            let posts = await response.json()
            setPosts(posts);
        };

        fetchPostData();
    }, []);


    return (
        <div>
            <h1 className="text-center">Blog Posts</h1>
            {posts.map( post => <BlogPost key={post.id} post={post} />)}
        </div>
  )
}
