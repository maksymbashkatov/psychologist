import styles from './open-modal.module.css';

export default function OpenModal(
  { openModal, name }:
  { openModal: () => void, name: string }
) {
  return <button
    id='openModal'
    className={styles.openModal}
    type='button'
    onClick={openModal}
    aria-haspopup='dialog'
    aria-controls='modal'
  >
    { name }
  </button>
}