import Link from 'next/link';
import Illustration from '../components/Illustration';
import styles from '../styles/HomePage.module.scss';
// import useSound from 'use-sound';
// import boopSfx from './glug-a.438a61d8.mp3';
export default function HomePage() {

  // const [play] = useSound(boopSfx);
  return (
    <>
      <div className={styles.container}>
        <div className={styles.background}>
          {/* <h1>I BUILD</h1>
          <h1>WEBSITES</h1> */}
        </div>
        <div className={styles.foreground}>
          <div className={styles.content}>
            <h1 className={styles.name}>Gavin Mach</h1>
            <h6 className={styles.bio}>Full Stack Web Developer</h6>
            <Link href="/about">
              <button className={styles.button}>About</button>
            </Link>
            <Link href="/projects">
              <button className={styles.button}>View Work</button>
            </Link>
          </div>
          {/* <Illustration className={styles.illustration} /> */}
        </div>
      </div>
    </>
  );
}

export async function getStaticProps() {
  return {
    props: { title: 'Home' },
  };
}
