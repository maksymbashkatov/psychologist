'use client';

import { useState } from 'react';
import OpenModal from '../open-modal';
import ModalForm from '../modal-form';

export default function HeroClient() {
  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => setIsOpen(true);
  const closeModal = () => setIsOpen(false);

  return <>
    <OpenModal
      openModal={openModal}
      name='Записаться'
    />
    {isOpen && <ModalForm onClose={closeModal} />}
  </>;
}