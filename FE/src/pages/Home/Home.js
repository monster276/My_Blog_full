import React, { useEffect, useState } from 'react'
import Header from '../../components/Header/Header'
import Post from '../../components/Post/Post'
import Posts from '../../components/Posts/Posts'
import Sidebar from '../../components/SideBar/Sidebar'
import axios from 'axios'
import './Home.css'
import Single from './Single/Single'
import { useLocation } from 'react-router-dom'
import Footer from '../../components/Foot/Footer'
const Home = () => {
  const {search} = useLocation([])
  const [posts, setPost] = useState([])
  const fetchPosts = async () => {
    const res = await axios.get("http://localhost:5000/api/posts/"+search)
    const data = res.data
    console.log(data)
    setPost(data)
  }
  useEffect(() => {
    fetchPosts()
  }, [search])

  return (
    <>
      <Header></Header>
      <div className="home">
        <Posts  posts={posts}></Posts>
        <Sidebar></Sidebar>
      </div>
      <Footer></Footer>
    </>
  )
}

export default Home
