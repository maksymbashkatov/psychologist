import Hero from './components/hero';
import Propositions from './components/propositions';
import Education from './components/education';
import Diploms from './components/diploms';

export function generateMetadata() {
  return {
    title: 'Лонская Диана Владимировна - практикующий психолог 13+ лет.',
    description: 'Психолог поможет вам изменить привычный взгляд на себя, увидеть скрытые мотивы вашего выбора и придаст вашей жизни больше осмысленности и удовлетворенности.',
    alternates: {
      canonical: `https://dianalonskaya.com/obo-mne`,
    }
  };
}

export default function Page() {
  return <main>
    <Hero/>
    <Propositions/>
    <Education/>
    <Diploms/>
  </main>;
}