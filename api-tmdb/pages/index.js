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
          Bem vindo a <a href="/">MOVIE DATABASE</a>
        </h1>

        <p className={styles.description}>
          Milhões de Filmes, Séries e Pessoas para Descobrir. Explore já.{' '}

        </p>

        <div className={styles.grid}>
          <a href="/" className={styles.card}>
            <h3>Os mais populares &rarr;</h3>
            <p>Find in-depth information about Next.js features and API.</p>
          </a>
          <div class="movie-container">
            <div class="movie">
              <img src="https://image.tmdb.org/t/p/w500${filme.poster_path}" />
              <p class="movie-title">${ }</p>
            </div>
          </div>

          <a href="/" className={styles.card}>
            <h3>Gratis para assistir&rarr;</h3>
            <p>Learn about Next.js in an interactive course with quizzes!</p>
          </a>

          <a
            href="/"
            className={styles.card}
          >
            <h3>Ultimos Trailers &rarr;</h3>
            <p>Discover and deploy boilerplate example Next.js projects.</p>
          </a>

          <a
            href="/"
            className={styles.card}
          >
            <h3>Tendencias &rarr;</h3>
            <p>
              Instantly deploy your Next.js site to a public URL with Vercel.
            </p>
          </a>
        </div>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://github.com/jacsonsm/Cappacita_api_tmdb.git"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <img src="/" alt="jsm" className={styles.logo} />
        </a>
      </footer>
    </div>
  )
}
