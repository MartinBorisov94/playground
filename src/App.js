import './App.css';
import React from 'react';
import '../node_modules/startbootstrap-clean-blog/dist/css/styles.css';

function App() {
  return (
  <React.StrictMode >
    <div className='container px-4 px-lg-5'>
      <PostAdding></PostAdding>
      <PostList></PostList>
    </div>


  </React.StrictMode>);
}

const PostList = () => {
  return(
    <div className='row gx-4 gx-lg-5 justify-content-center'>
      <Post/>

    </div>
  );
}

const Post = () => {
  return(
    <div className='col-md-10 col-lg-8 col-xl-7'>
        <h2 className='post-title'> User name: Pesho</h2>
        <p  className='post-meta'> This is my first article here....  </p>
        <button  className="btn btn-primary text-uppercase">Like</button>
    </div>
  );
}


const PostAdding = () => {
  return(
    <div className='contactForm'>
      <PostAddingForm></PostAddingForm>
      <div className='form-floating'>
        <button  className="btn btn-primary text-uppercase ">Add post</button>
      </div>
    </div>
  );
}

const PostAddingForm = () => {
  return(
    <div className='form-floating'>
      <input className='form-control is-invalid' id='name' type='text' placeholder='Enter your name...'>
      </input>
      <input className='form-control is-invalid' id='post' type='text' placeholder='Write your post...'>
      </input>
    </div>
  );
}

export default App;
