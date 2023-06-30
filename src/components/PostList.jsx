import React from 'react';
import PostItem from './PostItem';

function PostList({postsList, title}) {
  return (
    <div>
      <h1 style={{ textAlign: 'center' }}>
        {title}
      </h1>
      {postsList.map(postEl =>
        <PostItem postprops={postEl} key={postEl.id}/>
      )}      
    </div>
  )
}

export default PostList;
