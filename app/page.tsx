import Hero from './components/hero';
import AboutMe from './components/about-me';
import Services from './components/services';
import ArticleCards from './components/article-cards';
import QuestionsClient from './components/questions-client';

export default function Page() {
  return <main>
    <Hero/>
    <AboutMe/>
    <Services/>
    <ArticleCards/>
    <QuestionsClient/>
  </main>;
}