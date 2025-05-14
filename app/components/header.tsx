'use client';

import Link from 'next/link';
import styles from './header.module.css';
import { menu } from '../data';
import Telegram from './social-icons/telegram';
import WhatsApp from './social-icons/whatsapp';
import Youtube from './social-icons/youtube';
import Instagram from './social-icons/instagram';
import { useState } from 'react';

export default function Header(
) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  
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
      <div className={styles.mobMenuButton} onClick={toggleMenu}>
        {
          [1, 2, 3].map((e) => <div
            key={e}
            className={`${styles.mobMenuLine} ${isMenuOpen ? styles.mobMenuLineOpen: ''}`}
          >
          </div>)
        }
      </div>
      <div className={`${styles.mobMenu} ${styles.mobMenu1} ${isMenuOpen ? styles.mobMenuOpen : ''}`}></div>
      <nav className={`${styles.mobMenu} ${styles.mobMenu2} ${isMenuOpen ? styles.mobMenuOpen : ''}`}>
        {
          menu.map((m) =>
          <Link className={styles.menuItem} href={m.link} key={m.id} onClick={toggleMenu}>
            {m.text}
          </Link>)
        }
      </nav>
      <div className={`${styles.mobMenu} ${styles.mobMenu3} ${isMenuOpen ? styles.mobMenuOpen : ''}`}></div>
    </div>
  </header>;
}