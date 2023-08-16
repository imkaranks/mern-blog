import React, { useState } from 'react'
import { Navigate } from 'react-router-dom'
import MDEditor from '../components/MDEditor';

function CreatePost() {
  const [ post, setPost ] = useState({
    title: '',
    summary: '',
    files: '',
    content: ''
  });
  const [redirect, setRedirect] = useState(false);

  function handleInput(event) {
    setPost(prevPost => ({
      ...prevPost,
      [event.target.name]: event.target?.files || event.target.value
    }));
  }

  async function createNewPost(event) {
    event.preventDefault();
    const { title, summary, content, files } = post;
    const data = new FormData();
    data.set('title', title);
    data.set('summary', summary);
    data.set('content', content);
    data.set('file', files[0]);
    const response = await fetch('http://localhost:3000/api/v1/posts/new', {
      method: 'POST',
      body: data,
      credentials: 'include'
    });
    if (response.ok) {
      setRedirect(true);
    }
  }

  if (redirect) {
    return <Navigate to='/' />
  }
  return (
    <form className='max-w-md mx-auto' onSubmit={createNewPost}>
      <input
        className='block mb-1.5 w-full p-2 border-2 border-[#ddd] rounded-md bg-white'
        type="title"
        name="title"
        id="title"
        placeholder='Enter your title'
        value={post.title}
        onChange={handleInput}
      />
      <input
        className='block mb-1.5 w-full p-2 border-2 border-[#ddd] rounded-md bg-white'
        type="summary"
        name="summary"
        id="summary"
        placeholder='Enter your summary'
        value={post.summary}
        onChange={handleInput}
      />
      <input
        className='block mb-1.5 w-full p-2 border-2 border-[#ddd] rounded-md bg-white'
        type="file"
        name="files"
        onInput={handleInput}
      />
      <MDEditor
        value={post.content}
        onChange={content => setPost(prevPost=>({
          ...prevPost,
          content
        }))}
      />
      <button className='mt-1.5 w-full bg-[#555] text-white border-none rounded-md p-2' type="submit">Create Post</button>
    </form>
  )
}

export default CreatePost