import React from 'react';
import Post from '../components/single_post/Post';

const SinglePost = () => {
    return (
        <article>
            <div className="container">
            <div className="row">
                <div className="col-lg-8 col-md-10 mx-auto">
                    <Post />
                </div>
            </div>
            </div>
        </article>
    )
}

export default SinglePost