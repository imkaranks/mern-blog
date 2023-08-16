import React from 'react'
import { Link } from 'react-router-dom'
import { formatISO9075 } from 'date-fns'

function Post({ _id, title, author, summary, content, imageUrl, createdAt }) {
  return (
    <article className='post | flex flex-col sm:flex-row gap-5 mt-5 mb-7'>
      <div className='post__image | sm:flex-[0.3]'>
        <Link to={`/posts/${_id}`}>
          <img
            src={`http://localhost:3000/${imageUrl}`}
            className='h-full object-cover'
            alt="..."
          />
        </Link>
      </div>
      <div className='post__content | sm:flex-[0.7]'>
        <Link to={`/posts/${_id}`}>
          <h2 className='post__title | m-0 text-3xl'>{title}</h2>
        </Link>
        <p className='post__author my-1.5 text-xs text-[#888] font-bold flex gap-3'>
          <cite className='text-[#333]'>{author.username}</cite>
          <time>{formatISO9075(new Date(createdAt))}</time>
        </p>
        <p className='post__summary my-2.5 leading-relaxed'>{summary.slice(0, 200)}...</p>
      </div>
    </article>
  )
}

export default Post