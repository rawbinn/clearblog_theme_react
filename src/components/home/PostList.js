import React, { useState, useEffect, useReducer } from 'react';
import axios from 'axios';
import Loading from '../../partials/loading/Loading';
import Pagination from 'reactjs-hooks-pagination';

const pageLimit = 5;
const initialState = {  
  user: {},  
  loading: true,  
  error: ''  
}  
 
const Reducer = (state, action) => {  
  switch (action.type) {  
      case 'OnSuccess':  
          return {  
              loading: false,  
              user: action.payload,  
              error: ''  
          }  
      case 'OnFailure':  
          return {  
              loading: false,  
              user: {},  
              error: 'Something went wrong'  
          }  
 
      default:  
          return state  
  }  
}

const PostList = () => {
    const [posts, setPosts] = useState();
    const [loading, setLoading] = useState(true);
    const [empty, setEmpty] = useState(false);
    const [state, dispatch] = useReducer(Reducer, initialState);
  const [offset, setOffset] = useState(0);
  const [totalRecords, setTotalRecords] = useState(50);
  const [currentPage,setCurrentPage] = useState(1);

    const getPosts = async () => {
        const response = await axios.get('http://larapress.seshra.com/api/posts?limit='+pageLimit+'&page='+currentPage)
        .then(response => {  
            dispatch({ type: 'OnSuccess', payload: response.data })  
            if(response.data.status) {
                setTotalRecords(response.data.data.totalRecords);
                setPosts(response.data.data.items);
                
            }else{
                setEmpty(true);
            }
        })  
        .catch(error => {  
            dispatch({ type: 'OnFailure' })  
        })  ;
       
        setLoading(false);
    };
    useEffect(() => {
        getPosts();
    }, [currentPage]);

    const {user,error}  =state;


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
                ))}
                <div class="clearfix">
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