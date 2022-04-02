/* eslint-disable @next/next/no-img-element */
import ShortcutError from './ShortcutError'
import { Box } from './Box'
import Head from 'next/head'

export default function ErrorMessage({ code }) {
  let title = 'Erro: 500'
  let description = "Algo não saiu como o esperado."

  if (code === 404) {
    title = 'Erro: 404'
    description = "Parece que essa página não existe."
  }

  return (
    <>
      <Head>
        <title>{title} - Rodrigo Celvo</title>
        <meta content={title} property="og:title" />
        <meta content={title} name="description" />
        <meta content={title} property="og:description" />
        <meta content="https://rodrigocelvo.dev/projetos" property="og:url" />
        <meta content={`https://github.com/rodrigocelvo.png`} property="og:image" />
      </Head>
      <Box css={{
        textAlign: 'center', margin: '0 auto', maxWidth: '400px',
      }}>
        <h1>{title}</h1>
        <p>{description}</p>
        <img
          src="/static/images/astronaut.svg" alt="Ilustração de um astronauta com macbook na mão tentando encontrar o erro" />
        <ShortcutError />
      </Box >
    </>
  )
}
