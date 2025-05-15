import Link from 'next/link';
import styles from './about-me.module.css';

const theses = [
  {id: 1, content: 'Практикующий психолог'},
  {id: 2, content: 'Сертифицированный экзистенциальный и психоаналитический психотерапевт'},
  {id: 3, content: 'Опыт работы более 13 лет'}
]

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
        <p className={styles.quote}>“Помогаю исследовать внутренние тупики, разбираться с чувствами, осознавать конфликты, искать смыслы и осуществлять выбор.”</p>
        <Link href='/obo-mne' className={styles.button}>
          <p>Подробнее</p>
        </Link>
      </div>
    </div>
  </section>
}