import Link from 'next/link';
import styles from './about-me.module.css';
import { theses } from '../data';

export default function AboutMe() {
  return <section className={`${styles.aboutMe} section`}>
    <div className={`${styles.container} container`}>
      <div className={styles.content}>
        <h2 className={styles.title}>Обо мне</h2>
        <div className={styles.theses}>
          {
            theses.map((t) => <div
              key={t.id}
              className={styles.thesis}
            >
              <div></div>
              <p>{t.content}</p>
            </div>)
          }
        </div>
        <Link href='/obo-mne' className={styles.button}>
          <p>Подробнее</p>
        </Link>
      </div>
    </div>
  </section>
}