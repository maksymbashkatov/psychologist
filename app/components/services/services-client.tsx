'use client';
import { useState } from 'react';
import styles from './services.module.css';
import Services from './services';

export default function ServicesClient() {
  const [isOpen, setIsOpen] = useState(false);
  
  const openModal = () => setIsOpen(true);
  const closeModal = () => setIsOpen(false);

  return <section className={`${styles.section} section`}>
    <Services
      isOpen={isOpen}
      openModal={openModal}
      closeModal={closeModal}
    />
  </section>
}