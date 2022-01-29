import Image from "next/image";
import Link from "next/link";
const index = ({ photo }) => {
  // title = { photo.title}
  // url = { photo.url}
  const { title, url } = photo;
  return (
    <div>
      <h2>image {title}</h2>
      <Image src={url} width={500} height={500} />
      <Link href="/photos">
        <a>go back</a>
      </Link>
    </div>
  );
};

export const getStaticProps = async (context) => {
  //   const id = context.params.id;
  const { id } = context.params;
  const res = await fetch(`https://jsonplaceholder.typicode.com/photos/${id}`);
  const photo = await res.json();
  return {
    //해당 props을 위에 index = ({photo}) 에다가 넘김
    props: {
      photo,
    },
  };
};

//staticpaths가 자신이가진 params을 id:{id.toStirng() } staticprops에게 context 인자로 줌
// ex)  id:{id.toStirng()}
export const getStaticPaths = async () => {
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/photos?_start=0&_end=10`
  );
  const photos = await res.json();
  //받은 제이슨 객체의 id값들을 다 ids에 저장
  const ids = photos.map((photo) => photo.id);
  // 해당 id들을 아래 객체 params로 만듬
  // id 하나 돌면 또 하나 도니까 배열의 이름이 paths가되고
  // 하나하나 도는 map들은 그 배열안에 객체 params가 된다 , 중요 ★
  const paths = ids.map((id) => {
    return {
      //주소 파라미터에 문자열 형태로 들어가야하기 때문에 id를 문자열로 변환
      params: { id: id.toString() },

      //   paths : [
      //       {
      //         params: { id: '1' },
      //       },
      //       {
      //         params: { id: '2' },
      //       },
      //       {
      //         params: { id: '3' },
      //       }
      //   ]
    };
  });

  return {
    paths,
    fallback: false,
    // 해당파라미터 지정 경로가 없으면 404에러를 띄어준다
    //fallback  blocking 을하면 지정 경로가 없어도 보여준다
  };
};

export default index;
