import HeroClient from './components/hero/hero-client';
import AboutMe from './components/about-me';
import ServicesClient from './components/services/services-client';
import ArticleCards from './components/article-cards';
import QuestionsClient from './components/questions-client';

export default function Page() {
  return <main>
    <HeroClient/>
    <AboutMe/>
    <ServicesClient/>
    <ArticleCards/>
    <QuestionsClient/>
  </main>;
}