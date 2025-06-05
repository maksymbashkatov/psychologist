import styles from './questions.module.css';
import { questions } from '../data';

export default function Questions(
  { openAnswers, toggleAnswer }: {openAnswers: Record<number, boolean>, toggleAnswer: any}
) {
  return <div className={`${styles.container} container`}>
    <h2 className={styles.title}>Основные вопросы</h2>
    {
      questions.map((q) => <div
        key={q.id}
      >
        <div className={styles.qaHeader}>
          <h4 className={styles.qTitle}>{q.title}</h4>
          <div className={styles.toggle} onClick={() => toggleAnswer(q.id)}>
            <div className={styles.toggleL1}></div>
            <div className={`${styles.toggleL2} ${openAnswers[q.id] ? styles.toggleL2Hidden : ''}`}></div>
          </div>
        </div>
        <div className={`${styles.answer} ${openAnswers[q.id] ? styles.aVisible : ''}`}>
          {
            q.content.map((c, i) => <p
              key={i + 1}
            >
              {c}
            </p>)
          }
        </div>
    </div>)
    }
  </div>
}