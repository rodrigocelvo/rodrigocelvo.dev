import { styled } from '../stitches.config'
import React from 'react'
import Head from 'next/head'
import Image from 'next/image'

import Base from '../layouts/Base'
import stripHtml from '../lib/strip-html'

export async function getStaticProps() {
  const meta = {
    title: 'Sobre - Rodrigo Celvo',
    description:
      "Essa página faz uma introdução sobre mim.",
    tagline: 'Sobre mim.',
    image: 'https://github.com/rodrigocelvo.png',
    primaryColor: 'purple',
    secondaryColor: 'pink',
  }

  return { props: meta }
}

const yearAnniversary = new Date('2001-03-01');
const yearExperience = new Date('2020-01-01');

function About(props) {
  const { title, description, image } = props

  const renderIntro = () => {
    return (
      <Container>
        <Section>
          <Image
            alt="Rodrigo Celvo"
            src="/static/images/rc.jpeg"
            width="610"
            height="600"
            placeholder="blur"
            blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAQAAAAECAIAAAAmkwkpAAAACXBIWXMAABYlAAAWJQFJUiTwAAAAP0lEQVQImQE0AMv/AFBQUJKSkqmpqaOjowCurq7v7+/Jycm5ubkA////jIyMn5+fg4ODADAwMD09PWlpaQAAAApRGnEHblMWAAAAAElFTkSuQmCC"
            priority
          />
        </Section>
        <Section>
          <Paragraph
            css={{
              marginTop: '16px',
              '@bp2': { marginTop: '-6px' },
            }}
          >
            Me chamo <strong>Rodrigo Celvo</strong>, tenho <strong>{new Date().getFullYear() - yearAnniversary.getFullYear()}</strong> anos.
          </Paragraph>

          <Paragraph>
            Comecei a me interessar por programação em 2012, quando tive meus primeiros contatos com a web e  especificamente os fóruns, após isso comecei  a fazer formulários em PHP por hobby.
          </Paragraph>

          <Paragraph>
            Há {new Date().getFullYear() - yearExperience.getFullYear()} anos conheci o mundo <strong>JavaScript</strong> sendo minha atual stack hoje em dia e tendo às principais tecnologias: <strong>Node.js</strong>, <strong>ReactJS</strong> e  <strong>React Native</strong>.
          </Paragraph>

          <Paragraph>
            Atualmente, estou cursando <strong>Análise e Desenvolvimento de Sistemas</strong> na <i><a href="https://www.fecaf.com.br">Fecaf</a></i>,
          </Paragraph>
        </Section>
      </Container >
    )
  }

  return (
    <>
      <Head>
        <title>{title}</title>
        <meta content={title} property="og:title" />
        <meta content={stripHtml(description)} name="description" />
        <meta content={stripHtml(description)} property="og:description" />
        <meta content="https://rodrigocelvo.dev/sobre" property="og:url" />
        <meta content={`${image}`} property="og:image" />
      </Head>

      {renderIntro()}
    </>
  )
}

const Container = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
  '@bp2': { flexDirection: 'row' },
})

const Paragraph = styled('p', {
  '@bp2': { margin: '15px 0' },
})

const Section = styled('div', {
  marginTop: '0px',
  width: 'auto',
  '@bp2': { width: '48%' },
})

About.Layout = Base

export default About
