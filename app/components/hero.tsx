import styles from './hero.module.css';

export default function Hero() {
  return <section className={styles.hero}>
    <div className={`${styles.heroContainer} container`}>
      <div className={styles.heroContent}>
        <h1 className={styles.mainTitle}>
          <span>Лонская Диана</span>
          <span>Владимировна</span>
          <span>Индивидуальное консультирование и психоаналитическая терапия взрослых</span>
        </h1>
        <p className={styles.quote}>“Помогаю быть, а не стать.”</p>
        <button
          id='openModal'
          className={styles.openModal}
          type='button'
          aria-haspopup='dialog'
          aria-controls='modal'
        >
          Записаться
        </button>
      </div>
    </div>
  </section>;
}