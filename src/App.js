import React, { useState } from 'react';
import './styles/App.css'
import PostList from './components/PostList';
import MyButton from './components/UI/button/MyButton'
import MyInput from './components/UI/input/MyInput'


function App() {
  const [posts, setPosts] = useState([
    { id: 1, title: 'Javascript 1', body: 'Description' },
    { id: 2, title: 'Javascript 2', body: 'Description' },
    { id: 3, title: 'Javascript 3', body: 'Description' }
  ])
  
  const [title, setTitle] = useState('')

  const addNewPost = (e) => {
    e.preventDefault()
    console.log(title)
  }

  return (
    <div className="App">
      <form>
        <MyInput
          value={title}
          onChange={e=> setTitle(e.target.value)}
          type='text'
          placeholder='Post title' />
        <MyInput type='text' placeholder='Post description'/>
        <MyButton onClick={addNewPost}>Create post</MyButton>
      </form>

      <PostList  title='Posts for JS' postsList={posts}/>
    </div>
  );
}

export default App;
