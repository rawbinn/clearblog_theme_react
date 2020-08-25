import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from "react-router-dom";

const Post = () => {
    const [post, setPost] = useState();
    let { id } = useParams();

    const getPost = async () => {
        const response = await axios.get('http://larapress.seshra.com/api/post?post_id='+id);
        setPost(response.data.data);
    };
    useEffect(() => {
        getPost();
    }, []);
    return (
        <div>
            {post &&
                post.content
            }
        </div>
    )
}

export default Post