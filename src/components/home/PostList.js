import React, { useState, useEffect } from 'react';
import axios from 'axios';

const PostList = () => {
    const [posts, setPosts] = useState();

    const getPosts = async () => {
        const response = await axios.get('http://larapress.seshra.com/api/posts?limit=10');
        setPosts(response.data.data);
    };
    useEffect(() => {
        getPosts();
    }, []);
    return (
        <div>
            {posts && posts.map(post => (
                <div>
                    <div class="post-preview">
                    <a href={"/post/"+post.id}>
                        <h2 class="post-title">
                        {post.title}
                        </h2>
                        <h3 class="post-subtitle">
                        {post.content}
                        </h3>
                    </a>
                    <p class="post-meta">Posted by 
                        <a href="#">{post.author.name}</a> 
                        on {post.post_date}</p>
                    </div>
                    <hr />
                </div>
            ))}
            <div class="clearfix">
                <a class="btn btn-primary float-right" href="#">Older Posts →</a>
            </div>
        </div>
    )
}

export default PostList