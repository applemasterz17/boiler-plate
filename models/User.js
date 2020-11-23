const mongoose = require('mongoose')

const userSchema = mongoose.Schema({
    name: {
        type: String,
        maxlength: 50
    },
    email: {
        type: String,
        trim: true, // 스페이스 없애줌 
        unique: 1   // 중복 불가
    },
    password: {
        type: String,
        minlength: 5
    },
    lastname: {
        type: String,
        maxlength: 50
    },
    role: { 
        // 관리자, 일반유저 구분 
        type: Number,
        default: 0
    },
    image: String,
    token: {
        // 유효성 관리
        type: String
    }, 
    tokenExp: {
        // 토큰 사용기간
        type: Number
    }
})

const User = mongoose.model('User', userSchema)

module.exports = { User }