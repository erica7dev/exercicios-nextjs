//routes
//import Link from 'next/link'
import styles from '../styles/Home.module.css'
import Head from 'next/head'
import Image from 'next/image'

export default function Home() {
  return (
    <>
      <Head>
      <title>Página principal</title>
      <meta name="keywords" content="Roupas, Calçados, Bonés"></meta>
      <meta name="description" content="Encontre a melhor roupa para você"></meta>
      </Head>
    <h1 className={styles.title}>Hello World Next!</h1>
    <Image src="/images/eri.jpg" width="200px"height="200px" alt="Cidade a noite"/>
    </>
  )
}
