import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import './Topbar.css'
import {
  FacebookRounded,
  Twitter,
  Pinterest,
  Instagram,
  Search,
} from '@mui/icons-material'
import { Context } from '../../context/Context'
const Topbar = () => {
  const PF = "http://localhost:5000/images/";

  const { user, dispatch } = useContext(Context)
  const handleLogout = () => {
    dispatch({
      type: 'LOGOUT',
    })
  }
  return (
    <div className="top">
      <div className="topLeft">
        <FacebookRounded className="topIcon"></FacebookRounded>
        <Twitter className="topIcon"></Twitter>
        <Pinterest className="topIcon"></Pinterest>
        <Instagram className="topIcon"></Instagram>
      </div>
      <div className="topCenter">
        <ul className="topList">
          <li className="topListItem">
            <Link to="/" className="link">
              TRANG CHỦ
            </Link>
          </li>
          <li className="topListItem">ABOUT</li>
          <li className="topListItem">LIÊN HỆ</li>
          <li className="topListItem">
            <Link className="link" to="/write">
              ĐĂNG BÀI
            </Link>
          </li>
          <li className="topListItem" onClick={handleLogout}>
            {user && 'ĐĂNG XUẤT'}
          </li>
        </ul>
      </div>
      <div className="topRight">
        {user ? (
          <Link to='/setting' className='topbarUser'>
            <img className="topImg" src={PF + user.profilePic} alt="" />  
            <span>Hello {user.username}</span>
          </Link>
            
        ) : (
          <ul className="topList">
            <li className="topListItem">
              <Link className="link" to="register">
                ĐĂNG KÝ
              </Link>
            </li>
            <li className="topListItem">
              <Link className="link" to="login">
                ĐĂNG NHẬP
              </Link>
            </li>
          </ul>
        )}
        <Search className="topSearchIcon"></Search>
      </div>
    </div>
  )
}

export default Topbar
