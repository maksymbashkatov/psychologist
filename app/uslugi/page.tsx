import Services from './components/services';

export function generateMetadata() {
  return {
    title: 'Услуги предоставляемые психологом Лонской Дианой.',
    description: 'Индивидуальная и групповая психотерапия, супервизии и консультации для личностного роста, преодоления тревоги и укрепления эмоционального благополучия.',
    alternates: {
      canonical: `https://dianalonskaya.com/uslugi`,
    }
  };
}

export default function Page() {
  return <main>
    <Services/>
  </main>;
}