import Head from 'next/head'
const HeadInfo = ({ title, keyword, contents }) => {
    return (
        <Head>
            {/*호출했던 지역 태그지역에서 받은 프롭을 지정 후 헤드에 저장한다. */}
            {/*컴포넌트 설정은 함수설정처럼 생각하자, 
            설정이되었다면 <HeadInfo title={stay} 등으로 다른 페이지,컴포넌트에서 쓰인다 >*/}
            <title>{title}</title>
            <meta keyword={keyword} />
            <meta contents={contents} />
        </Head>
    )
}
 /* 프롭스를 전달받지 못할지라도 기본 프롭스를 저장하여 오류를 방지한다 */
HeadInfo.defaultProps = {
    title: 'My Blog',
    keyword: 'Blog powered by Next js',
    contents: 'practice next js'
}


export default HeadInfo
