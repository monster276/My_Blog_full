import React from 'react'
import './Header.css'
const Header = () => {
  return (
    <div className="header">
      <div className="headerTitle">
        <span className="headerTiltleSm">MERN stack project</span>
        <span className="headerTitlelg">Blog</span>
      </div>
      <img
        className="headerImg"
        src="https://img.freepik.com/free-photo/neutral-abstract-texture-simple-background_53876-102509.jpg?w=1480&t=st=1672194883~exp=1672195483~hmac=c8c89e2ae852f3c8e86ae8865d2dc99e1bee0bb45c2b13fb3bd9cff908cc08ff"
        alt=""
      />
    </div>
  )
}

export default Header
