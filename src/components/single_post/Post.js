import React from 'react';

const Post = ({post}) => {
    
    function createMarkup() {
        return {
            __html: post.content
        };
    };
    return (
        <div dangerouslySetInnerHTML={createMarkup()} />
    )
}

export default Post