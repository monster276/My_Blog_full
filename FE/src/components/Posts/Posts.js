import React from 'react'
import Post from '../Post/Post'
import './Posts.css'
import { v4 } from 'uuid'
const Posts = ({ posts }) => {
  return (
    <div className="posts">
      {posts.map((p) => (
        <Post post={p} key={v4()} />
      ))}
    </div>
  )
}

export default Posts
