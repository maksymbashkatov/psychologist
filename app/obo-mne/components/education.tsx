import CheckMark from './check-mark';
import styles from './education.module.css';

export default function Education() {
  return <section className={`${styles.container} container`}>
    <h3 className={styles.title}>Образование</h3>
    <CheckMark/>
    <p className={styles.institution}>Московский Городской Психолого-Педагогический Университет (МГППУ), специальность – психолог</p>
    <CheckMark/>
    <p className={styles.institution}>МГППУ, кафедра Специальной психологии, аспирантура </p>
    <CheckMark/>
    <p className={styles.institution}>Институт психологии и психоанализа на Чистых прудах – «Теория и техника современного психоанализа»</p>
    <CheckMark/>
    <p className={styles.institution}>Школа практического психоанализа – «Психоаналитическое консультирование. Теория и практика» </p>
    <CheckMark/>
    <p className={styles.institution}>Семинары тренинг-аналитиков SPP (Парижского Психоаналитического Общества)</p>
    <CheckMark/>
    <p className={styles.institution}>Обучающий курс по экзистенциональной психотерапии</p>
  </section>
}