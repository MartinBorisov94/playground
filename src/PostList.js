import React from 'react';
import { posts } from './posts';

export const PostList = () => {
  return (
    <div className='row gx-4 gx-lg-5 justify-content-center'>
      {posts.map((post) => {
        const { userName, article, id } = post;
        return <Post key={id} userName={userName} article={article}  id={id}/>;
      })}

    </div>
  );
};
const Post = (props) => {
  const { userName, article, id } = props;
  return (
    <div  className='col-md-10 col-lg-8 col-xl-7'>
      <h2 className='post-title'> {userName}</h2>
      <p className='post-meta'> {article} </p>
      <button className="btn btn-primary text-uppercase">Like</button>
    </div>
  );
};
