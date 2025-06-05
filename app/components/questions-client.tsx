'use client';
import { useState } from 'react';
import Questions from './questions';
import styles from './questions.module.css';

export default function QuestionsClient() {
  const [openAnswers, setOpenAnswers] = useState<Record<number, boolean>>({});

  const toggleAnswer = (id: number) => {
    setOpenAnswers(prev => ({
      ...prev,
      [id]: !prev[id]
    }));
  };

  return <section className={`${styles.section} section`}>
    <Questions
      openAnswers={openAnswers}
      toggleAnswer={toggleAnswer}
    />
  </section>
}