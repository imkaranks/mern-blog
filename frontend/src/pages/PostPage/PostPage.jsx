import React, { useState, useEffect, useContext } from 'react'
import { Link, useParams } from 'react-router-dom';
import { formatISO9075 } from 'date-fns'
import { UserContext } from '../../context/UserContext'
import './PostPage.css';

function PostPage() {
  const { id } = useParams();
  const [post, setPost] = useState(null);
  const { userInfo } = useContext(UserContext);

  useEffect(() => {
    fetch('http://localhost:3000/api/v1/posts/'+id)
      .then(raw => raw.json())
      .then(({post}) => setPost(post))
      .catch(error => console.log(error));
  }, []);
  
  if (!post) {
    return <h1>Loading...</h1>
  }
  return (
    <article className='postPage | flex flex-col gap-5 mt-5 mb-7'>
      <div className='postPage__image | max-h-80 overflow-hidden'>
        <img
          src={`http://localhost:3000/${post.imageUrl}`}
          className='w-full h-hull object-cover object-center'
          alt="..."
        />
      </div>
      <div className='postPage__content'>
        <h1 className='postPage__title | m-0 text-3xl'>{post.title}</h1>
        <p className='postPage__author my-1.5 text-xs text-[#888] font-bold flex gap-3'>
          <cite className='text-[#333]'>{post.author.username}</cite>
          <time>{formatISO9075(new Date(post.createdAt))}</time>
        </p>
        {
          userInfo.id === post.author._id && (
            <Link to={`/edit/${id}`} className='bg-[#333] !text-white !no-underline inline-flex mt-0.5 py-1.5 px-6 rounded'>Edit this post</Link>
          )
        }
        <p className='postPage__summary my-2.5 leading-relaxed'>{post.summary}</p>
        <div dangerouslySetInnerHTML={{__html: post.content}}></div>
      </div>
    </article>
  )
}

// 2:39:00

export default PostPage