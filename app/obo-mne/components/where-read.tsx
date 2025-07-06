import Link from 'next/link';
import styles from './where-read.module.css';

export default function WhereRead() {
  return <section className={`${styles.whereRead} container`}>
    <h3 className={styles.title}>Где меня читать</h3>
    <p>Мои посты и заметки можно читать <span className={styles.link}><Link href='https://t.me/diana_lonskaya' target='_blank' rel='nofollow noopener noreferrer'>ЗДЕСЬ</Link></span>. Там я делюсь своими размышлениями о психической экономике, динамике чувств и отношениях с собой, серьезно о глубоком…</p>
  </section>
}