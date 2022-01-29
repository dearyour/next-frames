import HeadInfo from "../components/HeadInfo";
import Image from "next/image";
import photosStyles from "../styles/Photos.module.css";
import Link from "next/link";
const photos = ({ photos }) => {
  return (
    <div>
      {/*컴포넌트의 헤드인포에 타이틀 프롭인자를 넘겨준다 */}
      <HeadInfo title="My Blog Photos" />
      <h1>My Photos</h1>
      <ul className={photosStyles.photos}>
        {photos.map((photo) => (
          <li key={photo.id}>
            <Link href={`/photos/${photo.id}`}>
              <a>
                <Image
                  src={photo.thumbnailUrl}
                  width={100}
                  height={100}
                  alt={photo.title}
                />
                <span>{photo.title}</span>
              </a>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export const getStaticProps = async () => {
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/photos?_start=0&_end=10`
  );
  const photos = await res.json();
  return {
    props: {
      photos,
    },
  };
};

export default photos;
