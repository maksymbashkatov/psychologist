import Link from 'next/link';
import styles from './article-cards.module.css';
import { articleCards } from '../data';

export default function ArticleCards() {
  return <section className='section'>
    <div className={`${styles.container} container`}>
      <h2 className={styles.title}>Статьи и публикации</h2>
      {
        articleCards.map((c) => <div
          key={c.id}
          className={styles.card}
        >
          <h3>{c.title}</h3>
          <p>{c.content}</p>
          <Link href={c.href} className={styles.button}>
            <p>Подробнее</p>
          </Link>
        </div>)
      }
    </div>
  </section>
}