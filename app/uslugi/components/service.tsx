import ToBookBtn from '@/app/components/to-book-btn';
import styles from './service.module.css';

export default function Service(
  { src, alt, title, subTitle, content, conditions }:
  { src: string, alt: string, title: string, subTitle: string, content: Array<string>, conditions: Array<string[]> }
) {
  return <div className={styles.service}>
    <img
      src={src}
      alt={alt}
    />
    <div className={styles.card}>
      <h3 className={styles.title}>
        {title}
        <span className={styles.subTitle}>{subTitle}</span>
      </h3>
      <div className={styles.content}>
        {content.map((p, i) =>
          <p key={i}>{p}</p>
        )}
      </div>
      {conditions.map((с, i) =>
        <p key={i} className={styles.condition}><span>{с[0]}</span> {с[1]}</p>
      )}
      <ToBookBtn name='Записаться'/>
    </div>
  </div>
}