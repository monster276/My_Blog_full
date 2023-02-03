const mongooes = require('mongoose')
const userSchema = new mongooes.Schema({
    username: {
        type: String,
        require: true,
        unique:true
    },
    email: {
        type: String,
        require: true,
        unique:true
    },
    password: {
        type: String,
        require:true,
    },
    profilePic:{
        type: String,
        default:''
    }
}, { timestamps: true })
module.exports = mongooes.model("User", userSchema)
