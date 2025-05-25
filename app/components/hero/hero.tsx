import ModalForm from '../modal-form';
import OpenModal from '../open-modal';
import styles from './hero.module.css';

export default function Hero(
  { isOpen, openModal, closeModal }:
  { isOpen: boolean, openModal: () => void, closeModal: () => void }
) {
  return <div className={`${styles.heroContainer} container`}>
      <div className={styles.heroContent}>
        <h1 className={styles.mainTitle}>
          <span>Лонская Диана</span>
          <span>Владимировна</span>
          <span>Индивидуальное консультирование и психоаналитическая терапия взрослых</span>
        </h1>
        <p className={styles.quote}>“Помогаю быть, а не стать.”</p>
        <OpenModal
          openModal={openModal}
          name='Записаться'
        />
      </div>
      {isOpen && <ModalForm onClose={closeModal} />}
    </div>;
}