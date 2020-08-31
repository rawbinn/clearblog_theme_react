import React, { useState, useEffect } from 'react';
import { useParams } from "react-router-dom";
import Post from '../components/single_post/Post';
import Header from '../partials/Header';
import HeaderTitle from '../partials/HeaderTitle';
import axios from 'axios';
import Loading from '../partials/loading/Loading';

const Page = () => {
    let { slug } = useParams();
    const [post, setPost] = useState({});
    const [type, setType] = useState('post');
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const getPost = async () => {
            const response = await axios.get('http://larapress.seshra.com/api/post?slug=' + slug);
            setType(response.data.type);
            setPost(response.data.data);
            setLoading(false)
        };
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

export default Page