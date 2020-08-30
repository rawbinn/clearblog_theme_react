import React from 'react';
import PostList from '../components/home/PostList';
const Home = () => {
    return (
        <div class="container">
            <div class="row">
                <div class="col-lg-8 col-md-10 mx-auto">
                    <PostList />
                </div>
            </div>
        </div>
        
    )
}

export default Home