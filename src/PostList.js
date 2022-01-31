import React from 'react';
import { posts } from './posts';

export const PostList = () => {
  return (
    <div className='row gx-4 gx-lg-5 justify-content-center'>
      {posts.map((post) => {
        return <Post key={post.id} userName={post.userName} 
                        article={post.article}  id={post.id} likes={post.likes}/>;
      })}

    </div>
  );
};
const Post = (props) => {
  const { userName, article, id, likes } = props;
  return (
    <div  className='col-md-10 col-lg-8 col-xl-7'>
        <div className='container post-preview' >
            <h2 className='post-title'> {userName}</h2> 
            <p className='post-meta'> {article} </p>
            <button className="btn btn-primary text-uppercase">Like</button>
            
        </div>
         <p> likes {likes}</p>
        <hr className='post-preview'></hr>

    </div>
  );
};
