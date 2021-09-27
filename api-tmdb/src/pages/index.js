import Head from 'next/head'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>CappacitaDev TMDB</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Bem vindo aos <a href="https://www.cappacita.com.br/">Filmes da CappacitaDev</a>
        </h1>

        <p className={styles.description}>
          Milhões de Filmes, Séries e Pessoas para Descobrir.Explore já.{' '}

        </p>

        <div className={styles.grid}>
          <a href="/" className={styles.card}>
            <h3>Os mais populares &rarr; </h3>
            <p>Veja aqui os filmes mais assistidos no momentp!</p>
          </a>
          <div class="movie-container">


          </div>

          <a href="/" className={styles.card}>
            <h3>Gratis para assistir&rarr; </h3>
            <p>Veja aqui, os filmes gratis disponíveis para assistir!</p>
          </a>

          <a
            href="/"
            className={styles.card}
          >
            <h3>Ultimos Trailers &rarr; </h3>
            <p>Veja aqui os trailers dos lançamentos disponíveis no cinema.</p>
          </a>

          <a
            href="/"
            className={styles.card}
          >
            <h3>Tendencias &rarr; </h3>
            <p>
              Os melhores...
            </p>
          </a>
        </div>
      </main >

      <footer className={styles.footer}>
        <a
          href="https://github.com/jacsonsm/Cappacita_api_tmdb.git"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by {'https://github.com/jacsonsm'}
          <img src="https://avatars.githubusercontent.com/u/65376794?v=4" alt="" className={styles.logo} />
        </a>
      </footer>
    </div >
  )
}
