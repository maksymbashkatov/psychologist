import Link from 'next/link';
import styles from './course.module.css';

export default function Course(
  { title, content } : { title: string, content: string }
) {
  return <div className={styles.course}>
    <div><p>?</p></div>
    <div className={styles.content}>
      <h3>{title}</h3>
      <p>{content}</p>
      <Link href='https://t.me/diana_lonskaya' target='_blank' rel='nofollow noopener noreferrer'>
        <p>Перейти в телеграм</p>
      </Link>
    </div>
  </div>
}