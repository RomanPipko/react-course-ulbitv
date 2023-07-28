import React from 'react';

function PostItem(itemProps) {
  return (
      <div className='post'>
        <div className='post__content'>
        <strong>{itemProps.postprops.id}. {itemProps.postprops.title}</strong>
          <div>
            {itemProps.postprops.body}
          </div>
        </div>
        <div className='post__btn'>
          <button>Delete</button>
        </div>
      </div>
  )
}

export default PostItem;