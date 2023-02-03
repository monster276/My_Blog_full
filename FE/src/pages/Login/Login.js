import axios from 'axios'
import  { useContext, useRef } from 'react'
import { Link } from 'react-router-dom'
import { Context } from '../../context/Context'

import './Login.css'
const Login = () => {
  const userRef = useRef()
  const passwordRef = useRef()
  const {  dispatch, isFetching } = useContext(Context)
  const handleSubmit = async (e) => {
    e.preventDefault()
    dispatch({ type: 'LOGIN_START' })
    try {
      const res = await axios.post('http://localhost:5000/api/auth/login/', {
         username: userRef.current.value,
         password: passwordRef.current.value,
      })
      dispatch({
        type: 'LOGIN_SUCCESS',
        payload: res.data,
      })
    } catch (error) {
      dispatch({ type: 'LOGIN_FALURE' })
    }
  }
  return (
    <div className="login">
      <span className="loginTitle">Đăng nhập</span>
      <form className="loginForm" onSubmit={handleSubmit}>
        <label>Tên tài khoản</label>
        <input
          className="loginInput"
          type="text"
          placeholder="Điền tên tài khoản"
          ref={userRef}
        />
        <label>Mật khẩu</label>
        <input
          className="loginInput"
          type="password"
          placeholder="Password"
          ref={passwordRef}
        />
        <button className="loginButtons" type="submit" disabled={isFetching}>
          Đăng nhập
        </button>
      </form>
      <button className="RegisterButton">
        <Link className="link" to="/register">
          Đăng ký
        </Link>
      </button>
    </div>
  )
}

export default Login
