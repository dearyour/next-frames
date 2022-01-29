import '../styles/globals.css'
import Layout from '../components/Layout'


/* Nav -> Layout -> _app -> index,home 
실질적인 컨텐츠는 Component에 들어가고 
그 컴포넌트를 Layout 으로 감쌌다.*/
function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  )
}

export default MyApp
