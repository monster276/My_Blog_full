import React, { useContext, useEffect, useState } from 'react'
import './SinglePost.css'
import { useLocation, Link } from 'react-router-dom'
import { Edit, Delete } from '@mui/icons-material'
import axios from 'axios'
import Post from '../Post/Post'
import { Context } from '../../context/Context'
const SinglePost = () => {
  const PF = 'http://localhost:5000/images/'
  const location = useLocation()
  const path = location.pathname.split('/')[2]
  const [post, setPost] = useState({})
  const { user } = useContext(Context)
  const [title, setTitle] = useState('')
  const [desc, setDesc] = useState('')
  const [update, setUpdate] = useState(false)
  const handleUpdate = async () => {
    try {
      await axios.put(`http://localhost:5000/api/posts/${post._id}`, {
        username: user.username,
        title,
        desc,
      })
      window.location.reload()
    } catch (error) {}
  }
  const handleDelete = async () => {
    try {
      await axios.delete(`http://localhost:5000/api/posts/${post._id}`, {
        data: { username: user.username },
      })
      window.location.replace("/");
    } catch (error) {}
  }
  useEffect(() => {
    const getPost = async () => {
      const res = await axios.get('http://localhost:5000/api/posts/' + path)
      setPost(res.data)
      setTitle(res.data.title)
      setDesc(res.data.desc)
    }
    getPost()
  }, [path])
  return (
    <div className="singlePost">
      <div className="singlePostWrapper">
        {post.photo && (
          <img className="singlePostImg" src={PF + post.photo} alt="" />
        )}
        {update ? (
          <input
            type="text"
            value={title}
            className="singlepostTitleInput"
            autoFocus
            onChange={(e) => setTitle(e.target.value)}
          />
        ) : (
          <h1 className="singlepostTitle">
            {post.title}
            {post.username === user?.username && (
              <div className="singlePostEdit">
                <Edit
                  className="singlePostIcon"
                  onClick={() => setUpdate(true)}
                ></Edit>
                <Delete
                  className="singlePostIcon"
                  onClick={handleDelete}
                ></Delete>
              </div>
            )}
          </h1>
        )}

        <div className="singlePostInfo">
          <span className="singlePostAuthor">
            Author:
            <Link className="link" to={`/?user=${post.username}`}>
              <b className='userName'>{post.username}</b>
            </Link>
          </span>
          <span className="singlePostDate">
            {new Date(post.createdAt).toDateString()}
          </span>
        </div>
        {update ? (
          <textarea
            value={desc}
            className="singlePostDecInput"
            onChange={(e) => setDesc(e.target.value)}
          />
        ) : (
          <p className="singlePostDec">{desc}</p>
        )}
        {update && (
          <button className="singlePostButton" onClick={handleUpdate}>
            Update
          </button>
        )}
      </div>
    </div>
  )
}

export default SinglePost
