import React from 'react'
import { Link } from 'react-router-dom'
import { format } from 'date-fns'

function Post({ _id, title, author, summary, imageUrl, createdAt }) { 
  const customProp = {
    '--bg': `url(http://localhost:3000/${imageUrl.replace('\\', '/')})`
  }

  return (
    <article className='post | flex flex-col sm:flex-row gap-5 mt-5 mb-7'>
      <div
        style={customProp}
        className={`post__image | sm:flex-[0.3] relative before:content-[''] before:-z-10 before:inset-0 before:absolute before:bg-[image:var(--bg)] before:bg-cover before:bg-no-repeat bg-center after:content-[''] after:inset-1 after:absolute after:bg-white after:-z-10`}
      >
        <Link to={`/posts/${_id}`}>
          <img
            src={`http://localhost:3000/${imageUrl}`}
            className='h-full object-cover transition-transform duration-300 hover:-translate-x-2 hover:-translate-y-2'
            alt="..."
          />
        </Link>
      </div>
      <div className='post__content | sm:flex-[0.7]'>
        <Link className='transition-all duration-300 ease hover:underline hover:underline-offset-4' to={`/posts/${_id}`}>
          <h2 className='post__title | m-0 text-3xl'>{title}</h2>
        </Link>
        <p className='post__author my-1.5 text-xs text-[#888] font-bold flex gap-3'>
          <cite className='text-[#333] not-italic'>{author.username}</cite>
          <time>{format(new Date(createdAt), 'PPP')}</time>
        </p>
        <p className='post__summary my-2.5 leading-relaxed'>{summary.length < 200 ? summary : `${summary.slice(0, 200)}...`}</p>
      </div>
    </article>
  )
}

export default Post