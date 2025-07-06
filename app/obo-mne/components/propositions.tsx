import styles from './propositions.module.css';

export default function Propositions() {
  return <section className={`${styles.propositions} container`}>
    <h3 className={styles.title}>Направления работы</h3>
    <div className={styles.proposition}>
      <img src='/propositions/1.webp'></img>
      <h3>Индивидуальные консультации очно и онлайн</h3>
    </div>
    <div className={styles.proposition}>
      <img src='/propositions/2.webp'></img>
      <h3>Вебинары и курсы</h3>
    </div>
    <div className={styles.proposition}>
      <img src='/propositions/3.webp'></img>
      <h3>Длительная терапия</h3>
    </div>
    <div className={styles.proposition}>
      <img src='/propositions/4.webp'></img>
      <h3>Супервизия</h3>
    </div>
    <p>Это позволит вам изменить привычный взгляд на себя, увидеть скрытые мотивы ваших выборов и привнесет в вашу жизнь больше осмысленности и удовлетворенности</p>
  </section>
}