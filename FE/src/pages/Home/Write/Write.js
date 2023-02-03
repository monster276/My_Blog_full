import React, { useContext, useState } from 'react'
import './Write.css'
import AddIcon from '@mui/icons-material/Add'
import axios from 'axios'
import { Context } from '../../../context/Context'

const Write = () => {
  const [title, setTitle] = useState("");
  const [name, setName] = useState([]);
  const [desc, setDesc] = useState("");
  const [file, setFile] = useState(null);
  const { user } = useContext(Context);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newPost = {
      username: user.username,
      title,
      desc,
    };
    const newCategory = {
     name,
   }
    if (file) {
      const data =new FormData();
      const filename =  file.name;
      data.append("name", filename);
      data.append("file", file);
      newPost.photo = filename;
      try {
        await axios.post("http://localhost:5000/api/upload", data);
      } catch (err) {}
    }
    try {
      const res = await axios.post("http://localhost:5000/api/posts", newPost);
      window.location.replace("/post/" + res.data._id);
    } catch (err) { }
     try {
       const res = await axios.post("http://localhost:5000/api/categories", newCategory);
       
      window.location.replace("/post/" + res.data._id);
    } catch (err) {}
  };
  return (
    <div className="write">
      {file && (
        <img
          className="writeImg"
          src={URL.createObjectURL(file)}
          alt=""
        />
      )}
      <form className="writeform" onSubmit={handleSubmit}>
        <div className="writeFormGroup">
          <label htmlFor="fileInput">
            <AddIcon className="writeIcon"></AddIcon>
          </label>
          <input
            type="file"
            id="fileInput"
            style={{ display: 'none' }}
            onChange={(e) => setFile(e.target.files[0])}
          />
          <input
            type="text"
            placeholder="Nội dung"
            className="writeInput"
            autoFocus={true}
            onChange={e=>setTitle(e.target.value)}
          />
          <input
            type="text"
            placeholder="Phân loại bài đăng"
            className="writeInput"
            autoFocus={true}
            onChange={e=>setName(e.target.value)}
          />
        </div>
        <div className="writeFormGroup">
          <textarea rows="10" cols="100"
            className="writeInput writeText"
            type="text"
            placeholder="Hãy kể câu chuyện của bạn nào"
            onChange={e=>setDesc(e.target.value)}
          ></textarea>
        </div>
        <button className="writeSubmit" type="submit">
          Đăng bài
        </button>
      </form>
    </div>
  )
}

export default Write
