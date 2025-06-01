import styles from './article.module.css';

export default function Article(
  { title, src, alt, children }:
  { title: string, src: string, alt: string, children: React.ReactNode }
) {
  return <div className={`${styles.article} container`}>
    <h1>{title}</h1>
    <img
      src={src}
      alt={alt}
    />
    {children}
  </div>;
}