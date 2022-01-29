![image](https://user-images.githubusercontent.com/52556956/151675087-9b3823fd-7102-4229-a67e-cb18d5c90d34.png)


# vercel을 이용한 배포완료 
https://next-frames.vercel.app/

# 전반적인 Next.js 개념
```
// Static Site Generation
// 미리 해당 index.js를 next에서 index.html파일로 만들어서 만들어진 html을 보여주는 방식
// 데이터가 바뀌었을때 실시간으로 변하지는 않음
// 실시간 데이터변화를 보여줄 필요가 없다면 ssg로 미리 데이터를 html+ 데이터 파일을 만들어서
// 해당 페이지의 html를 보여주면 상당히 빠른 렌더링과 처리속도를 보여줄수있다.
```
```

 revalidate: 20,
    //처음 접속후 20초가 지나면 다시 새로운 데이터가 포함된 html파일을 생성할수 있도록 지정
```
```
// 서버사이드렌더링
// 해당 인덱스페이지 들어올때마다 서버에서 데이터를 받아온다
```

```
placeholder에서 외부 이미지 url 가져올때는 next.config.js 에 아래 와같이 설정해줘야함 
module.exports = {
  images: {
    //외부 URL 사용할때 해당 https://도메인.com //?~~  도메인.com부분 등록해주자
    domains: ["via.placeholder.com"]
    }
}
```

```
동적라우팅 잘 처리해야 할것 

node.js와 express로 자체 서버를 만들어서 더미데이터 주는것 또한 앞으로 유용하게 쓰일수 있겠다
```


