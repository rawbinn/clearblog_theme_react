import React from 'react';
import PostList from '../components/home/PostList';
import Header from '../partials/Header';
import HeaderTitle from '../partials/HeaderTitle';
const Home = () => {
    const post = {title: 'List of Recent Posts'};
    return (
        <div>
        <Header>
           <HeaderTitle header={post}/>
        </Header>
        <div className="container">
            <div className="row">
                <div className="col-lg-8 col-md-10 mx-auto">
                    <PostList />
                </div>
            </div>
        </div>
        </div>
    )
}

export default Home