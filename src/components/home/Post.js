import React, { useState, useEffect } from 'react';
import axios from 'axios';
import PostList from './PostList';

const Post = () => {
    const [posts, setPosts] = useState();

    const getPosts = async () => {
        const response = await axios.get('http://larapress.seshra.com/api/posts');
        setPosts(response.data.data);
    };
    useEffect(() => {
        getPosts();
    }, []);
    console.log(posts)
    return (
        <div>
            {posts && posts.map(item => (
                <PostList post={item} key={item.id} />
            ))}
        </div>
    )
}

export default Post