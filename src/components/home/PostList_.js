import React from 'react';

const PostList_ = ({ post }) => {
    return (
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
    )
}

export default PostList_