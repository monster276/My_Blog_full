import React, { useContext, useState } from 'react'
import './Setting.css'
import '../../components/SideBar/Sidebar'
import Sidebar from '../../components/SideBar/Sidebar'
import AssignmentIndIcon from '@mui/icons-material/AssignmentInd'
import { Context } from '../../context/Context'
import axios from 'axios'

const Setting = () => {
  const { user, dispatch } = useContext(Context)
  const [file, setFile] = useState(null)
  const [username, setUsername] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [success, setSuccess] = useState(false)
  const PF = "http://localhost:5000/images/";

  const handleSubmit = async (e) => {
    e.preventDefault()
    dispatch({ type: 'UPDATE_START' })
    const updateUser = {
      userId: user._id,
      username,
      email,
      password,
    }
    if (file) {
      const data = new FormData()
      const filename = file.name
      data.append('name', filename)
      data.append('file', file)
      updateUser.profilePic = filename
      try {
        await axios.post('http://localhost:5000/api/upload', data)
      } catch (err) {}
    }
    try {
      const res = await axios.put('http://localhost:5000/api/users/' + user._id, updateUser)
      setSuccess(true)
      dispatch({ type: 'UPDATE_SUCCESS', payload:res.data })
    } catch (err) {
      dispatch({type:'UPDATE_FALURE'})

    }
  }
  return (
    <div className="setting">
      <div className="settingWrapper">
        <div className="settingTitle">
          <span className="settingUpdateTitle">Cập nhập thông tin của bạn</span>
          <span className="settingDeleteTiltle">Xoá tài khoản</span>
        </div>
        <form className="settingForm" onSubmit={handleSubmit}>
          <label>Ảnh đại diện</label>
          <div className="settingProfilePic">
            <img
              src={file ? URL.createObjectURL(file) : PF+user.profilePic}
              alt=""
            />
            <label htmlFor="fileInput">
              <AssignmentIndIcon className="settingIcon"></AssignmentIndIcon>
            </label>
            <input
              type="file"
              id="fileInput"
              style={{ display: 'none' }}
              onChange={(e) => setFile(e.target.files[0])}
            />
          </div>
          <label>Tài khoản</label>
          <input
            type="text"
            placeholder={user.username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <label>Email</label>
          <input
            type="email"
            placeholder={user.email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <label>Mật khẩu</label>
          <input
            type="password"
            onChange={(e) => setPassword(e.target.value)}
          />
          <button type="submit" className="settingSubmit">
            Cập nhật
          </button>
          {success && (
            <span
              style={{ color: 'green', textAlign: 'center', margin: '20px' }}
            >
              Update thành công...
            </span>
          )}
        </form>
      </div>
      <Sidebar></Sidebar>
    </div>
  )
}

export default Setting
