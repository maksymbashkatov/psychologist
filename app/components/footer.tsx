import styles from './footer.module.css';
import { menu } from '../data';
import Link from 'next/link';
import Telegram from './social-icons/telegram';
import WhatsApp from './social-icons/whatsapp';
import Youtube from './social-icons/youtube';
import Instagram from './social-icons/instagram';

export default function Footer() {
  return <footer id='kontakty' className='section'>
    <div className={`${styles.container} container`}>
      <div className={styles.contacts}>
        <h4>Диана Лонская</h4>
        <p>dialon.psy@gmail.com</p>
        <div className={styles.socials}>
          <Telegram fill={'#4C5866'}/>
          <WhatsApp fill={'#A6ABB3'}/>
          <Youtube fill={'#A6ABB3'}/>
          <Instagram fill={'#A6ABB3'}/>
        </div>
      </div>
      <div className={styles.menu}>
        <h4>Меню</h4>
        {
          menu.map((m) => <Link
            key={m.id}
            href={m.link}
          >
            {m.text}
          </Link>)
        }
      </div>
      <div className={styles.details}>
        <h4>Реквизиты</h4>
        <p>Индивидуальный предприниматель</p>
        <p>Лонская Диана Владимировна</p>
        <p>ИНН: 772025729466</p>
      </div>
      <div className={styles.privacy}>
        <Link href={'/privacy'} target='blank'>Политика конфиденцеальности</Link>
        <Link href={'/'}>Оферта</Link>
      </div>
    </div>
  </footer>
}