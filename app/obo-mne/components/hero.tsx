import styles from './hero.module.css';

export default function Hero() {
  return <section className={styles.hero}>
    <div className={`${styles.heroContainer} container`}>
      <h1 className={styles.firstTitle}>
        <span>Лонская Диана</span>
        <span>Владимировна</span>
      </h1>
      <h2 className={styles.secondTitle}>
        <span>Ассоциированный член Московской психоаналитической ассоциации (МПА) </span>
        <span>Преподаватель и супервизор учебных групп в АНО ДПО "Высшая школа психологии"</span>
        <span>Автор и преподаватель программы повышения квалификации «Основы психоанализа», «Психоаналитическая диагностика»</span>
      </h2>
      <p className={styles.quote}>«Клиенты говорят, что совместная работа помогла им развернуть свою жизнь на 180 градусов, увидеть неочевидное в очевидном, обнаружить скрытые смыслы своих симптомов и выйти из тупика»</p>
    </div>
    <div className={styles.titleBack}>
      <div className={styles.title}>
        <h1>
          <span>Лонская Диана</span>
          <span>Владимировна</span>
        </h1>
        <h2>
          <span>Ассоциированный член Московской психоаналитической ассоциации (МПА) </span>
          <span>Преподаватель и супервизор учебных групп в АНО ДПО "Высшая школа психологии"</span>
          <span>Автор и преподаватель программы повышения квалификации «Основы психоанализа», «Психоаналитическая диагностика»</span>
        </h2>
      </div>
    </div>
  </section>
}