import Link from 'next/link';
import styles from './propositions.module.css';

export default function Propositions() {
  return <section className={`${styles.propositions} container`}>
    <h3 className={styles.title}>Направления работы</h3>
    <div className={styles.proposition}>
      <img
        src='/propositions/1.webp'
        alt='Психолог проводит онлайн консультацию.'
      ></img>
      <h3>Индивидуальные консультации очно и онлайн</h3>
    </div>
    <div className={styles.proposition}>
      <img
        src='/propositions/2.webp'
        alt='Несколько человек празднуют окончание курса.'
      ></img>
      <h3>Вебинары и курсы</h3>
    </div>
    <div className={styles.proposition}>
      <img
        src='/propositions/3.webp'
        alt='Психотерапевт проводит длительную терапию.'
      ></img>
      <h3>Длительная терапия</h3>
    </div>
    <div className={styles.proposition}>
      <img
        src='/propositions/4.webp'
        alt='Опытный психолог делится знаниями с молодым.'
      ></img>
      <h3>Супервизия</h3>
    </div>
    <div className={styles.text}>
      <p>Это позволит вам изменить привычный взгляд на себя, увидеть скрытые мотивы ваших выборов и привнесет в вашу жизнь больше осмысленности и удовлетворенности.</p>
      <p>Также вы можете ознакомиться с моими постами и заметками <span className={styles.link}><Link href='https://t.me/diana_lonskaya' target='_blank' rel='nofollow noopener noreferrer'>ЗДЕСЬ</Link></span>. В них я делюсь размышлениями о психической экономике, динамике чувств и отношениях с собой — серьёзно о глубоком…</p>
    </div>
  </section>
}