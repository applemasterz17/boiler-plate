const express = require('express')
const app = express()
const port = 3000
const bodyParser = require('body-parser')
const config = require('./config/key')
const { User } = require('./models/User')

// application/x-www-form-urlencoded 분석
app.use(bodyParser.urlencoded({extended: true}));
// application/json 분석
app.use(bodyParser.json());

// 몽구스 연결 
const mongoose = require('mongoose')
mongoose.connect(config.mongoURI,{
    useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true, useFindAndModify:false
}).then(() => console.log('mongoDB Connected...'))
  .catch(err => console.log(err))

app.get('/', (req, res) => res.send('Hello World!'))


app.post('/register', (req, res) => {
    // 회원 가입 할때 필요한 정보들을 client에서 가져오면
    // 그것들을 데이터 베이스에 넣어준다.

    // body-parser 가 req.body 로 바로 받아줄수 있게 한다
    const user = new User(req.body)

    // client 에게 json 형식으로 전달
    // 에러 : false, 에러내용
    // 성공 : true
    user.save((err, userInfo) => {
        if(err) return res.json({success: false, err})
        return res.status(200).json({
            success: true
        })
    })
})


app.listen(port, () => console.log(`Example app listening on port ${port}!`))