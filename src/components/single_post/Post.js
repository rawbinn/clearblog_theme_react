import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from "react-router-dom";
import Loading from '../../partials/loading/Loading';

const Post = () => {
    const [post, setPost] = useState();
    const [loading, setLoading] = useState(true);
    let { id } = useParams();

    const getPost = async () => {
        const response = await axios.get('http://larapress.seshra.com/api/post?post_id=' + id);
        setPost(response.data.data);
        setLoading(false)
    };
    useEffect(() => {
        getPost();
    }, []);

    if (loading) {
        return (
            <Loading />
        )
    }
    else {
        function createMarkup() {
            return {
                __html: post.content
            };
        };
        return (
            <div dangerouslySetInnerHTML={createMarkup()} />
        )
    }
}

export default Post