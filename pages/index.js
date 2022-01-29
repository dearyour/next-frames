import Link from "next/link";

export default function Home({ posts }) {
  console.log(posts);
  return (
    <div>
      <h1>Welcome to My Blog</h1>
      <ul>
        {posts.map((post) => (
          <li key={post.id}>
            {post.title} @@본문내용 {post.body}
          </li>
        ))}
      </ul>
    </div>
  );
}

// 서버사이드렌더링
// 해당 인덱스페이지 들어올때마다 서버에서 데이터를 받아온다
// export const getServerSideProps = async () => {
//   const res = await fetch(`https://jsonplaceholder.typicode.com/posts?_start=0&_end=10`)
//   const posts = await res.json();

//   return {
//     props: {
//       posts
//     }
//   }
// }

// Static Site Generation
// 미리 해당 index.js를 next에서 index.html파일로 만들어서 만들어진 html을 보여주는 방식
// 데이터가 바뀌었을때 실시간으로 변하지는 않음
// 실시간 데이터변화를 보여줄 필요가 없다면 ssg로 미리 데이터를 html+ 데이터 파일을 만들어서
// 해당 페이지의 html를 보여주면 상당히 빠른 렌더링과 처리속도를 보여줄수있다.
export const getStaticProps = async () => {
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/posts?_start=0&_end=10`
  );
  // const res = await fetch(`http://localhost:8090/api/posts`)
  const posts = await res.json();

  return {
    props: {
      posts,
    },
    revalidate: 20,
    //처음 접속후 20초가 지나면 다시 새로운 데이터가 포함된 html파일을 생성할수 있도록 지정
  };
};
