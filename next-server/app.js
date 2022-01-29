const express = require('express')
//node.js api 서버 만들기  
const cors = require('cors')
//동일 도메인이 아닐때 사용하는 미들웨어
const app =express();
const PORT =8090;
const {posts} = require('./data.js')
app.use(cors());
//  미들웨어 걸기

//  api/posts로 클라이언트에서  요청이 들어오면 
// 서버에서 요청을 req 받은후 res로 응답 
//  res로 data.js에있는 posts를 json 형식으로 클라이언트로 반환 
app.get('/api/posts', (req,res)=>{
    res.json(posts)
})
//  해당포트로 서버 열기
app.listen(PORT, ()=> console.log(`server running on ${PORT}`))