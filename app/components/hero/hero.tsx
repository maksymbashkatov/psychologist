import ToBookBtn from '../to-book-btn';
import styles from './hero.module.css';

export default function Hero() {
  return <section className={styles.hero}>
    <div className={`${styles.heroContainer} container`}>
      <div className={styles.heroContent}>
        <h1 className={styles.mainTitle}>
        <span>Психоаналитический терапевт и психолог</span>
        <span>Индивидуальное консультирование и психоаналитическая терапия взрослых</span>
        </h1>
        <p className={styles.quote}>Помогаю исследовать внутренние тупики, разбираться с чувствами, осознавать конфликты, искать смыслы и осуществлять выбор.</p>
        <ToBookBtn name='Записаться'/>
      </div>
    </div>
  </section>;
}