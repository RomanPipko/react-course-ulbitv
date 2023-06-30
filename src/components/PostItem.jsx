import React from 'react';

function PostItem(propsiki) {
  return (
      <div className='post'>
        <div className='post__content'>
        <strong>{propsiki.postprops.id}. {propsiki.postprops.title}</strong>
          <div>
            {propsiki.postprops.body}
          </div>
        </div>
        <div className='post__btn'>
          <button>Delete</button>
        </div>
      </div>
  )
}

export default PostItem;