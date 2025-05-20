'use client';
import Questions from './questions';
import styles from './questions.module.css';

export default function QuestionsClient() {
  return <section className={`${styles.section} section`}>
    <Questions/>
  </section>
}