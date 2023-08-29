import React, { useState, useEffect } from 'react'
import Pagination from '@mui/material/Pagination';
import Post from '../components/Post'
import Loader from '../components/Loader';

function Home() {
  const [response, setResponse] = useState({
    posts: null,
    resultsPerPage: null,
    postsCount: null
  });
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(true);

  const { posts, resultsPerPage, postsCount } = response;
  const pages = postsCount % resultsPerPage
    ? Math.floor(postsCount / resultsPerPage) + 1
    : postsCount / resultsPerPage;

  useEffect(() => {
    setLoading(true);
    fetch(`http://localhost:3000/api/v1/posts/?page=${page}`)
      .then(raw => raw.json())
      .then(({ posts, resultsPerPage, postsCount }) => {
        setResponse(state => ({
          ...state,
          posts,
          resultsPerPage,
          postsCount
        }));
      })
      .catch(error => alert(error.message))
      .finally(() => setLoading(false));
  }, [page]);

  if (loading) {
    return <Loader />;
  }
  return (
    <>
      {
        posts && posts.map(post => (
          <Post
            key={post._id}
            {...post}
          />
        ))
      }
      {
        resultsPerPage < postsCount && (
          <div className='flex gap-4 justify-center items-center'>
            <Pagination
              count={pages}
              page={page}
              onChange={(e, val) => setPage(val)}
              showFirstButton
              showLastButton
            />
          </div>
        )
      }
    </>
  )
}

export default Home