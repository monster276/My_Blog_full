import React from 'react'
import './Footer.css'
import {
  FacebookRounded,
  Twitter,
  Pinterest,
  Instagram,
  Search,
} from '@mui/icons-material'
const Footer = () => {
  return (
    <div>
      <footer>
        <img src="/blog.png" alt="" />
        <div className="topLeft">
          <FacebookRounded className="topIcon"></FacebookRounded>
          <Twitter className="topIcon"></Twitter>
          <Pinterest className="topIcon"></Pinterest>
          <Instagram className="topIcon"></Instagram>
        </div>
        <span>
          Made with ♥️ and <b>React.js</b>.
        </span>
      </footer>
    </div>
  )
}

export default Footer
