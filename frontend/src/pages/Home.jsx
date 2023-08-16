import React, { useState, useEffect } from 'react'
import Post from '../components/Post'

function Home() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3000/api/v1/posts')
      .then(raw => raw.json())
      .then(({ posts }) => setPosts(posts))
      .catch(error => console.log(error));
  }, []);

  return (
    <>
      {
        posts.map(post => (
          <Post
            key={post._id}
            {...post}
          />
        ))
      }
    </>
  )
}

export default Home