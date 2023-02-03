import React, { useState } from 'react'
import './Register.css'
import { Link } from 'react-router-dom'
import axios from 'axios'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'
const Register = () => {
  const [err, setErr] = useState(false)

  const shema = yup.object({
    username: yup
      .string()
      .required('Không được để trống')
      .max(25, 'Tối đa 25 ký tự'),
    email: yup
      .string()
      .email('Không đúng định dạng email')
      .max(255)
      .required('Không được để trống'),
    password: yup
      .string()
      .oneOf([yup.ref('password'), null])
      .required('Không được để trống')
      .min(8, 'Password không đủ 8 kí tự'),
  })
  const {
    register,
    handleSubmit,
    formState: { errors },
    getValues,
  } = useForm({ resolver: yupResolver(shema) })

  const Submit = async () => {
    const username = getValues('username')
    const email = getValues('email')
    const password = getValues('password')
    // setErr(false)
    try {
      const res = await axios.post('http://localhost:5000/api/auth/register', {
        username,
        email,
        password,
      })
      res.data && window.location.replace('/login')
    } catch (err) {
      // setErr(true)
    }
  }

  return (
    <div className="register">
      <span className="registerTitle">Đăng ký</span>
      <form className="registerForm" onSubmit={handleSubmit(Submit)}>
        <label>Username</label>
        <input
          className="registerInput"
          type="text"
          name="username"
          placeholder="Tên tài khoản của bạn"
          {...register('username')}
          // onChange={(e)=>setUsername(e.target.value)}
        />
        <p style={{ color: 'red' }}>{errors.username?.message}</p>
        <label>Email</label>
        <input
          name="email"
          className="registerInput"
          type="text"
          placeholder="Email"
          {...register('email')}
          // onChange={(e)=>setEmail(e.target.value)}
        />
        <p style={{ color: 'red' }}>{errors.email?.message}</p>

        <label>Mật khẩu</label>
        <input
          name="password"
          className="registerInput"
          type="password"
          placeholder="Password"
          {...register('password')}
          // onChange={(e)=>setPassword(e.target.value)}
        />
        <p style={{ color: 'red' }}>{errors.password?.message}</p>
        <button type="submit" className="registerButton">
          Đăng Ký
        </button>
      </form>
      <button className="loginButton">
        <Link className="link" to="/login">
          Đăng nhập
        </Link>
      </button>
      {err && <span style={{ color: 'red' }}>Đăng kí thất bại</span>}
    </div>
  )
}

export default Register
