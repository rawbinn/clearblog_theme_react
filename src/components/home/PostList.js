import React, { useState, useEffect} from 'react';
import axios from 'axios';
import Loading from '../../partials/loading/Loading';
import Pagination from 'reactjs-hooks-pagination';

const pageLimit = 5;

const PostList = () => {
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');
    const [empty, setEmpty] = useState(false);
    const [posts, setPosts] = useState({});
    const [totalRecords, setTotalRecords] = useState(50);
    const [currentPage,setCurrentPage] = useState(1);

    const getPosts = async () => {
        await axios.get('http://larapress.seshra.com/api/posts?limit='+pageLimit+'&page='+currentPage)
        .then(response => {
            if(response.data.status) {
                setTotalRecords(response.data.data.totalRecords);
                setPosts(response.data.data.items);
                
            }else{
                setEmpty(true);
            }
        })  
        .catch(error => {   
            setPosts({})  
            setError('Something went wrong'+error) 
        });
        setLoading(false) ;
    };
    
    useEffect(() => {
        getPosts();
    }, [currentPage]);

    if(loading) {
        return (
            <Loading />
        )
    }
    else if(empty){
        return (
            <div>
                <p>No data available...</p>
            </div>
        )
    }
    else{
        return (
            <div>
                {posts && posts.map(post => (
                    <div key={post.id}>
                        <div className="post-preview">
                        <a href={"/post/"+post.id}>
                            <h2 className="post-title">
                            {post.title}
                            </h2>
                            <h3 className="post-subtitle">
                            {post.content}
                            </h3>
                        </a>
                        <p className="post-meta">Posted by 
                            <a href="#">{post.author.name}</a> 
                            on {post.post_date}</p>
                        </div>
                        <hr />
                    </div>
                ))}
                <div className="clearfix">
                         <Pagination
                totalRecords={totalRecords}
                pageLimit={pageLimit}
                pageRangeDisplayed={1}
                onChangePage={setCurrentPage}
      />
                </div>
            </div>
        )
    }
}

export default PostList