import React, { useState, useEffect } from 'react';
import Post from '../components/single_post/Post';
import axios from 'axios';
import { useParams } from "react-router-dom";
import Loading from '../partials/loading/Loading';
import HeaderTitle from '../partials/HeaderTitle';
import Header from '../partials/Header';

const SinglePost = () => {
    const [post, setPost] = useState({});
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

    return (
        <div>
        <Header>
            {!loading && <HeaderTitle header={post}/> }
        </Header>
        <article>
            <div className="container">
            <div className="row">
                <div className="col-lg-8 col-md-10 mx-auto">
                    {loading ? <Loading /> :  <Post post={post}/> }
                </div>
            </div>
            </div>
        </article>
        </div>
    )
}

export default SinglePost