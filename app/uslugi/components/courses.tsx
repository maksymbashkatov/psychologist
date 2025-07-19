import Course from './course';
import styles from './courses.module.css';
import Title from './title';

const courses = [
  {
    title: 'Курс по...',
    content: 'Скоро здесь появится курс, а пока кликайте по кнопке и переходите в мой телеграм канал.'
  },
    {
    title: 'Тренинг по...',
    content: 'Скоро здесь появится тренинг, а пока кликайте по кнопке и переходите в мой телеграм канал.'
  },
    {
    title: 'Курс по...',
    content: 'Скоро здесь появится курс, а пока кликайте по кнопке и переходите в мой телеграм канал.'
  }
];

export default function Courses() {
  return <section className='section'>
    <div className={`${styles.container} container`}>
      <Title title='Курсы и тренинги'/>
      {courses.map((c, i) =>
        <Course
          key={i}
          title={c.title}
          content={c.content}
        />
      )}
    </div>
  </section>
}