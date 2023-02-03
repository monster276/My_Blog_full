import React, { useEffect, useState } from 'react'
import './SideBar.css'
import { v4 } from 'uuid'
import { Link } from 'react-router-dom'
import {
  FacebookRounded,
  Twitter,
  Pinterest,
  Instagram,
  Search,
} from '@mui/icons-material'
import axios from 'axios'
const Sidebar = () => {
  const [cats, setCats] = useState([])
  useEffect(() => {
    const getCats = async () => {
      const res = await axios.get('http://localhost:5000/api/categories')
      console.log(res)
      setCats(res.data)
    }
    getCats()
  }, [])
  return (
    <div className="sideBar">
      <div className="sidebarItem">
        <span className="sideBarTitle">ABOUT ME</span>
        <img
          src="https://media.istockphoto.com/id/1130150680/photo/blog-and-information-website-concept-workplace-background-with-text.jpg?s=612x612&w=0&k=20&c=BtknpmORYmgMHN5Qty7N0o5mvsk204BG-q4oR8gFl_g="
          alt=""
        />
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis
          perspiciatis unde dolore, pariatur aliquam placeat reiciendis
        </p>
      </div>
      <div className="sidebarItem">
        <span className="sideBarTitle">CATEGORIES</span>
        <ul className="sidebarList">
          {cats.map((c) => (
            <Link key={v4()} to={`/?cat=${c.name}`} className="link">
              <li  className="sidebarListItem">
                {c.name}
              </li>
            </Link>
          ))}
        </ul>
      </div>
      <div className="sidebarItem">
        <span className="sideBarTitle">THEO DÕI</span>
        <div className="sidebarSocial">
          <FacebookRounded className="sidebarIcon"></FacebookRounded>
          <Twitter className="sidebarIcon"></Twitter>
          <Pinterest className="sidebarIcon"></Pinterest>
          <Instagram className="sidebarIcon"></Instagram>
        </div>
      </div>
    </div>
  )
}

export default Sidebar
