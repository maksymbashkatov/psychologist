import Hero from './components/hero';
import Propositions from './components/propositions';
import Education from './components/education';
import Diploms from './components/diploms';

export default function Page() {
  return <main>
    <Hero/>
    <Propositions/>
    <Education/>
    <Diploms/>
  </main>;
}