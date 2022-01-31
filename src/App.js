import './App.css';
import React from 'react';
import '../node_modules/startbootstrap-clean-blog/dist/css/styles.css';
import { PostList } from './PostList';
import { PostAdding } from './PostAdding';

function App() {
  return (
  <React.StrictMode >
    <div className='container px-4 px-lg-5'>
      <PostAdding></PostAdding>
      <PostList></PostList>
    </div>
  </React.StrictMode>);
}

export default App;
