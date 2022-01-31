import React from 'react';

export const PostAdding = () => {
  return (
    <div className='contactForm'>
      <PostAddingForm></PostAddingForm>
      <div className='form-floating'>
        <button className="btn btn-primary text-uppercase ">Add post</button>
      </div>
    </div>
  );
};
const PostAddingForm = () => {
  return (
    <div className='form-floating'>
      <input className='form-control' id='name' type='text' placeholder='Enter your name...'>
      </input>
      <input className='form-control' id='post' type='text' placeholder='Write your post...'>
      </input>
    </div>
  );
};
