import Link from 'next/link';
import styles from './header.module.css';
import { menu } from '../data';
import Telegram from './social-icons/telegram';
import WhatsApp from './social-icons/whatsapp';
import Youtube from './social-icons/youtube';
import Instagram from './social-icons/instagram';

export default function Header(
) {
  return <header>
    <div className={`${styles.header} container`}>
      <Link className={styles.logo} href='/'>Диана Лонская</Link>
      <nav className={styles.menu}>
        {
          menu.map((m) =>
          <Link className={styles.menuItem} href={m.link} key={m.id}>
            {m.text}
          </Link>)
        }
      </nav>
      <div className={styles.socials}>
        <Telegram fill={'#FFF'}/>
        <WhatsApp fill={'#DFBFC0'}/>
        <Youtube fill={'#DFBFC0'}/>
        <Instagram fill={'#DFBFC0'}/>
      </div>
    </div>
  </header>
}