'use client';
import { useState } from 'react';
import styles from './hero.module.css';
import Hero from './hero';

export default function HeroClient() {
  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => setIsOpen(true);
  const closeModal = () => setIsOpen(false);

  return <section className={styles.hero}>
    <Hero
      isOpen={isOpen}
      openModal={openModal}
      closeModal={closeModal}
    />
  </section>;
}