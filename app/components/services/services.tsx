import styles from './services.module.css';
import { serviceCards } from '../../data';
import ModalForm from '../modal-form';
import OpenModal from '../open-modal';

export default function Services(
  { isOpen, openModal, closeModal }:
  { isOpen: boolean, openModal: () => void, closeModal: () => void }
) {
  return <div className={`${styles.container} container`}>
    <h2 className={styles.title}>Области моей практики</h2>
    <p className={styles.quote}>Если Вы здесь, значит, у вас есть не только интерес и любопытство, но и какая-то неудовлетворенность, боль, страдание или сложность в получении удовольствия от жизни.</p>
    <div className={styles.serviceCards}>
      {
        serviceCards.map((s) => <div
          key={s.id}
          className={styles.card}
        >
          <img
            src={s.src}
            alt={s.alt}
          />
          <h3>{s.title}</h3>
          <p>{s.content}</p>
        </div>)
      }
    </div>
    {/* <p className={styles.quote}>“Но бывает так, что чётко сформулированной потребности нет, а лишь ощущение, что жизнь проживается не в полной мере – некая недостаточность, неудовлетворенность, отсутствие желаний, непонимание себя. И это тоже сигнал для работы.”</p> */}
    <OpenModal
      openModal={openModal}
      name='Записаться на консультацию'
    />
    {isOpen && <ModalForm onClose={closeModal} />}
  </div>;
}