import HeroClient from './hero-client';
import HeroServer from './hero-server';
import styles from './hero.module.css';

export default function Hero() {
  return <section className={styles.hero}>
    <div className={`${styles.heroContainer} container`}>
      <div className={styles.heroContent}>
        <HeroServer/>
        <HeroClient/>
      </div>
    </div>
  </section>;
}