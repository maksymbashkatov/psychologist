import Link from 'next/link';
import styles from './article-cards.module.css';
import { articles } from '../data';

export default function ArticleCards() {
  return <section id='stati' className='section'>
    <div className={`${styles.container} container`}>
      <h2 className={styles.title}>Статьи и публикации</h2>
      {
        articles.map((c) => <div
          key={c.id}
          className={styles.card}
        >
          <h3>{c.title}</h3>
          <p>{c.content}</p>
          <Link href={`/stati/${c.slug}`} className={styles.button}>
            <p>Подробнее</p>
          </Link>
        </div>)
      }
    </div>
  </section>
}