import Nav from "./Nav";
import Head from "next/head";
/*index와 photo 페이지 가 children에 드러간다,,
그전에 _app에 레이아웃을 적용시킨다 
페이지 전체적으로 적용된다 , */
const Layout = ({ children }) => {
  return (
    <>
      <Head>
        <title>My Blog</title>

        <meta keyword="My Blog powered by Next js" />
        <meta contents="My Blog powered by Next js" />
      </Head>
      <Nav />
      <div>{children}</div>
    </>
  );
};

export default Layout;
