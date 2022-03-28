import { styled } from '../stitches.config'
import Head from 'next/head'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import ShortcutHome from '../components/ShortcutHome'
import { PostMain, PostContent, PostContainer } from '../components/Post'
import { Wrapper } from '../components/Wrapper'

export async function getStaticProps() {
  return {
    props: {
      title: 'Rodrigo Celvo',
      description: 'An starting developer ',
      image: 'https://github.com/rodrigocelvo.png',
    },
  }
}

export default function Index(props) {
  const { title, description, image } = props

  return (
    <Wrapper>
      <Head>
        <title>{title}</title>
        <meta content={title} property="og:title" />
        <meta content={description} name="description" />
        <meta content={description} property="og:description" />
        <meta content="https://rodrigocelvo.dev" property="og:url" />
        <meta content={`${image}`} property="og:image" />
      </Head>

      <Navbar />
      <Home>
        <PostContent>
          <PostContainer>
            <div>
              <h1

              // style={{
              //   background: `linear-gradient(
              //   135deg,
              //   var(--colors-purple) 0%,
              //   var(--colors-pink) 100%
              // )`,
              //   "background-size": "100",
              //   "-webkit-background-clip": "text",
              //   "-moz-background-clip": "text",
              //   "-webkit-text-fill-color": "transparent",
              //   "-moz-text-fill-color": "transparent",
              // }}


              >{title}</h1>
              <p>
                <strong>Programador iniciante</strong><br />
                {description}
              </p>
              <ShortcutHome />
            </div>
          </PostContainer>
        </PostContent>
      </Home>
      <Footer />
    </Wrapper >
  )
}

const Home = styled(PostMain, {
  alignItems: 'center',
  display: 'flex',
  margin: '0 auto',
  '@bp2': { width: 800 },
})