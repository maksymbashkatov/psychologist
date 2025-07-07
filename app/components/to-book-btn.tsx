'use client';

import { useState } from 'react';
import OpenModal from './open-modal';
import ModalForm from './modal-form';

export default function ToBookBtn(
  { name }:
  { name: string }
) {
  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => setIsOpen(true);
  const closeModal = () => setIsOpen(false);

  return <>
    <OpenModal
      openModal={openModal}
      name={name}
    />
    {isOpen && <ModalForm onClose={closeModal} />}
  </>;
}