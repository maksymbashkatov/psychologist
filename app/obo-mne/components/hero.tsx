import styles from './hero.module.css';

export default function Hero() {
  return <section className={styles.hero}>
    <div className={`${styles.heroContainer} container`}>
      <h1 className={styles.firstTitle}>
        <span>Лонская Диана</span>
        <span>Владимировна</span>
      </h1>
      <h2 className={styles.secondTitle}>
        <span className={styles.serial}>1</span><span>Практикующий психолог</span>
        <span className={styles.serial}>2</span><span>Психоаналитический психотерапевт</span>
        <span className={styles.serial}>3</span><span>Ассоциированный член Московской психоаналитической ассоциации (МПА)</span>
        <span className={styles.serial}>4</span><span>Преподаватель и супервизор учебных групп в АНО ДПО "Высшая школа психологии"</span>
        <span className={styles.serial}>5</span><span>Автор и преподаватель программы повышения квалификации "Основы психоанализа", "Психоаналитическая диагностика"</span>
        <span className={styles.serial}>6</span><span>Опыт преподавания более 7 лет</span>
      </h2>
    </div>
    <div className={styles.titleBack}>
      <div className={styles.title}>
        <h2>
          <span>Практикующий психолог</span>
          <span>Психоаналитический психотерапевт</span>
          <span>Ассоциированный член Московской психоаналитической ассоциации (МПА)</span>
          <span>Преподаватель и супервизор учебных групп в АНО ДПО "Высшая школа психологии"</span>
          <span>Автор и преподаватель программы повышения квалификации "Основы психоанализа", "Психоаналитическая диагностика"</span>
          <span>Опыт преподавания более 7 лет</span>
        </h2>
      </div>
    </div>
  </section>
}