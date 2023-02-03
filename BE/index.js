require('dotenv').config()
const cors = require('cors')
const express = require('express')
const authRoute = require('./routes/auth')
const userRoute = require('./routes/users')
const postRoute = require('./routes/posts')
const cateRoute = require('./routes/categories')
const { connectToDB } = require('./config/db')
const multer = require('multer')
const path = require('path')
const app = express()
const port = process.env.PORT || 5000
///Connect Mongo
connectToDB()
app.use('/images', express.static(path.join(__dirname, '/images')))
/// Storage
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'images')
  },
  filename: (req, file, cb) => {
    cb(null, 'heelo.jpeg')
  },
})
const upload = multer({ storage: storage })
app.post('/api/upload', upload.single('file'), (req, res) => {
  res.status(200).json('upload complete')
})
/// Midlewares
app.use(cors('*'))
app.use(express.json())

app.use('/api/auth', authRoute)
app.use('/api/users', userRoute)
app.use('/api/posts', postRoute)
app.use('/api/categories', cateRoute)

app.listen(port, () => {
  console.log(`back end is running on port: ${port}`)
})
