import Service from './service';
import styles from './services.module.css';

const services = [
  {
    id: 1,
    src: '/services/service1.webp',
    alt: '',
    title: 'Консультация',
    subTitle: '(по любому краткосрочному запросу – от одной до нескольких встреч)',
    content: [
      'Такая работа позволяет вам прояснить свою ситуацию, посмотреть на проблему с разных сторон и уточнить свой запрос. Понять, насколько вам подходит такой формат работы и почувствовать, насколько вам комфортно и безопасно говорить о себе. Моя задача – понять, как я могу вам помочь и определить оптимальный вариант дальнейшей работы.',
      'Даже если вы решите не продолжать работу, результаты консультации дадут вам возможность сориентироваться в вашем запросе и путях его решения.',
      'Этот формат подходит для решения короткого запроса, прояснения текущей проблемы и понимания перспектив.'
    ],
    conditions: [
      ['Форматы:', 'очный (в кабинете в центре Москвы) и онлайн'],
      ['Продолжительность:', '50 мин'],
      ['Стоимость:', '6000 руб']
    ]
  }
];

export default function Services() {
  return <section className={`${styles.section} section`}>
    <div className={`${styles.container} container`}>
      <h2 className={styles.title}>Услуги</h2>
      {services.map((s) =>
        <Service
          key={s.id}
          src={s.src}
          alt={s.alt}
          title={s.title}
          subTitle={s.subTitle}
          content={s.content}
          conditions={s.conditions}
        />
      )}
    </div>
  </section>
}