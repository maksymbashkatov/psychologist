import styles from './title.module.css';

export default function Title(
  { title }: { title: string }
) {
  return <h2 className={styles.title}>{title}</h2>
}